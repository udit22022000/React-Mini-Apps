import React from "react";
import { v4 as uuid } from "uuid";
const TodoForm = ({ setTodos }) => {
  const [item, setItem] = React.useState("");

  const handelAddTodo = () => {
    setTodos((prev) => {
      return [...prev, { name: item, status: false, id: uuid() }];
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handelAddTodo}>submit</button>
    </div>
  );
};

export { TodoForm };
