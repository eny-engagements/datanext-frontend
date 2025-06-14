import { Input as AntdInput } from "antd";
import "./styles.module.css";

export default function Input({ ...props }) {
  return (
    <AntdInput 
      {...props}
    />
  );
}

Input.Password = function({...props }) {
  return (
    <AntdInput.Password 
      {...props}
    />
  );
};