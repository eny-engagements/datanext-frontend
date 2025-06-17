import { useState } from "react";
import styles from "./styles.module.css";
import AttachIcon from "../../assets/pin.svg";
import SendIcon from "../../assets/send.svg";
import FileIcon from "../../assets/file.svg";
import CancelIcon1 from "../../assets/cross1.svg";
import CancelIcon2 from "../../assets/cross2.svg";
import { Button, message, Upload, Mentions } from "antd";

export function PromptInput({ inputValue, setInputValue, handleSend }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);

  const aiModels = [
    { id: "discover", name: "Discover", value: "discover" },
    { id: "define", name: "Define", value: "define" },
    { id: "lineage", name: "Lineage Extractor", value: "lineage" },
  ];

  const uploadProps = {
    name: "file",
    multiple: true,
    showUploadList: false,
    beforeUpload: (file) => {
      const fileInfo = {
        uid: file.uid,
        name: file.name,
        size: file.size,
        file: file,
      };

      setUploadedFiles((prev) => [...prev, fileInfo]);
      message.success(`${file.name} added successfully`);
      return false;
    },
    onChange(info) {
      console.log("Upload change:", info);
    },
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const removeFile = (fileUid) => {
    setUploadedFiles((prev) => prev.filter((file) => file.uid !== fileUid));
  };

  const removeModel = (modelValue) => {
    setSelectedModels((prev) =>
      prev.filter((model) => model.value !== modelValue)
    );
    // Also remove from input text
    const mentionPattern = new RegExp(`@${modelValue}\\s*`, "g");
    setInputValue((prev) => prev.replace(mentionPattern, ""));
  };

  const handleMentionSelect = (option) => {
    const model = aiModels.find((m) => m.value === option.value);
    if (model && !selectedModels.find((m) => m.value === model.value)) {
      setSelectedModels((prev) => [...prev, model]);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + sizes[i];
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputWrapper}>
        {/* File chips */}
        {uploadedFiles.length > 0 && (
          <div className={styles.chipsContainer}>
            {uploadedFiles.map((file) => (
              <div key={file.uid} className={styles.fileChip}>
                <div className={styles.fileIcon}>
                  <img src={FileIcon} alt="File" />
                </div>
                <div className={styles.fileInfo}>
                  <span className={styles.fileName}>{file.name}</span>
                  <span className={styles.fileSize}>
                    {formatFileSize(file.size)}
                  </span>
                </div>
                <Button
                  onClick={() => removeFile(file.uid)}
                  type="link"
                  shape="circle"
                  icon={<img src={CancelIcon1} />}
                />
              </div>
            ))}
          </div>
        )}

        {/* Model chips */}
        {selectedModels.length > 0 && (
          <div className={styles.chipsContainer}>
            {selectedModels.map((model) => (
              <div key={model.value} className={styles.modelChip}>
                <p className={styles.modelName}>@{model.name}</p>
                <Button
                  onClick={() => removeModel(model.value)}
                  style={{ height: "20px", width: "20px", minWidth: "0px" }}
                  type="link"
                  shape="circle"
                  icon={<img src={CancelIcon2} />}
                />
              </div>
            ))}
          </div>
        )}

        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Mentions
            value={inputValue.replace(/@\w+\s*/g, "")}
            onChange={setInputValue}
            onKeyDown={handleKeyPress}
            placeholder="Ask anything or @mention an AI agent"
            className={styles.chatInput}
            autoSize={{ minRows: 3, maxRows: 10 }}
            onSelect={handleMentionSelect}
            options={aiModels.map((model) => ({
              value: model.value,
              label: model.name,
            }))}
          />
          <div className={styles.inputActions}>
            <Upload {...uploadProps}>
              <Button
                type="text"
                icon={<img src={AttachIcon} alt="Attach" />}
                className={styles.attachButton}
              />
            </Upload>
            <Button
              type="text"
              icon={<img src={SendIcon} alt="Send" />}
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className={styles.sendButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
