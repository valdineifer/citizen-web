import React from 'react';
import { Typography, Icon } from 'antd';
import { PgFooter } from './styles';

const { Title } = Typography;

const Footer = () => (
  <PgFooter>
    <Title level={4}>Made with ❤ by Valdinei Ferreira</Title>
    <div>
      <Icon type="github" />
      {' '}
      <Icon type="twitter" />
    </div>
  </PgFooter>
);

export default Footer;
