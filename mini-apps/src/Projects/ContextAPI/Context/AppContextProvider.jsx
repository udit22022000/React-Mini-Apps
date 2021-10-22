import React from "react";
import { loginUser } from "./ApiReq";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [token, setToken] = React.useState(null);

  const handleLoginUser = ({ email, password }) => {
    loginUser({ email, password })
      .then((res) => {
        setIsAuth(true);
        setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const value = { isAuth, token, handleLoginUser };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider };
