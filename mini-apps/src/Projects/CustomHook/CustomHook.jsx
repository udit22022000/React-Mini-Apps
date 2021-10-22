import React from "react";
import useTimer from "./useTimer";

const CustomHook = () => {
  const [ready, setReady] = useTimer(2000);

  return (
    <div>
      <h1>Custom Hooks</h1>
      <h4>{ready ? "Rahul" : "Uditanshu"}</h4>
    </div>
  );
};

export { CustomHook };
