import axios from "axios";

import { Dispatch } from "redux"
import { AppActions } from "../rootTypes"
import { FETCH_QUESTIONS, Question } from "./types"


const API_URL = `https://opentdb.com/api.php?amount=10`


export const questionsFetched = (payload: Question[]): AppActions => ({
    type: FETCH_QUESTIONS,
    payload: payload,
})


export const fetchQuestions = () => async (dispatch: Dispatch) => {
    try {

        const res = await axios.get(`${API_URL}`)
        dispatch(questionsFetched(res.data.results))


    } catch (error) {
        console.log(error)
    }
}




