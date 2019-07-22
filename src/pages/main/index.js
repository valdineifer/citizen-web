import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Main = () => (
  <section id="content">
    <section>
      <h1>Citizen System</h1>
      <h2>This is an database of our citizen</h2>
    </section>
    <section>
      <Link to="/citizen/">
        <Button title="Visit here" />
      </Link>
    </section>
  </section>
);

export default Main;
