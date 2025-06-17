import styles from "./styles.module.css";
import { AllConnection } from "./AllConnections";
import { AllFiles } from "./AllFiles";
import Tabs from "./Tabs";

export function Workspace() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>EY Data NeXt Workspace</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <AllFiles />
          <AllConnection />
        </div>
      </div>
      <Tabs />
    </div>
  );
}
