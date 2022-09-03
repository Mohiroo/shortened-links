import { UserAddOutlined } from "@ant-design/icons";
import { Form, Input, Cascader, InputNumber, AutoComplete, Select, Row, Col, Button, Checkbox } from "antd";
import form from "antd/lib/form";
import React from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <UserAddOutlined className="register-icon" />
      <Form
        layout="vertical"
        name="registerForm"
        className="register-form"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item name="login" label="Логин" rules={[{ required: true, message: "Введите логин!" }]} hasFeedback>
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Пароль"
          rules={[
            {
              required: true,
              message: "Введите пароль!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Подтвердите пароль"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Необходимо подтвердить пароль!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Пароли не совпадают!"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="register-form-button">
            Зарегистрироваться
          </Button>
          Или <a href="">войти</a>
        </Form.Item>
      </Form>
    </>
  );
};

export default RegisterForm;
