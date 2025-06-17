import Modal from "../../../Global/Modal";
import FolderIcon from "../../assets/folder.svg";
import { File } from "./File";
import styles from "./styles.module.css";

export function AllFiles() {
  return (
    <Modal
      title={"All Files"}
      buttonIcon={<img src={FolderIcon} alt="Connect" />}
      showFooter={false}
    >
      <div className={styles.container}>
        <div className={styles.container}>
          <p className={styles.title}>Created</p>
          <File />
          <File />
          {/* <p className={styles.empty_message}>You haven't created anything yet</p> */}
        </div>
        <div className={styles.container}>
          <p className={styles.title}>Added</p>
          <File />
          <File />
          {/* <p className={styles.empty_message}>You haven't added anything yet</p> */}
        </div>
      </div>
    </Modal>
  );
}
