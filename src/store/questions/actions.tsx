import { Dispatch } from "redux";
import axios from "axios";

// TypeScript types
import { Question } from "../../types/questionTypes";
import { GetState } from "../types";
import { shuffleArray, questionsFetched } from "./types";

export const fetchQuestions = () => async (
  dispatch: Dispatch,
  getState: GetState
) => {
  try {
    const res = await axios.get("https://opentdb.com/api.php?amount=10");

    const data = res.data.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));

    dispatch(questionsFetched(data));
  } catch (error) {
    console.log(error);
  }
};
