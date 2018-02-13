// import axios from "axios";
import userServices from "../services/user.service";

export const fetchUser = () => async dispatch => {
  dispatch(request({ user: null }));
  try {
    const user = await userServices.fetchCurrentUser();
    // dispatch({ type: "FETCH_USER", payload: user });
    dispatch(success(user));
  } catch (error) {
    dispatch(failure(error.response.statusText));
  }

  function request(user) {
    return { type: "FETCH_USER_REQUEST", user };
  }
  function success(user) {
    return { type: "FETCH_USER_SUCCESS", user };
  }
  function failure(error) {
    return { type: "FETCH_USER_FAILURE", error };
  }
};

export const signUpUser = postBody => async dispatch => {
  dispatch(request());
  try {
    const user = await userServices.signup(postBody);
    if (user) dispatch(success(user));
  } catch (error) {
    dispatch(failure(error));
    // console.log(error.response.data.error);
  }

  // Actions to login user
  function request() {
    return { type: "SIGNUP_REQUEST" };
  }
  function success(user) {
    return { type: "SIGNUP_SUCCESS", user };
  }
  function failure(error) {
    return { type: "SIGNUP_FAILURE", error };
  }
};

export const logInUser = (postBody, history) => async dispatch => {
  // const { data: user } = await axios.post("/api/v1/user/login", postBody);
  // dispatch({ type: "LOGIN_USER", payload: user });
  dispatch(request());

  try {
    const user = await userServices.login(postBody);
    history.push("/");
    if (user) dispatch(success(user));
  } catch (error) {
    dispatch(failure(error));
  }

  // Actions to login user
  function request() {
    return { type: "LOGIN_REQUEST" };
  }
  function success(user) {
    return { type: "LOGIN_SUCCESS", user };
  }
  function failure(error) {
    return { type: "LOGIN_FAILURE", error };
  }
};

export const logoutUser = () => async dispatch => {
  // await axios.get("/api/v1/user/logout");
  userServices.logout();
  dispatch({ type: "LOGOUT_USER" });
};
