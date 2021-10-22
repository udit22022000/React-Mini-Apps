import { ADD_COUNTER, REDUCE_COUNTER } from "./actionTypes";

//action creator...
//it is a function that returns an object that defines the action.
export const addCounter = (payload) => {
  return {
    type: ADD_COUNTER,
    payload,
  };
};

export const reduceCounter = (payload) => {
  return {
    type: REDUCE_COUNTER,
    payload,
  };
};
