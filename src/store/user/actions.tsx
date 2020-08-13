import axios from "axios";
import { Dispatch } from "redux";
import { apiUrl } from "../../config/constants";
import { User, Credentials, SignupData } from "../../types/userTypes";
import { GetState } from "../types";
import {
    AuthTypes,
    FETCH_USER,
    TOKEN_STILL_VALID,
    LOG_OUT,
} from "./types";
import {
    showMessageWithTimeout,
    setMessage,
    appDoneLoading,
    appLoading,
} from "../appState/actions";

export const userFetched = (user: User): AuthTypes => ({
    type: FETCH_USER,
    user,
});

export const tokenStillValid = (user: User): AuthTypes => ({
    type: TOKEN_STILL_VALID,
    user,
});



export const logOut = (): AuthTypes => ({ type: LOG_OUT, user: null });

export const login = (credentials: Credentials) => {
    const { email, password } = credentials;
    return async function thunk(dispatch: Dispatch, getState: GetState) {
        try {
            dispatch(appLoading());
            const res = await axios.post(`${apiUrl}/auth/login`, {
                email,
                password,
            });

            if (res.data.verified) {
                dispatch(userFetched(res.data));
                const message = `Hello ${res.data.firstName}, welcome back to Traveler's Diary.`;
                dispatch(
                    // @ts-ignore
                    showMessageWithTimeout("success", false, message, 1500)
                );
            } else {
                console.log("message to verify account");
                const message = `Hello, ${res.data.firstName}, please verify your account by clicking the link sent to your email`;
                dispatch(
                    // @ts-ignore
                    showMessageWithTimeout("info", false, message, 4000)
                );
            }
            dispatch(appDoneLoading());
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
                dispatch(setMessage("error", true, error.response.data.message));
            } else {
                console.log(error.message);
                dispatch(setMessage("error", true, error.message));
            }
            dispatch(appDoneLoading());
        }
    };
};
export const signUp = (signUpData: SignupData) => {
    return async (dispatch: Dispatch, getState: GetState) => {

        dispatch(appLoading())

        const data = { ...signUpData }

        try {
            const res = await axios.post(`${apiUrl}/auth/signup`, {
                data,
            });

            const message = `Hello, ${res.data.name}`
            dispatch(
                // @ts-ignore
                showMessageWithTimeout("success", false, message, 1500)
            );
            dispatch(appDoneLoading());
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
                dispatch(setMessage("error", true, error.response.data.message));
            } else {
                console.log(error.message);
                dispatch(setMessage("error", true, error.message));
            }
            dispatch(appDoneLoading());
        }
    }
}


