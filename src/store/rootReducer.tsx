import { combineReducers } from "redux"
import questions from "./questions/reducer"
import appState from "./appState/reducer"
import user from "./user/reducer"

export default combineReducers({
    appState,
    user,
    questions,
});