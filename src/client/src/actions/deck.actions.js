import deckServices from '../services/deck.service';
import { displayFlash } from './flash.actions';

import {
  fetchDecksActions,
  createDeckActions,
  deleteDeckActions,
  updateDeckActions,
} from './utils';

import { normalize } from 'normalizr';

import { deckSchema } from '../normalizr/schemas';

export const getCurrentDeck = deckSlug => {
  return {
    type: 'GET_CURRENT_DECK',
    deckSlug,
  };
};

export const clearCurrentDeck = () => {
  return {
    type: 'CLEAR_CURRENT_DECK',
  };
};

const fetchDecksAction = () => ({
  type: 'FETCH_DECKS',
  meta: {
    url: '/api/v1/deck',
    success: ({ entities }) => fetchDecksActions.success(entities.decks),
    // schema: [schema.authors],
  },
  payload: {

  },
});

export const fetchDecks = () => async (dispatch, getState) => {
  const isFetched = getState().decks.isFetched;
  if (isFetched) return;

  dispatch(fetchDecksActions.request());
  try {
    const userDecks = await deckServices.fetchDecks();
    //normalize(userDecks, [deckSchema]))}
    dispatch(fetchDecksActions.success(userDecks));
  } catch (error) {
    dispatch(fetchDecksActions.failure(error));
  }
};

export const createDeck = (deckName, isCreatingDeck) => async (
  dispatch,
  getState,
) => {
  // setState({ isCreatingDeck: true });
  if (deckName.trim() === '') {
    return displayFlash(dispatch, {
      status: 'error',
      message: 'Error: Please Give Your Deck A Name!',
    });
  }
  dispatch(createDeckActions.request(deckName));
  try {
    const newDeck = await deckServices.createDeck(deckName);
    dispatch(createDeckActions.success(newDeck));
    // setState({ isCreatingDeck: false });
  } catch (error) {
    const errorMessage = error.response.data.error;
    if (errorMessage) {
      displayFlash(dispatch, {
        status: 'error',
        message: `Error: '${deckName}' is already taken!`,
      });
    }
    dispatch(createDeckActions.failure(error));
    // setState({ isCreatingDeck: false });
  }
};

export const updateDeck = (deckSlug, newName) => async dispatch => {
  if (newName.trim() === '') {
    return displayFlash(dispatch, {
      status: 'error',
      message: 'Error: Please Give Your Deck A Name!',
    });
  }
  dispatch(updateDeckActions.request());
  try {
    const updatedDeck = await deckServices.updateDeck(deckSlug, newName);
    dispatch(updateDeckActions.success(updatedDeck));
  } catch (error) {
    dispatch(updateDeckActions.failure(error));
  }
};

export const toggleEditing = deckSlug => dispatch => {
  dispatch({
    type: 'TOGGLE_EDITING',
    deckSlug,
  });
};

export const deleteDeck = deckId => async dispatch => {
  dispatch(deleteDeckActions.request());

  try {
    const deletedDeck = await deckServices.deleteDeck(deckId);
    dispatch(deleteDeckActions.success(deletedDeck));
  } catch (error) {
    dispatch(deleteDeckActions.failure(error));
  }
};
