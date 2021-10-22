import React from "react";
import PropTypes from "prop-types";
import InputPin from "./InputPin";
import usePinHook from "./usePinHook";

const InputBoxes = ({ length, perBox }) => {
  const [inputRef, nums, handleFocus, handleNumChange, handlePaste] =
    usePinHook({ length, perBox });

  return (
    <div
      style={{
        margin: "10px auto",
        display: "flex",
        width: "100vw",
        justifyContent: "center",
      }}
      onPaste={handlePaste}
    >
      {new Array(length).fill(0).map((_, index) => {
        return (
          <InputPin
            key={index}
            index={index}
            perBox={perBox}
            nums={nums}
            ref={(n) => (inputRef.current[index] = n)}
            handleFocus={handleFocus}
            handleNumChange={handleNumChange}
          ></InputPin>
        );
      })}
    </div>
  );
};

//now if some other propTypes is passed..then it will throw a warning....
//like this we can prevent from getting unexpected value..
//passing isRequired at the end..making the prop compulsary...
InputBoxes.propTypes = {
  length: PropTypes.number.isRequired,
  perBox: PropTypes.number.isRequired,
};

//setting up default values for the props when prop is not passed from the parent...
InputBoxes.defaultProps = {
  length: 4,
  perBox: 1,
};

export default InputBoxes;
