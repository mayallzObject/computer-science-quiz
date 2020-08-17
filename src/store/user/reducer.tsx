// TypeScript types
import { User } from "../../types/userTypes"
import {
    LOG_OUT,
    FETCH_USER,
    TOKEN_STILL_VALID,
    UserActionTypes,
} from "./types"


const token = localStorage.getItem("token")

const initialState: User = {
    id: null,
    name: null,
    email: null,
    score: null,
    token: token,
}

export default (state = initialState, action: UserActionTypes) => {
    switch (action.type) {

        case FETCH_USER:
            const userToken = action.user.token;
            if (userToken) localStorage.setItem("token", userToken)
            return { ...state, ...action.user }

        case TOKEN_STILL_VALID:
            return { ...state, ...action.user }

        case LOG_OUT:
            localStorage.removeItem("token")
            return { ...initialState, token: null }

        default:
            return state
    }
}
