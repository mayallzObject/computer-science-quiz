
import { AppState } from "../types/appStateTypes";
import { QuestionActionTypes } from "./questions/types";
import { AppStateActionTypes } from "./appState/types";
import { Question } from "./questions/types";


export type StoreState = {
    questions: Question[];
    appState: AppState;
};

export type GetState = () => StoreState;

export type AppActions =
    | AppStateActionTypes
    | QuestionActionTypes