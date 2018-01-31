import axios from "axios";

export const fetchUser = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/v1/user/current_user");
    dispatch({ type: "FETCH_USER", payload: data });
  } catch (error) {
    console.log("no user found!!!!!!!!");
  }
};

export const logInUser = postBody => async dispatch => {
  const { data: user } = await axios.post("/api/v1/user/login", postBody);
  dispatch({ type: "LOGIN_USER", payload: user });
};

export const logoutUser = () => async dispatch => {
  await axios.get("/api/v1/user/logout");
  dispatch({ type: "LOGOUT_USER" });
};
