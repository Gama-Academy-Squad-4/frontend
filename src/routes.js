import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Details from './pages/details';
import Config from './pages/config';

export default function Routes(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/dashboard">
          <Dashboard props={props} />
        </Route>
        <Route path="/details">
          <Details props={props} />
        </Route>
        <Route path="/config">
          <Config props={props} />
        </Route>
        <Route path="/">
          <Login props={props} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
