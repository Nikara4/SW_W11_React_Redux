import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import * as reducers from "./modules";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers(reducers, applyMiddleware(thunk));

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
