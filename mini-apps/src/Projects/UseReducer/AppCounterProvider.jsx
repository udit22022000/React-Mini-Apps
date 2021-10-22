import React from "react";

const initState = {
  counter: 1,
};

const reducer = (state, { type }) => {
  switch (type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export const AppContext = React.createContext();

const AppCounterProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppCounterProvider };
