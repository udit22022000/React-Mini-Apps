import { ADD_TODO, DELETE_TODO, TOGGLE_STATUS } from "./actionTypes";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleStatus = (payload) => {
  return {
    type: TOGGLE_STATUS,
    payload,
  };
};
