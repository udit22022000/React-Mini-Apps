import React from "react";

const Todo2 = ({ id, title, status, handleDelete, toggleStatus }) => {
  return (
    <div style={{ display: "flex" }}>
      <div>{title}</div>
      <button onClick={() => toggleStatus(id, status)}>
        {status ? "Done" : "Not Done"}
      </button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export { Todo2 };
