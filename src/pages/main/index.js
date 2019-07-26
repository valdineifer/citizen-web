import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from 'antd';
import { Content, ContentHeader, Container } from './styles';

const { Title } = Typography;

const Main = () => (
  <Content>
    <ContentHeader>
      <Title>Citizen System</Title>
      <Title level={3}>This is an database of our citizen</Title>
    </ContentHeader>
    <Container>
      <Link to="/citizen/">
        <Button size="large" type="primary" shape="round">Click Here</Button>
      </Link>
      {' '}
      <Title level={2}>to visit our Database</Title>
    </Container>
  </Content>
);

export default Main;
