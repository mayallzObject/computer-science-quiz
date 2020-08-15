import { Question } from "../../types/questionTypes"


export const FETCH_QUESTION = "FETCH_QUESTION"
export const GAME_OVER = "GAME_OVER"


export type fetchQuestion = {
    type: string
    payload: Question[]
}

export type QuestionActionTypes = fetchQuestion
