import { StoreState } from "../types";
import { Question } from "./types";

export const selectQuestion = (state: StoreState): Question[] => state.questions