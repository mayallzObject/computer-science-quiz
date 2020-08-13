import { combineReducers } from "redux"
import questions from "./questions/reducer"
import appState from "./appState/reducer"

export default combineReducers({
    questions,
    appState
});