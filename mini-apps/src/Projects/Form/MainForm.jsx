import React from "react";
import { FocusInput } from "./Components/FocusInput";
import { Form } from "./Components/Form";
import { Timer } from "./Components/Timer";

const MainForm = () => {
  return (
    <div
      style={{
        margin: "10px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form />
    </div>
  );
};

export { MainForm };
