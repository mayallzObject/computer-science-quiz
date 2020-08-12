export const FETCH_QUESTIONS = "FETCH_QUESTIONS"
export const FETCH_QUESTION_ERROR = "FETCH_QUESTION_ERROR"


export type Question = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type FetchQuestions = {
    type: string
    payload: Question[]
}

export type QuestionActionTypes = FetchQuestions



