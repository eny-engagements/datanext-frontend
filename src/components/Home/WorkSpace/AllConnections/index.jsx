import Modal from "../../../Global/Modal";
import Select from "../../../Global/Select";
import Input from "../../../Global/Input";
import ConnectIcon from "../../assets/connect.svg";
import { Form } from "antd";
import "./styles.module.css";

export function AllConnection() {
  return (
    <Modal
      title={"Add New Data Source"}
      buttonContent={<img src={ConnectIcon} alt="Connect" />}
    >
      <Form
        name="ConnectForm"
        layout="vertical"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        autoComplete="off"
      >
        <Form.Item label="Select Database Type" name="database">
          <Select
            placeholder={"Microsoft SQL Server"}
            options={[
              { value: "Mongo DB", label: "Mongo DB" },
              { value: "MySQL", label: "MySQL" },
              { value: "PostgreSQL", label: "PostgreSQL" },
            ]}
          />
        </Form.Item>
        <Form.Item label="Host" name="host">
          <Input variant="filled" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input variant="filled" />
        </Form.Item>
        <Form.Item label="Database Name" name="database">
          <Input variant="filled" />
        </Form.Item>
        <Form.Item label="Authentication Type" name="auth">
          <Select
            placeholder={"Windows Authentication"}
            options={[
              { value: "Mongo DB", label: "Mongo DB" },
              { value: "MySQL", label: "MySQL" },
              { value: "PostgreSQL", label: "PostgreSQL" },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
