import { Dispatch } from "redux"
import { GetState } from '../types'
import axios from 'axios'


export const GET_QUESTIONS = "GET_QUESTIONS"
export const QUESTION_ERROR = "QUESTION_ERROR"


export const fetchQuestions = () => async (dispatch: Dispatch, getState: GetState) => {
    try {
        const res = await axios.get("https://opentdb.com/api.php?amount=10");

        dispatch({
            type: GET_QUESTIONS,
            payload: res.data.results,
        })
    } catch (error) {
        dispatch({
            type: QUESTION_ERROR,
            payload: {
                message: error.response.message,
            },
        });
    }
};