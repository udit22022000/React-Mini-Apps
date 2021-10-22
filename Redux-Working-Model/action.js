//action creators...
import { ADD_TODO, TOGGLE_TODO } from "./actionTypes.js";
const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: {
      title: payload,
      status: false,
    },
  };
};

const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

export { addTodo, toggleTodo };
