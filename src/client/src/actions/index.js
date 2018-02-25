// import axios from "axios";
import userServices from "../services/user.service";
import deckServices from "../services/deck.service";
import cardServices from "../services/card.service";

export const fetchUser = () => async dispatch => {
  dispatch(request({ user: null }));
  try {
    // setTimeout(async () => {
    //   const user = await userServices.fetchCurrentUser();
    //   dispatch(success(user));
    // }, 10000);
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
    history.push("/decks");
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

/* Deck Actions */

export const fetchDecks = () => async dispatch => {
  dispatch(request());
  try {
    const userDecks = await deckServices.fetchDecks();
    dispatch(success(userDecks));
  } catch (error) {
    dispatch(failure(error));
  }

  function request() {
    return { type: "FETCH_DECK_REQUEST" };
  }
  function success(userDecks) {
    return { type: "FETCH_DECK_SUCCESS", userDecks };
  }
  function failure(error) {
    return { type: "FETCH_DECK_FAILURE", error };
  }
};

export const createDeck = deckName => async dispatch => {
  dispatch(request());
  try {
    const newDeck = await deckServices.createDeck(deckName);
    dispatch(success(newDeck));
  } catch (error) {
    dispatch(failure(error));
  }

  function request() {
    return { type: "CREATE_DECK_REQUEST" };
  }
  function success(newDeck) {
    return { type: "CREATE_DECK_SUCCESS", newDeck };
  }
  function failure(error) {
    return { type: "CREATE_DECK_FAILURE", error };
  }
};

/* Card Actions */
export const createCard = (deckSlug, front, back) => async (
  dispatch,
  getState,
) => {
  dispatch(request());
  // console.log('state errros', !!stateErrors)
  try {
    const newCard = await cardServices.createCard(deckSlug, front, back);
    let stateErrors = getState().errors.errorMessage;
    // if (stateErrors) {
    //   stateErrors = null;
    // }
    if (!!stateErrors) {
      dispatch(clearErrors());
    }
    dispatch(success(newCard, deckSlug));
  } catch (error) {
    const errorMessage = error.response.data.error;
    dispatch(failure(errorMessage));
  }

  function request() {
    return { type: "CREATE_CARD_REQUEST" };
  }
  function success(newCard, deckSlug) {
    return { type: "CREATE_CARD_SUCCESS", newCard, deckSlug };
  }
  function failure(error) {
    return { type: "CREATE_CARD_FAILURE", error };
  }
};

export function clearErrors() {
  return { type: "CLEAR_ERRORS" };
}
