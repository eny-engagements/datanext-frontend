import Modal from "../../../Global/Modal";
import ConnectIcon from "../../assets/connect.svg";
import "./styles.module.css";
import Connection from "./Connection";
import ManageConnection from "./ManageConnection";
// import styles from "./styles.module.css";

export function AllConnection() {
  return (
    <Modal
      title={"All Connections"}
      buttonIcon={<img src={ConnectIcon} alt="Connect" />}
      showFooter={false}
    >
      <div style={{ marginBottom: "12px" }}>
        <ManageConnection />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Connection />
        <Connection />
        <Connection />
      </div>
      {/* <p className={styles.empty_message}>You haven't added any connections</p> */}
    </Modal>
  );
}
