import { Button } from 'antd';
import { Header } from "antd/lib/layout/layout";
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

interface HeaderProps {
  isAuth: boolean
  isLogin: boolean
  onClick: () => void;
}

const MyHeader: React.FC<HeaderProps> = ({isAuth, isLogin, onClick}) => {
  return (
    <Header>
      <Link to="">
        <Button type="primary">Профиль</Button>
      </Link>
      <Link to="">
        <Button type="primary" ghost danger={isAuth} onClick={onClick}>
          {isAuth ? "Выйти" : isLogin ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </Link>
    </Header>
  );
};

export default MyHeader;