import React from "react";
import axios from "axios";

const Todo3 = ({ getTodos }) => {
  const [title, setTitle] = React.useState("");

  const handleAdd = () => {
    axios
      .post(`https://masai-mock-evaluation.herokuapp.com/todos`, {
        title: title,
        status: false,
      })
      .then(() => getTodos())
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ display: "flex" }}>
      <input
        value={title}
        type="text"
        placeholder="Enter Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          handleAdd();
        }}
      >
        SUBMIT
      </button>
    </div>
  );
};

export { Todo3 };
