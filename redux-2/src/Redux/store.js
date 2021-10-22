import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { reducer } from "./todos/reducer";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: reducer,
});

//Middlewares...
const logger1 = (state) => (next) => (action) => {
  console.log("entering logger 1");
  const val = next(action);
  console.log("exiting logger 1");
  return val;
};

const logger2 = (state) => (next) => (action) => {
  console.log("entering logger 2");
  const val = next(action);
  console.log("exiting logger 2");
  return val;
};

// compose enhancers ---- to make middlewares and redux dev tools work together...
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

//combining middlwares and redux dev tools....with the help of enhancers..
const enhancer = composeEnhancers(applyMiddleware(logger1, logger2));

// combining reducers, middlwares and redux dev tools...
const store = createStore(rootReducer, enhancer);

export { store };
