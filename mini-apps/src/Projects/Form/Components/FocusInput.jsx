import React from "react";

const FocusInput = () => {
  const ref = React.useRef();

  React.useEffect(() => {
    console.log("Mounted", ref);
  }, []);

  const handleFocus = () => {
    ref.current.focus();
  };

  return (
    <div>
      <input placeholder="add something" ref={ref} />
      <button onClick={handleFocus}>Focus on input box</button>
    </div>
  );
};

export { FocusInput };
