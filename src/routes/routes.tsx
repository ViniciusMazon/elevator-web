import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>{/* <Route exact path="/" component={Main} /> */}</Switch>
    </BrowserRouter>
  );
}
