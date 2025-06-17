import styles from "./styles.module.css";
import ConnectionIcon from "../../../assets/connection.svg";
import Dropdown from "../../../../Global/Dropdown";
import DeleteIcon from "../../../assets/trash.svg";
import EditIcon from "../../../assets/pencil.svg";

export default function Connection() {
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
      icon: <img src={EditIcon} />,
      key: "0",
    },
    {
      label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Remove
        </a>
      ),
      icon: <img src={DeleteIcon} />,
      key: "1",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <img src={ConnectionIcon} alt="file" />
        <div>
          <p>Microsoft SQL Server {">"} LifePAS</p>
        </div>
      </div>
      <div>
        <Dropdown items={items} />
      </div>
    </div>
  );
}
