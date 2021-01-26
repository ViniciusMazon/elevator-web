import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import IAm from '../pages/SignUp/IAm';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-up/i-am" component={IAm} />
      </Switch>
    </BrowserRouter>
  );
}
