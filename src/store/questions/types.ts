import { Question } from "../../types/questionTypes"

export const FETCH_QUESTION = "FETCH_QUESTION"

export type fetchQuestion = {
    type: string
    payload: Question[]
};



export type QuestionActionTypes = fetchQuestion
