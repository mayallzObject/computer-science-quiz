
import { AppState } from "../types/appStateTypes";
import { QuestionActionTypes } from "./questions/types";
import { AppStateActionTypes } from "./appState/types";
import { Question } from "../types/questionTypes"
import { User } from "../types/userTypes";



export type StoreState = {
    questions: Question[];
    appState: AppState;
    users: User
};

export type GetState = () => StoreState;

export type AppActions =
    | AppStateActionTypes
    | QuestionActionTypes