import {
  CREATE_CARD_REQUEST,
  DELETE_CARD_REQUEST,
  CREATE_CARD_SUCCESS,
  DELETE_CARD_SUCCESS,
  CREATE_CARD_FAILURE,
  DELETE_CARD_FAILURE,
} from "../reducers/cards/cards.constants";

import { createCardActions, deleteCardActions } from "./utils";

import cardServices from "../services/card.service";
import { displayFlash } from "./flash.actions";
import cardService from "../services/card.service";

export function clearErrors() {
  return { type: "CLEAR_ERRORS" };
}

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

export const createCard = (deckSlug, front, back) => async (
  dispatch,
  getState,
) => {
  if (!front.trim() || !back.trim()) {
    return displayFlash(dispatch, {
      status: "error",
      message: "Please provide a front and back side to the card",
    });
  }
  dispatch(createCardActions.request());
  try {
    const newCard = await cardServices.createCard(deckSlug, front, back);
    displayFlash(dispatch, {
      status: "success",
      message: "New Card Created",
    });
    // let stateErrors = getState().errors.errorMessage;
    // if (!!stateErrors) {
    //   dispatch(clearErrors());
    // }
    dispatch(createCardActions.success(newCard, deckSlug));
  } catch (error) {
    // const errorMessage = error.response.data.error;
    dispatch(createCardActions.failure(error));
  }
};

export const deleteCard = (deckSlug, cardId) => async dispatch => {
  dispatch(deleteCardActions.request());
  try {
    const { _id: deletedDeckId } = await cardService.deleteCard(
      deckSlug,
      cardId,
    );
    displayFlash(dispatch, {
      status: "success",
      message: "Card Deleted Successfully",
    });
    dispatch(deleteCardActions.success(deletedDeckId, deckSlug));
  } catch (error) {
    dispatch(deleteCardActions.failure(error));
  }
};
