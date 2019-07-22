import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Header from './components/Header';
import Routes from './routes';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Layout>
      <Header />
      <Routes />
      <Footer />
    </Layout>
  </div>
);

export default App;
