import GetPrime from "./Components/GetPrime";
import React from "react";

function App() {
  const [prime, setPrime] = React.useState(1);
  const [prime2, setPrime2] = React.useState(1);

  // 2nd way...wrapping the function props with React.useCallback...so that refernce of the props doesn't change on every re-render unnecessarily..
  // const next1 = React.useCallback(() => setPrime(prime + 1), [prime]);
  // const next2 = React.useCallback(() => setPrime2(prime2 + 1), [prime2]);

  const next1 = () => setPrime(prime + 1);
  const next2 = () => setPrime2(prime2 + 1);

  return (
    <div>
      <GetPrime value={prime} next={next1} />
      <GetPrime value={prime2} next={next2} />
    </div>
  );
}

export default App;
