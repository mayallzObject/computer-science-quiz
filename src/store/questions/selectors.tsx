// TypeScript types
import { StoreState } from "../types";
import { Question } from "../../types/questionTypes"


export const selectQuestion = (state: StoreState): Question[] => state.questions


