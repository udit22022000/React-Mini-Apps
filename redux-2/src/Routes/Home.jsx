import React from "react";
import { Todo } from "../Components/Todo";
import { TodoInput } from "../Components/TodoInput";

const Home = () => {
  return (
    <div
      style={{
        width: "80vw",
        margin: "10px auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TodoInput />
      <Todo />
    </div>
  );
};

export default Home;
