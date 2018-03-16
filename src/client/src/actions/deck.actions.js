import deckServices from "../services/deck.service";
import { displayFlash } from "./flash.actions";

import {
  fetchDecksActions,
  createDeckActions,
  deleteDeckActions,
} from "./utils";

export const getCurrentDeck = deckSlug => {
  return {
    type: "GET_CURRENT_DECK",
    deckSlug,
  };
};

export const clearCurrentDeck = () => {
  return {
    type: "CLEAR_CURRENT_DECK",
  };
};

export const fetchDecks = () => async (dispatch, getState) => {
  const isFetched = getState().decks.isFetched;
  if (isFetched) return;

  dispatch(fetchDecksActions.request());
  try {
    const userDecks = await deckServices.fetchDecks();
    dispatch(fetchDecksActions.success(userDecks));
  } catch (error) {
    dispatch(fetchDecksActions.failure(error));
  }
};

export const createDeck = (deckName, isCreatingDeck) => async dispatch => {
  // setState({ isCreatingDeck: true });
  if (deckName.trim() === "") {
    displayFlash(dispatch, {
      status: "error",
      message: "Please Give Your Deck A Name!",
    });
    return;
  }
  dispatch(createDeckActions.request());
  try {
    const newDeck = await deckServices.createDeck(deckName);
    dispatch(createDeckActions.success(newDeck));
    displayFlash(dispatch, { status: "success", message: "New Deck Created" });
    // setState({ isCreatingDeck: false });
  } catch (error) {
    const errorMessage = error.response.data.error;
    if (errorMessage) {
      displayFlash(dispatch, {
        status: "error",
        message: `'${deckName}' is already taken!`,
      });
    }
    dispatch(createDeckActions.failure(error));
    // setState({ isCreatingDeck: false });
  }
};

export const deleteDeck = deckId => async dispatch => {
  dispatch(deleteDeckActions.request());

  try {
    const deletedDeck = await deckServices.deleteDeck(deckId);
    dispatch(deleteDeckActions.success(deletedDeck));
    displayFlash(dispatch, {
      status: "success",
      message: "Deck Successfully Deleted",
    });
  } catch (error) {
    dispatch(deleteDeckActions.failure(error));
  }
};
