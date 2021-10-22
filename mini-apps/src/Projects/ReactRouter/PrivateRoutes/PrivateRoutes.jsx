import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoutes = ({
  path,
  children,
  redirectPath = "/login",
  push = false,
  exact = false,
}) => {
  const { isAuth } = React.useContext(AuthContext);

  return isAuth ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Redirect push={push} to={redirectPath} />
  );
};

export { PrivateRoutes };
