import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import IAm from '../pages/SignUp/IAm';
import Form from '../pages/SignUp/Form';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-up/i-am" component={IAm} />
        <Route exact path="/sign-up/form/:whoAmI" component={Form} />
      </Switch>
    </BrowserRouter>
  );
}
