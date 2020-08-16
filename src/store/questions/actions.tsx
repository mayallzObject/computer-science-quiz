import { Dispatch } from "redux"
import { GetState } from '../types'
import axios from 'axios'

//? TypeScript types
import { Question } from "../../types/questionTypes"
import { FETCH_QUESTION, QuestionActionTypes } from "./types"


export const questionsFetched = (questions: Question[]): QuestionActionTypes => ({
    type: FETCH_QUESTION,
    payload: questions,
})


const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5);




export const fetchQuestions = () => async (dispatch: Dispatch, getState: GetState) => {
    try {
        const res = await axios.get("https://opentdb.com/api.php?amount=10&type=multiple");


        const data = res.data.results.map((question: Question) => ({
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }))

        console.log(data)

        dispatch(questionsFetched(data))



    } catch (error) {
        console.log(error)
    }
}


