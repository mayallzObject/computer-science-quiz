import { Dispatch } from "redux"
import { GetState } from '../types'
import axios from 'axios'
import { Question } from "../../types/questionTypes"
import { FETCH_QUESTION, QuestionActionTypes } from "./types"

export const questionsFetched = (questions: Question[]): QuestionActionTypes => ({
    type: FETCH_QUESTION,
    payload: questions,
})


export const fetchQuestions = () => async (dispatch: Dispatch, getState: GetState) => {
    try {
        const res = await axios.get("https://opentdb.com/api.php?amount=10");

        dispatch(questionsFetched(res.data.results))
    } catch (error) {
        console.log(error)
    }
};