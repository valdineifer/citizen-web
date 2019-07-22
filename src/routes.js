import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Citizen from './pages/citizen';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* React only will load the path '/' if it's exactly,
      to prevent to ignore the other routes */}
      <Route exact path="/" component={Main} />
      <Route path="/citizen" component={Citizen} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
