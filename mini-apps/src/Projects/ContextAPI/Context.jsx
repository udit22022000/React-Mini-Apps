import React from "react";
import { Login } from "./components/Login";
import { AppContext } from "./Context/AppContextProvider";

const Context = () => {
  const { isAuth } = React.useContext(AppContext);
  return <div>{isAuth ? <div>Successfully logged in</div> : <Login />}</div>;
};

export { Context };
