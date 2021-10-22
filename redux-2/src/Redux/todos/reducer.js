import { ADD_TODO, DELETE_TODO, TOGGLE_STATUS } from "./actionTypes";
import { loadData, saveData } from "../../utils/localStorage";

const initState = {
  todos: loadData("todos") || [],
};

const reducer = (state = initState, { type, payload }) => {
  console.log("Inside Todo Reducer");
  switch (type) {
    case ADD_TODO:
      let updatedTodo = [...state.todos, payload];
      saveData("todos", updatedTodo);
      return { ...state, todos: updatedTodo };

    case DELETE_TODO:
      let updatedTodo2 = state.todos.filter(({ id }) => id !== payload.id);
      saveData("todos", updatedTodo2);
      return {
        ...state,
        todos: updatedTodo2,
      };

    case TOGGLE_STATUS:
      let updatedTodo3 = state.todos.map((item) =>
        payload.id === item.id ? { ...item, status: !item.status } : item
      );
      saveData("todos", updatedTodo3);
      return {
        ...state,
        todos: updatedTodo3,
      };

    default:
      return state;
  }
};

export { reducer };
