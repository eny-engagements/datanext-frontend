import PropTypes from "prop-types";
import { Button as AntdButton } from "antd";
import "./styles.module.css";

export function Button({
  children,
  type,
  size,
  onClick,
  icon,
  ...rest
}) {
  return (
    <AntdButton
      type={type}
      size={size}
      danger={type === "danger"}
      onClick={onClick}
      icon={icon}
      {...rest}
    >
      {children}
    </AntdButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["default", "primary", "danger", "text"]),
  size: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.node,
};

Button.defaultProps = {
  type: "primary",
};
