import { useState } from "react";
import styles from "./styles.module.css";
import AttachIcon from "../../assets/pin.svg";
import SendIcon from "../../assets/send.svg";
import FileIcon from "../../assets/file.svg";
import { Input, Button, message, Upload } from "antd";

export function PromptInput({ inputValue, setInputValue, handleSend }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const uploadProps = {
    name: "file",
    multiple: true,
    showUploadList: false,
    beforeUpload: (file) => {
      // Add file immediately to the list without uploading
      const fileInfo = {
        uid: file.uid,
        name: file.name,
        size: file.size,
        file: file,
      };

      setUploadedFiles((prev) => [...prev, fileInfo]);
      message.success(`${file.name} added successfully`);

      // Return false to prevent automatic upload
      return false;
    },
    onChange(info) {
      // This handles the case if you want to enable actual uploading later
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
        {/* File chips display */}
        {uploadedFiles.length > 0 && (
          <div className={styles.fileChips}>
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
                <button
                  className={styles.removeFile}
                  onClick={() => removeFile(file.uid)}
                  type="button"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Input.TextArea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask anything or @mention an AI agent"
            className={styles.chatInput}
            autoSize={{ minRows: 3, maxRows: 10 }}
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
