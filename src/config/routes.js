import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Main from "../pages/Main";
import Sale from "../pages/Sale";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/main" component={Main} />
      <Route path="/sale" component={Sale} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
