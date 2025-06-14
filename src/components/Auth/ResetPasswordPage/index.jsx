import Input from "../../Global/Input";
import { Button } from "../../Global/Button";
import { Form } from "antd";
import styles from "./styles.module.css";
import { AuthLayout } from "../AuthLayout";

export function ResetPasswordPage() {
  return (
    <AuthLayout title="Change Password">
      <Form
        name="resetPasswordForm"
        layout="vertical"
        style={{ width: "100%" }}
        autoComplete="off"
      >
        <Form.Item
          label="New Password"
          name="NewPassword"
          className={styles.form_item}
          rules={[
            { required: true, message: "Please input your new password!" },
            { min: 8, message: "Password must be at least 8 characters long!" },
          ]}
        >
          <Input.Password placeholder="••••••••" />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="ConfirmPassword"
          className={styles.form_item}
          dependencies={["NewPassword"]}
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("NewPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="••••••••" />
        </Form.Item>

        <Form.Item className={styles.submit_item}>
          <Button htmlType="submit" style={{ width: "100%" }}>
            Change Password & Log In
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
}
