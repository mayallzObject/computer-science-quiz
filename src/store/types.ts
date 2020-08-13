
import { AppState } from "../types/appStateTypes";
import { QuestionActionTypes } from "./questions/types";
import { AppStateActionTypes } from "./appState/types";
import { Question } from "../types/questionTypes"
import { User } from "../types/userTypes";



export type StoreState = {
    appState: AppState;
    questions: Question[];
    users: User
    score: number | null
    token: string | null
};

export type GetState = () => StoreState;

export type AppActions =
    | AppStateActionTypes
    | QuestionActionTypes