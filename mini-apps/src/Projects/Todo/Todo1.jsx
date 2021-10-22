import React from "react";
import axios from "axios";
import { Todo2 } from "./Todo2";
import { Todo3 } from "./Todo3";

const Todo1 = () => {
  const [todos, setTodos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    setIsLoading(true);
    axios
      .get("https://masai-mock-evaluation.herokuapp.com/todos")
      .then((res) => {
        setTodos(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://masai-mock-evaluation.herokuapp.com/todos/${id}`)
      .then(() => {
        getTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleStatus = (id, status) => {
    axios
      .patch(`https://masai-mock-evaluation.herokuapp.com/todos/${id}`, {
        status: !status,
      })
      .then(() => {
        getTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return isLoading ? (
    <div>...is Loading</div>
  ) : isError ? (
    <div>Error</div>
  ) : (
    <div
      style={{
        width: "80vw",
        margin: "10px auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <Todo3 getTodos={getTodos} />
      </div>
      <div>
        {todos.map(({ id, title, status }) => (
          <Todo2
            key={id}
            id={id}
            title={title}
            status={status}
            handleDelete={handleDelete}
            toggleStatus={toggleStatus}
          />
        ))}
      </div>
    </div>
  );
};

export { Todo1 };
