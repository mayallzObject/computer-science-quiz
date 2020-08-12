export const FETCH_QUESTION = "FETCH_QUESTION"

export type Question = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type fetchQuestion = {
    type: string
    payload: Question[]
};

export type QuestionActionTypes = fetchQuestion
