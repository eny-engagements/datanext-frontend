import { Form } from "antd";
import Input from "../../Global/Input";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { AuthLayout } from "../AuthLayout";
import { Button } from "../../Global/Button";

export function LoginPage() {
  return (
    <AuthLayout title="Login in to EY Data NeXT!">
      <Form
        name="loginForm"
        layout="vertical"
        style={{ width: "100%" }}
        autoComplete="off"
      >
        <Form.Item
          label="User ID"
          name="username"
          className={styles.form_item}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="90274652" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          className={styles.form_item}
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 8, message: "Password must be at least 8 characters long!" },
            {
              pattern:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must contain at least one letter, one number, and one special character!",
            },
          ]}
        >
          <Input.Password placeholder="••••••••" />
        </Form.Item>

        <div className={styles.forgot_password}>
          <Link to="/forgot-password" className={styles.forgot_link}>
            {" "}
            {/* Use Link for navigation */}
            Forgot Password?
          </Link>
        </div>

        <Form.Item className={styles.submit_item}>
          <Button htmlType="submit" style={{ width: "100%" }}>
            Continue
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
}
