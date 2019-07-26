import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { StyledHeader } from './styles';

const Header = () => (
  <StyledHeader>
    <Menu theme="light" mode="horizontal">
      <Menu.Item key="1">
        <Link to="/">
          <Icon type="home" />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/citizen/">
          <Icon type="user" />
        Citizen
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="login" />
        Sign In
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="info-circle" />
        About
      </Menu.Item>
    </Menu>
  </StyledHeader>
);

export default Header;
