import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from './signUp.routes';

export default function AuthRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/welcome" component={Landing} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}
