import React from "react";

const useTimer = (delay) => {
  const [ready, setReady] = React.useState(false);
  const timer = React.useRef();

  React.useEffect(() => {
    timer.current = setTimeout(() => {
      setReady(!ready);
    }, delay);

    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return [ready, setReady];
};

export default useTimer;
