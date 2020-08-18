import { Question } from "../../types/questionTypes"



export const FETCH_QUESTION = "FETCH_QUESTION"
export const GAME_OVER = "GAME_OVER"


export type fetchQuestion = {
    type: string
    payload: Question[]
}

export const questionsFetched = (questions: Question[]): QuestionActionTypes => ({
    type: FETCH_QUESTION,
    payload: questions,
})

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}




export type QuestionActionTypes = fetchQuestion


export const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5);