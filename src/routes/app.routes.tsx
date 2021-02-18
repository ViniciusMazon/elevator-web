import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import MyOpportunities from '../pages/MyOpportunities';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/my-opportunities" component={MyOpportunities} />
      </Switch>
    </BrowserRouter>
  );
}
