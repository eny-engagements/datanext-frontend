import { useState } from "react";
import { Tabs } from "antd";
import styles from "./styles.module.css";
import { AllConnection } from "./AllConnections";
import { AllFiles } from "./AllFiles";

export function Workspace() {
  const [activeKey, setActiveKey] = useState("1");
  const [items, setItems] = useState([
    {
      label: (
        <span className={styles.tabLabel}>
          <span className={styles.tabDot}></span>
          Planner
        </span>
      ),
      key: "1",
      //   children: 'Content of editable tab 1',
    },
    {
      label: (
        <span className={styles.tabLabel}>
          <span className={styles.tabDot}></span>
          Planner
        </span>
      ),
      key: "2",
      //   children: 'Content of editable tab 2',
    },
  ]);

  const add = () => {
    const newKey = String((items || []).length + 1);
    setItems([
      ...(items || []),
      {
        label: (
          <span className={styles.tabLabel}>
            <span className={styles.tabDot}></span>
            Planner
          </span>
        ),
        key: newKey,
        // children: `Content of editable tab ${newKey}`,
      },
    ]);
    setActiveKey(newKey);
  };

  const remove = (targetKey) => {
    if (!items) return;
    const targetIndex = items.findIndex((item) => item.key === targetKey);
    const newItems = items.filter((item) => item.key !== targetKey);
    if (newItems.length && targetKey === activeKey) {
      const newActiveKey =
        newItems[
          targetIndex === newItems.length ? targetIndex - 1 : targetIndex
        ].key;
      setActiveKey(newActiveKey);
    }
    setItems(newItems);
  };

  const onEdit = (targetKey, action) => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>EY Data NeXt Workspace</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <AllFiles/>
          <AllConnection />
        </div>
      </div>
      <div className={styles.tabs}>
        <Tabs
          type="editable-card"
          activeKey={activeKey}
          onChange={setActiveKey}
          onEdit={onEdit}
          items={items}
          className={styles.customTabs}
          hideAdd={true}
        />
      </div>
    </div>
  );
}
