import { QuestionActionTypes, FETCH_QUESTION, Question } from "./types";

const initialState: Question[] = [
    {
        category: "Entertainment: Books",
        type: "multiple",
        difficulty: "medium",
        question: "What is the fourth book of the Old Testament?",
        correct_answer: "Numbers",
        incorrect_answers: ["Genesis", "Exodus", "Leviticus"]
    },
    {
        category: "Entertainment: Books",
        type: "multiple",
        difficulty: "medium",
        question: "What is the fourth book of the Old Testament?",
        correct_answer: "Numbers",
        incorrect_answers: ["Genesis", "Exodus", "Leviticus"]
    },
    {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "hard",
        question: "Which M83 album is the song &quot;Midnight City&quot; featured in?",
        correct_answer: "Hurry Up, We&#039;re Dreaming",
        incorrect_answers: ["Saturdays = Youth", "Before the Dawn Heals Us", "Junk"]
    }



]



export default (state = initialState, action: QuestionActionTypes) => {
    switch (action.type) {
        case FETCH_QUESTION:
            return [...action.payload]
        default:
            return state;
    }
}