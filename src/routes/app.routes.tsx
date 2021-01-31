import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SingUp from './singUp.routes';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SingUp} />
      </Switch>
    </BrowserRouter>
  );
}
