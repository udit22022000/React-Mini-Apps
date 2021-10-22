import React from "react";

const usePinHook = ({ length, perBox }) => {
  const inputRef = React.useRef(new Array(length).fill(0));
  const [nums, setNums] = React.useState(new Array(length).fill(""));

  const handleFocus = (e, index) => {
    switch (e.keyCode) {
      case 8:
        if (nums[index].length === 0) {
          inputRef.current[(index - 1 + length) % length].focus();
        }
        break;
      default:
        if (nums[index].length === perBox) {
          inputRef.current[(index + 1) % length].focus();
        }
    }
  };

  const handleNumChange = (e, index) => {
    setNums((prev) => {
      let newArr = [...prev];
      newArr[index] = e.target.value;
      return newArr;
    });
  };

  const handlePaste = (e) => {
    e.preventDefault();
    var pin = e.clipboardData.getData("Text");
    var start = 0;
    for (let i = 0; i < length; i++) {
      let val = pin.slice(start, start + perBox);
      if (val.length === 0) {
        break;
      }
      setNums((prev) => {
        var newArr = [...prev];
        newArr[i] = val;
        return newArr;
      });
      inputRef.current[(i + 1) % length].focus();
      start += perBox;
    }
  };

  return [inputRef, nums, handleFocus, handleNumChange, handlePaste];
};

export default usePinHook;
