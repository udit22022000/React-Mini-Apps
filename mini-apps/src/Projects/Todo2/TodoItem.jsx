import React from "react";

const TodoItem = ({ name, status, id, setTodos, todos }) => {
  const handleToggle = () => {
    const newList = todos.map((item) =>
      item.id !== id ? item : { ...item, status: !item.status }
    );

    setTodos(newList);
  };

  return (
    <div id={id}>
      <div
        style={{ display: "flex", width: "600px", border: "1px solid black" }}
      >
        {name}
      </div>
      <button
        style={{ color: `${status ? "green" : "red"}` }}
        onClick={handleToggle}
      >
        Toggle
      </button>
    </div>
  );
};

export default TodoItem;
