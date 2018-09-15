import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import TestSoil from './pages/TestSoil';
import Result from './pages/Result';

export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/test" component={TestSoil} />
      <Route exact path="/result" component={Result} />
    </Switch>
  </HashRouter>
);
