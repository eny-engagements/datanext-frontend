import styles from "./styles.module.css";
import FileIcon from "../../../assets/file.svg";
import Dropdown from "../../../../Global/Dropdown";
import DeleteIcon from "../../../assets/trash.svg";
import DownloadIcon from "../../../assets/download.svg";

const items = [
  {
    label: (
      <a
        href="https://www.antgroup.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download
      </a>
    ),
    icon: <img src={DownloadIcon} />,
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
    icon: <img src={DeleteIcon} />,
    key: "1",
  },
];

export function File() {
  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <img src={FileIcon} alt="file" />
        <div>
          <p>[Name_of_metadata_file]</p>
          <p>27 May, 10:58 pm</p>
        </div>
      </div>
      <div>
        <Dropdown items={items} />
      </div>
    </div>
  );
}
