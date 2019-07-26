import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Routes from './routes';
import Footer from './components/Footer';
import { Container, AppContainer } from './styles';

const App = () => (
  <AppContainer className="App">
    <Layout>

      <Container>
        <Routes />
      </Container>

      <Footer />
    </Layout>
  </AppContainer>
);

export default App;
