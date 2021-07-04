import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../config/PrivateRoute";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Sale from "../pages/Sale";
import Stock from "../pages/Stock";
import UserProfile from "../pages/UserProfile";
import Billing from "../pages/Billing";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/sale" component={Sale} />
      <PrivateRoute path="/stock" component={Stock} />
      <PrivateRoute path="/profile" component={UserProfile} />
      <PrivateRoute path="/billing" component={Billing} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
