import { StoreState } from "../rootTypes"
import { Question } from "./types"

export const selectQuestion = (state: StoreState): Question[] => state.questions