import React from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({ children, store }) => {
  const { dispatch, getState } = store;
  const [state, setState] = React.useState(0);

  // do not use this in production...
  const forceUpdate = () => setState((prev) => prev + 1);
  store.subscribe(forceUpdate);

  const value = { dispatch, getState };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider };
