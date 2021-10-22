import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo } from "../Redux/todos/action";

const Todo = () => {
  const todos = useSelector((state) => state.app.todos);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: "10px auto", fontSize: "15px" }}>List of Items</h2>

        {todos.map(({ id, title }) => (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
            key={id}
          >
            <div
              key={id}
              style={{
                width: "50%",
                wordWrap: "break-word",
                minWidth: "200px",
              }}
            >
              {title}
            </div>
            <button
              onClick={() => handleDelete(id)}
              style={{ width: "10%", minWidth: "100px" }}
            >
              DELETE
            </button>
            <Link
              to={`/task/${id}`}
              style={{ width: "20%", minWidth: "100px" }}
            >
              More Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Todo };
