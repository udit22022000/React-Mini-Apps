import { reducer } from "./reducer.js";
import { addTodo, toggleTodo } from "./action.js";

// store
class Store {
  constructor(reducer, initState) {
    this.reducer = reducer;
    this.state = initState;
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
}

//initial state
const initState = {
  todo: [],
};

//creating store named store1
var store1 = new Store(reducer, initState);

console.log(store1.getState());

store1.dispatch(addTodo("Learn React"));
store1.dispatch(addTodo("Learn Redux"));
store1.dispatch(toggleTodo("Learn React"));

console.log(store1.getState());
