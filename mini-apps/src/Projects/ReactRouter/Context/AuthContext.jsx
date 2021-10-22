import React from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState("");

  const handleSignIn = ({ email, password }) => {
    if (email === "admin" && password === "admin") {
      setIsAuth(true);
    } else {
      alert("wrong password");
    }
  };

  const handleSignOut = () => {
    setIsAuth(false);
  };

  const value = { isAuth, handleSignIn, handleSignOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
