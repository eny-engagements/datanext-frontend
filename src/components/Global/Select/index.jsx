import { Select as AntdSelect } from "antd";
import "./styles.module.css";

export default function Select({ options, placeholder }) {
  return (
    <div>
      <AntdSelect
        placeholder={placeholder}
        variant="filled"
        options={options}
      />
    </div>
  );
}
