import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../Redux/todos/action";

const TodoInput = () => {
  const [title, setTitle] = React.useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      id: uuid(),
      title: title,
      status: false,
    };
    dispatch(addTodo(payload));
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ fontSize: "15px" }}>Add Input</h2>
      <input
        placeholder="Enter Todo"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export { TodoInput };
