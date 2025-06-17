import { useState } from "react";
import styles from "./styles.module.css";
import logo from "../assets/logo.svg";
import BarIcon from "../assets/bar.svg";
import EditIcon from "../assets/edit.svg";
import SettingIcon from "../assets/setting.svg";
import UserIcon from "../assets/user.svg";
import Dropdown from "../../Global/Dropdown";
import PencilIcon from "../assets/pencil.svg"
import TrashIcon from "../assets/trash.svg"

export function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const items = [
    {
      label: (
        <a
          href="https://www.antgroup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit
        </a>
      ),
      icon: <img src={PencilIcon} />,
      key: "0",
    },
    {
      label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Delete
        </a>
      ),
      icon: <img src={TrashIcon} />,
      key: "1",
    },
  ];

  const chatHistory = [
    {
      title: "Today",
      items: ["Create a business glossary", "Create a Lineage for the... "],
    },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`${styles.sidebar} ${
        isCollapsed ? styles.collapsed : styles.expanded
      }`}
    >
      {/* Header */}
      <div className={styles.header}>
        {!isCollapsed && <img className={styles.logo} src={logo} alt="Logo" />}
        {!isCollapsed && (
          <span className={styles.headerText}>EY Data NeXt</span>
        )}
        <img
          onClick={toggleSidebar}
          src={BarIcon}
          alt="Toggle Menu"
          style={{
            cursor: "pointer",
            marginLeft: isCollapsed ? "0" : "auto",
          }}
        />
      </div>

      <div className={styles.chatSection}>
        {/* New Chat Button */}
        <button className={styles.newChatButton}>
          <img src={EditIcon} alt="Chat Edit" />
          {!isCollapsed && <span className={styles.newChatText}>New Chat</span>}
        </button>

        {/* Chat History - only show when expanded */}
        {!isCollapsed && (
          <div className={styles.chatHistory}>
            {chatHistory.map((section, index) => (
              <div key={index} className={styles.historySection}>
                <div className={styles.historyTitle}>{section.title}</div>
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={styles.chatItem}>
                    <p>{item}</p>
                    <div className={styles.dropdownWrapper}>
                      <Dropdown items={items} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <button className={styles.newChatButton}>
          <img src={SettingIcon} alt="Setting Icon" />
          {!isCollapsed && (
            <span className={styles.newChatText}>Admin Panel</span>
          )}
        </button>

        {/* User Info */}
        <button className={styles.newChatButton}>
          <img src={UserIcon} alt="Setting Icon" />
          {!isCollapsed && (
            <div>
              <div className={styles.userName}>Harshal Patil</div>
              <div className={styles.userEmail}>Harshal.Patil5@in.ey.com</div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
