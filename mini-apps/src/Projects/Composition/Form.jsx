import React from "react";

const Form = ({ submit, children, variableOption }) => {
  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="Enter Name" />
      <input type="number" placeholder="Enter Pin Code" />
      {children}
      <input type="text" placeholder={variableOption} />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
