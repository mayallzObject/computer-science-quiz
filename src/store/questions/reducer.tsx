import { QuestionActionTypes, FETCH_QUESTION, Question } from "./types";

const initialState: Question[] = []



export default (state = initialState, action: QuestionActionTypes) => {
    switch (action.type) {
        case FETCH_QUESTION:
            return [...action.payload]
        default:
            return state;
    }
}