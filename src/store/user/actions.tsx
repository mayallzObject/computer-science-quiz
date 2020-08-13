import axios from "axios"
import { Dispatch } from "redux"
import { apiUrl } from "../../config/constants"
import { User, Credentials, } from "../../types/userTypes"
import { GetState } from "../types"
import {
    AuthTypes,
    FETCH_USER,
    TOKEN_STILL_VALID,
    LOG_OUT,
} from "./types"
import {
    showMessageWithTimeout,
    setMessage,
    appDoneLoading,
    appLoading,
} from "../appState/actions"

export const userFetched = (user: User): AuthTypes => ({
    type: FETCH_USER,
    user,
});

export const tokenStillValid = (user: User): AuthTypes => ({
    type: TOKEN_STILL_VALID,
    user,
});


export const logOut = (): AuthTypes => ({ type: LOG_OUT, user: null })

export const login = (credentials: Credentials) => {
    const { email, password } = credentials
    return async function thunk(dispatch: Dispatch, getState: GetState) {
        try {
            dispatch(appLoading());
            const res = await axios.post(`${apiUrl}/auth/login`, {
                email,
                password,
            });

            if (res.data.verified) {
                dispatch(userFetched(res.data));
                const message = `Hello ${res.data.firstName}`
                dispatch(
                    // @ts-ignore
                    showMessageWithTimeout("success", false, message, 1500)
                );
            } else {
                console.log("message to verify account")
                const message = `Hello, ${res.data.firstName}`
                dispatch(
                    // @ts-ignore
                    showMessageWithTimeout("info", false, message, 4000)
                );
            }
            dispatch(appDoneLoading())
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
                dispatch(setMessage("error", true, error.response.data.message))
            } else {
                console.log(error.message);
                dispatch(setMessage("error", true, error.message))
            }
            dispatch(appDoneLoading())
        }
    }
}



