import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivateRoute = ({ children, path, exact = true }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
};

export default PrivateRoute;
