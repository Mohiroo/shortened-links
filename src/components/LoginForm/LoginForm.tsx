import { UserOutlined, LockOutlined, UserAddOutlined } from "@ant-design/icons";
import { Form, Input, Checkbox, Button } from "antd";
import React from "react";
import "./LoginForm.css";

// interface LoginFormProps {
//   onFinish: (что-то) => void;
// mode: boolean
// }

const LoginForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <UserOutlined className="login-icon" />
      <Form name="loginForm" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: "Введите логин!" }]}>
          <Input prefix={<UserOutlined />} placeholder="Логин" autoComplete="current-password" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "Введите пароль!" }]}>
          <Input prefix={<LockOutlined />} type="password" placeholder="Пароль" autoComplete="current-password" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Войти
          </Button>
          Или <a href="">зарегистрироваться</a>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
