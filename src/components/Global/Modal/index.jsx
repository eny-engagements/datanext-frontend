import React, { useState } from "react";
import { Button, Modal as AntdModal } from "antd";
import "./styles.module.css";

export default function Modal({
  children,
  title,
  buttonType = "link",
  buttonIcon,
  buttonContent,
  showFooter = true,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type={buttonType} icon={buttonIcon} onClick={showModal}>
        {buttonContent}
      </Button>
      <AntdModal
        title={title}
        closable={{ "aria-label": "Custom Close Button" }}
        centered={true}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          showFooter
            ? [
                <Button key="submit" type="primary" onClick={handleOk}>
                  Add the data source
                </Button>,
              ]
            : null
        }
      >
        {children}
      </AntdModal>
    </>
  );
}
