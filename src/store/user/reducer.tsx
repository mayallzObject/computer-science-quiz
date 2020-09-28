// TypeScript types
import { User } from "../../types/userTypes";
import {
  LOG_OUT,
  FETCH_USER,
  TOKEN_STILL_VALID,
  UserActionTypes,
  SET_SCORE,
  UPDATE_SCORE,
} from "./types";

const token = localStorage.getItem("token");

const initialState: User = {
  id: null,
  name: null,
  userImg: null,
  email: null,
  score: null,
  token: token,
};

export default (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case FETCH_USER:
      const userToken = action.user.token;
      if (userToken) localStorage.setItem("token", userToken);
      return { ...state, ...action.user };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.user };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case SET_SCORE:
      return { ...state, score: action.score };
    //! Temporary salution...
    case UPDATE_SCORE:
      return {
        id: state.id,
        name: state.name,
        userImg: state.userImg,
        email: state.email,
        score: action.updatedScore,
        token: state.token,
      };

    default:
      return state;
  }
};
