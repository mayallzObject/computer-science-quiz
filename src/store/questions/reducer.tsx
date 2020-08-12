import { FETCH_QUESTIONS, Question } from "./types"
import { AppActions } from "../rootTypes"


const initialState: Question[] = []

export default (state = initialState, action: AppActions): Question[] => {
    switch (action.type) {

        case FETCH_QUESTIONS:
            return [...action.payload]

        default:
            return state
    }
}
