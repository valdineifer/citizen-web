import React from 'react';
import { Menu, Icon } from 'antd';
import { StyledHeader } from './styles';

const Header = () => (
  <StyledHeader>
    <Menu theme="light" mode="horizontal">
      <Menu.Item key="1">
        <Icon type="home" />
        Home
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="user" />
        Citizen
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
