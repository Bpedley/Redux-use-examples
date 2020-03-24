import counterReducer from "./counterReducer";
import postReducer from "./postReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  counter: counterReducer,
  posts: postReducer
});

export default reducers;
