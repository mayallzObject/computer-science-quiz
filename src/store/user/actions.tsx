import axios from "axios"
import { Dispatch } from "redux"
import { apiUrl } from "../../config/constants"
import { User, Credentials, SignUpData, } from "../../types/userTypes"

// Types
import { GetState } from "../types"
import {
    AuthTypes,
    FETCH_USER,
    TOKEN_STILL_VALID,
    LOG_OUT,
    SET_SCORE,
    UPDATE_SCORE
} from "./types"

// Action Creators
import {
    showMessageWithTimeout,
    setMessage,
    appDoneLoading,
    appLoading,
} from "../appState/actions"


export const userFetched = (user: User): AuthTypes => ({
    type: FETCH_USER,
    user,
})

export const tokenStillValid = (user: User): AuthTypes => ({
    type: TOKEN_STILL_VALID,
    user,
})

export const setScore = (score: number): AuthTypes => ({
    type: SET_SCORE,
    score,
})


export const updateScore = (updatedScore: number): AuthTypes => ({
    type: UPDATE_SCORE,
    updatedScore,
})


export const logOut = (): AuthTypes => ({ type: LOG_OUT, user: null })

export const login = (credentials: Credentials) => {
    const { email, password } = credentials
    return async function thunk(dispatch: Dispatch, getState: GetState) {

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const body = JSON.stringify({
            email,
            password,
        })
        try {
            dispatch(appLoading())
            const res = await axios.post(`${apiUrl}/login`, body, config)
            if (res.data) {
                dispatch(userFetched(res.data));
                const message = `Hello ${res.data.name}`
                dispatch(
                    // @ts-ignore
                    showMessageWithTimeout("success", false, message, 2000)
                )
            } else {
                console.log("message to verify account")
                const message = `Hello, ${res.data.name}`
                dispatch(
                    // @ts-ignore
                    showMessageWithTimeout("info", false, message, 3000)
                )
            }
            dispatch(appDoneLoading())

        } catch (error) {
            if (error.response) {
                dispatch(setMessage("error", true, error.response.data.message))
            } else {
                dispatch(setMessage("error", true, error.message))
            }
            dispatch(appDoneLoading())
        }
    }
}

export const signUp = (signUpData: SignUpData) => {
    return async (dispatch: Dispatch, getState: GetState) => {
        dispatch(appLoading());

        const data = { ...signUpData }

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const body = JSON.stringify(data)
        try {
            const res = await axios.post(`${apiUrl}/signup`, body, config)
            const message = `Welcome ${res.data.name}, you can now login and save your score.`
            dispatch(
                // @ts-ignore
                showMessageWithTimeout("success", false, message, 1500)
            );
            dispatch(appDoneLoading())
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message)
                dispatch(setMessage("error", true, error.response.data.message))
            } else {
                console.log(error.message)
                dispatch(setMessage("error", true, error.message))
            }
            dispatch(appDoneLoading())
        }
    }
}

export const loadUser = () => async (dispatch: Dispatch, getState: GetState) => {

    if (localStorage.token === undefined) return

    try {
        const res = await axios.get(`${apiUrl}/me`, {
            headers: { Authorization: `Bearer ${localStorage.token}` }
        })
        dispatch(userFetched(res.data));

        const res1 = await axios.get(`${apiUrl}/users/${res.data.id}`)

        dispatch(setScore(res1.data.scoreboards[0].score))

    } catch (error) {
        console.log('no user')
        if (error.response) {

            dispatch(setMessage("error", true, error.response.data.message))
        } else {
            dispatch(setMessage("error", true, error.message))
        }
        dispatch(appDoneLoading())
    }
}

export const addScore = (
    score: number,
    userId: number
) => async (dispatch: Dispatch, getState: GetState) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {


        await axios.post(`http://localhost:4000/score`,
            JSON.stringify({ score, userId }), config)
    } catch (error) {
        console.log(error)
    }
}

export const updateScoree = (id: number,) => async (dispatch: Dispatch, getState: GetState) => {
    try {
        console.log('runn')

        const res = await axios.get(`http://localhost:4000/score`)

        //@ts-ignore
        const score = res.data.filter((data) => data.id === id)

        dispatch(updateScore(score[0].score))
    } catch (error) {
        console.log(error)
    }

}