import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import { Login } from "./Login";
import Navbar from "../Components/Navbar";
import Task from "./Task";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <PrivateRoute exact path="/task/:id">
          <Task />
        </PrivateRoute>
        <Route path="/error">
          <div>Error 404</div>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
