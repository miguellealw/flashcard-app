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
} from "../reducers/auth/auth.constants";

import userServices from "../services/user.service";
import { displayFlash } from "./flash.actions";
import { fetchUserActions, signUpUserActions, logInUserActions } from "./utils";





export const fetchUser = () => async dispatch => {
  dispatch(fetchUserActions.request({ user: null }));
  try {
    const user = await userServices.fetchCurrentUser();
    dispatch(fetchUserActions.success(user));
    displayFlash(dispatch, {
      status: "success",
      message: "Welcome Back",
    });
  } catch (error) {
    dispatch(fetchUserActions.failure(error.response.statusText));
  }
};

export const signUpUser = postBody => async dispatch => {
  dispatch(signUpUserActions.request());
  try {
    const user = await userServices.signup(postBody);
    if (user) dispatch(signUpUserActions.success(user));
  } catch (error) {
    dispatch(signUpUserActions.failure(error));
  }
};

export const logInUser = (postBody, history) => async dispatch => {
  dispatch(logInUserActions.request());

  try {
    const user = await userServices.login(postBody);
    dispatch(logInUserActions.success(user));
    history.push("/decks");

    displayFlash(dispatch, {
      status: "success",
      message: "Successfully Signed In",
    });
  } catch (error) {
    displayFlash(dispatch, {
      status: "error",
      message: "Email or Password is Incorrect",
    });

    dispatch(logInUserActions.failure(error));
  }
};

export const logoutUser = () => async dispatch => {
  // await axios.get("/api/v1/user/logout");
  userServices.logout();
  dispatch({ type: LOGOUT_USER });

  displayFlash(dispatch, {
    status: "error",
    message: "Goodbye...",
  });
};
