import React from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatus } from "../Redux/todos/action";

const Task = () => {
  const { id } = useParams();

  const item = useSelector(
    (state) => state.app.todos.filter((ele) => ele.id === id)[0]
  );

  const dispatch = useDispatch();
  const handleToggle = (id) => {
    dispatch(toggleStatus({ id }));
  };

  return item ? (
    <div
      style={{
        margin: "10px auto",
        width: "40%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>Name: {item.title}</div>
      <button onClick={() => handleToggle(item.id)}>
        {item.status ? "Not Done" : "Done"}
      </button>
      <br />
      <Link to="/">Home</Link>
    </div>
  ) : (
    <Redirect to="/error" />
  );
};

export default Task;
