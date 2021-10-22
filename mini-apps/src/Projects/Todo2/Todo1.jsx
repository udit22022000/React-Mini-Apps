import React from "react";
import { TodoForm } from "./TodoForm";
import TodoItem from "./TodoItem";

const Todo1 = () => {
  const [todos, setTodos] = React.useState([]);

  const calculate = () => {
    const pending = todos.filter((item) => item.status === false);
    return pending.length;
  };

  const calculate2 = () => {
    const done = todos.filter((item) => item.status === true);
    return done.length;
  };

  console.log(todos);

  return (
    <div>
      <TodoForm setTodos={setTodos}></TodoForm>
      <div>
        <div>Pending {calculate()}</div>
        <div>
          {todos
            ?.filter((item) => item.status === false)
            ?.map((item) => (
              <TodoItem {...item} setTodos={setTodos} todos={todos}></TodoItem>
            ))}
        </div>
      </div>
      <div>
        <div>Completed {calculate2()}</div>
        <div>
          {todos
            ?.filter((item) => item.status === true)
            ?.map((item) => (
              <TodoItem {...item} setTodos={setTodos} todos={todos}></TodoItem>
            ))}
        </div>
      </div>
    </div>
  );
};

export { Todo1 };
