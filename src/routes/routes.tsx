import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import SingIn from '../pages/SingIn';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/sing-in" component={SingIn} />
      </Switch>
    </BrowserRouter>
  );
}
