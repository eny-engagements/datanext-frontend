import { Dropdown as AntdDropdown, Button } from "antd";
import DotIcon from "../../../assets/dots.svg";
import "./styles.module.css"

export default function Dropdown({items}) {
  return (
    <AntdDropdown menu={{ items }} trigger={["click"]}>
      <Button type="text" icon={<img src={DotIcon} />} />
    </AntdDropdown>
  );
}
