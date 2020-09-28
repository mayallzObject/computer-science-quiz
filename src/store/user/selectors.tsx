import { StoreState } from "../types";

export const selectToken = (state: StoreState) => state.user.token;

export const selectUser = (state: StoreState) => state.user;
