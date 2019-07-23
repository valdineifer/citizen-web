import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from 'antd';
import { Content, ContentHeader, Section } from './styles';

const { Title } = Typography;

const Main = () => (
  <Content>
    <ContentHeader>
      <Title>Citizen System</Title>
      <Title level={3}>This is an database of our citizen</Title>
    </ContentHeader>
    <Section textCenter>
      <Link to="/citizen/">
        <Button type="primary">Click Here</Button>
        <Title level={4}>to visit our Database</Title>
      </Link>
    </Section>
  </Content>
);

export default Main;
