import React from "react";
import Form from "./Form";

const CompoMain = () => {
  const submit1 = (e) => {
    e.preventDefault();
    console.log("Form 1");
  };

  const submit2 = (e) => {
    e.preventDefault();
    console.log("Form 2");
  };

  return (
    <div>
      <Form submit={submit1} variableOption="Enter College Name">
        <input type="number" placeholder="Enter House Number" />
      </Form>

      <Form submit={submit2} variableOption="Enter school name">
        <input type="number" placeholder="Enter Flat Number" />
      </Form>
    </div>
  );
};

export default CompoMain;
