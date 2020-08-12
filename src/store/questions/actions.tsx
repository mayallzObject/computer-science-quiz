import axios from "axios";
import { Dispatch } from "redux";
import { GetState } from "../rootTypes";
import { Question, FETCH_QUESTION } from "./types";

const API_URL = `https://opentdb.com/api.php?amount=10`;

export function fetchQuestion(questions: Question[]) {
    return {
        type: FETCH_QUESTION,
        payload: questions
    };
}

export async function fetchNext5Posts(dispatch: Dispatch, getState: GetState) {
    const res = await axios.get(`${API_URL}`);
    dispatch(fetchQuestion(res.data));
}