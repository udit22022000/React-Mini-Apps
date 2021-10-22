import React from "react";
import { addCounter, reduceCounter } from "../Redux/action";
import { AppContext } from "../Redux/AppContextProvider";

const Counter = () => {
  const { dispatch, getState } = React.useContext(AppContext);
  const { counter } = getState();

  const handelAdd = () => {
    dispatch(addCounter(1));
  };

  const handleReduce = () => {
    dispatch(reduceCounter(1));
  };

  return (
    <>
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => handelAdd()}>ADD</button>
        <button onClick={() => handleReduce()}>Reduce</button>
      </div>
    </>
  );
};

export { Counter };
