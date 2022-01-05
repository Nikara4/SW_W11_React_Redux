import { combineReducers } from "redux";
import usersReducer from "./modules/users";

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
