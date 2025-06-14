import { Splitter } from "antd";
import { SideBar } from "./SideBar";
import styles from "./styles.module.css";
import { Chat } from "./Chat";
import { Workspace } from "./WorkSpace";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div className={styles.chatInterface}>
        <Splitter
          style={{ height: "100%", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
        >
          <Splitter.Panel defaultSize="50%" min="40%">
            <Chat />
          </Splitter.Panel>
          <Splitter.Panel defaultSize="50%" min="40%">
            <Workspace />
          </Splitter.Panel>
        </Splitter>
      </div>
    </div>
  );
}
