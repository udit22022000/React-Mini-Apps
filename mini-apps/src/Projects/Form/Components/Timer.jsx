import React from "react";

const Timer = () => {
  const [time, setTime] = React.useState(0);
  const timeRef = React.useRef(); //to persist the value of timerId

  const handleStart = () => {
    timeRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timeRef.current);
  };

  return (
    <div>
      <h4>Timer:</h4>
      <div>{time}</div>
      <br />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export { Timer };
