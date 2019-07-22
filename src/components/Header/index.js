import React from 'react';

import { PageHeader, Menu } from 'antd';

const Header = () => (
  <PageHeader>
    <Menu theme="dark" mode="horizontal" style={{ lineHeight: '50px' }}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">Citizen</Menu.Item>
      <Menu.Item key="3">Sign In</Menu.Item>
      <Menu.Item key="4">About</Menu.Item>
    </Menu>
  </PageHeader>
);

export default Header;
