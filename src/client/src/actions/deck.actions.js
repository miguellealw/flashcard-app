import deckServices from "../services/deck.service";
import { displayFlash } from "./flash.actions";

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
  if(deckName.trim() === "") {
    displayFlash(dispatch, {status: "error", message: "Please Give Your Deck A Name!"})
    return;
  }
  dispatch(request());
  try {
    const newDeck = await deckServices.createDeck(deckName);
    dispatch(success(newDeck));
    displayFlash(dispatch, { status: "success", message: "New Deck Created" });
  } catch (error) {
    const errorMessage = error.response.data.error;
    if (errorMessage) {
      displayFlash(dispatch, {
        status: "error",
        message: `'${deckName}' is already taken!`,
      });
    }
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

export const deleteDeck = deckId => async dispatch => {
  dispatch(request());

  try {
    const deletedDeck = await deckServices.deleteDeck(deckId);
    dispatch(success(deletedDeck));
    displayFlash(dispatch, {
      status: "error",
      message: "Deck Successfully Deleted",
    });
  } catch (error) {
    dispatch(failure(error));
  }
  function request() {
    return { type: "DELETE_DECK_REQUEST" };
  }
  function success(deletedDeck) {
    return { type: "DELETE_DECK_SUCCESS", deletedDeck };
  }
  function failure(error) {
    return { type: "DELETE_DECK_FAILURE", error };
  }
};
