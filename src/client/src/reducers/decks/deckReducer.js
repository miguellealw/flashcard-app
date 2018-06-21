import {
  GET_CURRENT_DECK,
  CLEAR_CURRENT_DECK,
  FETCH_DECK_REQUEST,
  FETCH_DECK_SUCCESS,
  FETCH_DECK_FAILURE,
  CREATE_DECK_REQUEST,
  CREATE_DECK_SUCCESS,
  CREATE_DECK_FAILURE,
  DELETE_DECK_REQUEST,
  DELETE_DECK_SUCCESS,
  DELETE_DECK_FAILURE,
  UPDATE_DECK_REQUEST,
  UPDATE_DECK_SUCCESS,
  UPDATE_DECK_FAILURE,
} from './decks.constants';

import {
  CREATE_CARD_REQUEST,
  DELETE_CARD_REQUEST,
  CREATE_CARD_SUCCESS,
  DELETE_CARD_SUCCESS,
  CREATE_CARD_FAILURE,
  DELETE_CARD_FAILURE,
} from '../cards/cards.constants';

import { updateArray, updateObject, decorateItemsInArray } from '../utils';
import cards from '../cards/cardReducer';

import { combineReducers } from 'redux';

// import { createSelector } from 'reselect';

import {
  createDeck,
  deleteDeck,
  updateDeck,
  getCurrentDeck,
  clearCurrentDeck,
  toggleEditing,
} from './caseReducers';

const initialState = {
  isFetched: false,
  currentDeck: null,
  allDecks: [],
};

// const deckSelector = state => state.decks.allDecks;
// const currentDeckSelector = decks => {};
// const currentDeckSelector = deckSlug => createSelector(deckSelector, (decks, deckSlug) =>  );
export default function decks(state = initialState, action) {
  switch (action.type) {
    /* 
    <========================================>
      Decks
    <========================================>
    */
    case GET_CURRENT_DECK:
      return getCurrentDeck(state, action);
    case CLEAR_CURRENT_DECK:
      return clearCurrentDeck(state, action);

    case FETCH_DECK_SUCCESS:
      return updateObject(state, {
        isFetched: true,
        allDecks: action.userDecks,
      });

    case FETCH_DECK_REQUEST:
    case CREATE_DECK_REQUEST:
    case DELETE_DECK_REQUEST:
    case UPDATE_DECK_REQUEST:
      return state;

    case CREATE_DECK_SUCCESS:
      return createDeck(state, action);
    case DELETE_DECK_SUCCESS:
      return deleteDeck(state, action);
    case UPDATE_DECK_SUCCESS:
      return updateDeck(state, action);

    case CREATE_DECK_FAILURE:
    case DELETE_DECK_FAILURE:
    case FETCH_DECK_FAILURE:
    case UPDATE_DECK_FAILURE:
      return updateArray(state, {
        error: { errorMessage: action.error },
      });

    /* 
    <========================================>
      Cards
    <========================================>
    */
    case CREATE_CARD_REQUEST:
    case DELETE_CARD_REQUEST:
    case CREATE_CARD_SUCCESS:
    case DELETE_CARD_SUCCESS:
    case CREATE_CARD_FAILURE:
    case DELETE_CARD_FAILURE:
      return updateObject(state, {
        currentDeck: updateObject(state.currentDeck, {
          cards: cards(state.currentDeck.cards, action),
        }),
      });
    default:
      return state;
  }
}
