import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import questions from "./questions/reducer";

export default combineReducers({
  appState,
  user,
  questions,
});
