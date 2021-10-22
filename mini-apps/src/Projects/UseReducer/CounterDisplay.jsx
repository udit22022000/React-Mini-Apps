import React from "react";
import { AppContext } from "./AppCounterProvider";

const CounterDisplay = () => {
  const { state, dispatch } = React.useContext(AppContext);

  return (
    <div>
      <h2>Counter</h2>
      <h4>{state.counter}</h4>
      <button onClick={() => dispatch({ type: "increment" })}>Add</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Subtract</button>
    </div>
  );
};

export default CounterDisplay;
