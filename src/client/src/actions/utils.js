import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "../reducers/auth/auth.constants";

import {
  CREATE_CARD_REQUEST,
  DELETE_CARD_REQUEST,
  CREATE_CARD_SUCCESS,
  DELETE_CARD_SUCCESS,
  CREATE_CARD_FAILURE,
  DELETE_CARD_FAILURE,
} from "../reducers/cards/cards.constants";

import {
  FETCH_DECK_REQUEST,
  FETCH_DECK_SUCCESS,
  FETCH_DECK_FAILURE,
  CREATE_DECK_REQUEST,
  CREATE_DECK_SUCCESS,
  CREATE_DECK_FAILURE,
  DELETE_DECK_REQUEST,
  DELETE_DECK_SUCCESS,
  DELETE_DECK_FAILURE,
} from "../reducers/decks/decks.constants";

/* 
<========================================>
  Auth Cycle Actions
<========================================>
*/
export const fetchUserActions = {
  request: user => ({ type: FETCH_USER_REQUEST, user }),
  success: user => ({
    type: FETCH_USER_SUCCESS,
    user,
    flash: { message: "Welcome Back!" },
  }),
  failure: error => ({ type: FETCH_USER_FAILURE, error }),
};

export const signUpUserActions = {
  request: () => ({ type: SIGNUP_REQUEST }),
  success: user => ({ type: SIGNUP_SUCCESS, user }),
  failure: error => ({ type: SIGNUP_FAILURE, error }),
};

export const logInUserActions = {
  request: () => ({ type: LOGIN_REQUEST }),
  success: user => ({
    type: LOGIN_SUCCESS,
    user,
    flash: { message: "Successfully Signed In" },
  }),
  failure: error => ({ type: LOGIN_FAILURE, error }),
};

/* 
<========================================>
  Card Cycle Actions
<========================================>
*/
export const createCardActions = {
  request: () => ({ type: CREATE_CARD_REQUEST }),
  success: (newCard, deckSlug) => ({
    type: CREATE_CARD_SUCCESS,
    newCard,
    deckSlug,
    flash: { message: "New Card Created" },
  }),
  failure: error => ({ type: CREATE_CARD_FAILURE, error }),
};

export const deleteCardActions = {
  request: () => ({ type: DELETE_CARD_REQUEST }),
  success: (deletedCardId, deckSlug) => ({
    type: DELETE_CARD_SUCCESS,
    deletedCardId,
    deckSlug,
    flash: { message: "Card Deleted Successfully" },
  }),
  failure: error => ({ type: DELETE_CARD_FAILURE, error }),
};

/* 
<========================================>
  Deck Cycle Actions
<========================================>
*/
export const fetchDecksActions = {
  request: () => ({ type: FETCH_DECK_REQUEST }),
  success: userDecks => ({ type: FETCH_DECK_SUCCESS, userDecks }),
  failure: error => ({ type: FETCH_DECK_FAILURE, error }),
};

export const createDeckActions = {
  request: () => ({ type: CREATE_DECK_REQUEST }),
  success: newDeck => ({
    type: CREATE_DECK_SUCCESS,
    newDeck,
    flash: { message: "New Deck Created" },
  }),
  failure: error => ({ type: CREATE_DECK_FAILURE, error }),
};

export const deleteDeckActions = {
  request: () => ({ type: DELETE_DECK_REQUEST }),
  success: deletedDeck => ({
    type: DELETE_DECK_SUCCESS,
    deletedDeck,
    flash: { message: "Deck Successfully Deleted" },
  }),
  failure: error => ({ type: DELETE_DECK_FAILURE, error }),
};
