
import { User } from "../../types/userTypes";

export const FETCH_MORE_TRIPS = "FETCH_MORE_TRIPS";
export const FETCH_USER = "FETCH_USER";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";


export type fetchUser = {
    type: typeof FETCH_USER;
    user: User;
};
export type fetchNoTokenUser = {
    type: typeof TOKEN_STILL_VALID;
    user: User;
};
export type logOut = {
    type: typeof LOG_OUT;
    user: null;
};


export type AuthTypes = fetchUser | fetchNoTokenUser | logOut;

export type UserActionTypes = AuthTypes;