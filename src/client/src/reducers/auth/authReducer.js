import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_USER,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./auth.constants";

const initialState = {
  loggedIn: false,
  user: null,
  isFetching: true,
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loggedIn: false };
    case LOGIN_SUCCESS:
      return { loggedIn: true, user: action.user };
    case LOGIN_FAILURE:
      return state;
    case LOGOUT_USER:
      return { loggedIn: false, user: null };

    case SIGNUP_REQUEST:
    case SIGNUP_SUCCESS:
    case SIGNUP_FAILURE:
      return {};

    case FETCH_USER_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_USER_SUCCESS:
      return { loggedIn: true, user: action.user, isFetching: false };
    case FETCH_USER_FAILURE:
      return { loggedIn: false, user: null, isFetching: false };
    default:
      return state;
  }
}
