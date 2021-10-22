import React from "react";
import Navbar from "../components/Navbar";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { UserRoutes } from "./Users/UserRoutes";
import { Login } from "../Routes/Login";
import { PrivateRoutes } from "../PrivateRoutes/PrivateRoutes";

const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <PrivateRoutes path="/users">
          <UserRoutes />
        </PrivateRoutes>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <h2>PAGE NOT FOUND</h2>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
