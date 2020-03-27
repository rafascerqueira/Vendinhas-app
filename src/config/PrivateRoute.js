import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { validation } from "../helpers/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(validation);

  useEffect(() => {
    async function fetch() {
      let data = await validation();
      setIsAuthenticated(data);
    }
    fetch();
  }, []);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
