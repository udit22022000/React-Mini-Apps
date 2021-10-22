import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoutes } from "../../PrivateRoutes/PrivateRoutes";
import { UserPage } from "./UserPage";
import { Users } from "./Users";

const UserRoutes = () => {
  return (
    <>
      <Switch>
        <PrivateRoutes exact path="/users">
          <Users />
        </PrivateRoutes>
        <PrivateRoutes exact path="/users/:userId">
          <UserPage />
        </PrivateRoutes>
      </Switch>
    </>
  );
};

export { UserRoutes };
