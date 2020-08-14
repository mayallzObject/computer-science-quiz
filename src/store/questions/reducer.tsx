//? TypeScript types
import { FETCH_QUESTION, QuestionActionTypes } from "./types";
import { Question } from "../../types/questionTypes"


const initialState: Question[] = []


export default (state = initialState, action: QuestionActionTypes) => {
    switch (action.type) {

        case FETCH_QUESTION:
            return [...action.payload]

        default:
            return state
    }
}