import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../config/PrivateRoute";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Main from "../pages/Main";
import Sale from "../pages/Sale";
import Stock from "../pages/Stock";
import UserPerfil from "../pages/UserPerfil";
import Billing from "../pages/Billing";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/main" component={Main} />
      <PrivateRoute path="/sale" component={Sale} />
      <PrivateRoute path="/stock" component={Stock} />
      <PrivateRoute path="/perfil" component={UserPerfil} />
      <PrivateRoute path="/billing" component={Billing} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
