import React from "react";

const style = {
  width: "50px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "10px",
  fontSize: "20px",
};

const InputPin = React.forwardRef(
  ({ perBox, index, nums, handleFocus, handleNumChange }, ref) => {
    return (
      <input
        style={style}
        maxLength={perBox}
        ref={ref}
        value={nums[index]}
        onKeyUp={(e) => handleFocus(e, index)}
        onChange={(e) => handleNumChange(e, index)}
      ></input>
    );
  }
);

export default InputPin;
