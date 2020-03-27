import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Signin from "../pages/Signin";
import Main from "../pages/Main";
import Sale from "../pages/Sale";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/main" render={Main} />
      <Route path="/sale" render={Sale} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
