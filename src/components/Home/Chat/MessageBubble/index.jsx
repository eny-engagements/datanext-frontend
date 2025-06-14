import styles from "./styles.module.css";

export function MessageBubble({ message }) {
    const isUser = message.type === "user";

    return (
      <div
        className={`${styles.messageWrapper} ${
          isUser ? styles.userMessage : styles.aiMessage
        }`}
      >
        {!isUser && (
          <div className={styles.aiAvatar}>
            <span>NeXT</span>
          </div>
        )}
        <div className={styles.messageContent}>
          {isUser && (
            <div className={styles.userTimestamp}>
              Harshal{" "}
              {message.timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          )}
          <div
            className={`${styles.messageBubble} ${
              isUser ? styles.userBubble : styles.aiBubble
            }`}
          >
            {message.content}
          </div>
        </div>
      </div>
    );
  };