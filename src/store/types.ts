import { QuestionActionTypes, Question } from "./questions/types";


export type StoreState = {
    questions: Question[]
}

export type GetState = () => StoreState;



export type AppActions =
    | QuestionActionTypes