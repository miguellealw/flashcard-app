import { updateArray, updateObject } from '../helpers';
import {
  createDeck,
  deleteDeck,
  updateDeck,
  getCurrentDeck,
  clearCurrentDeck,
} from './caseReducers/decksCaseReducers';

/* 
<========================================>
  Actions

  npm-module-or-app/reducer/ACTION_TYPE

  const LOAD = 'my-app/widgets/LOAD';
<========================================>
*/
const GET_CURRENT_DECK = 'flashcard-app/decks/GET_CURRENT_DECK';
const CLEAR_CURRENT_DECK = 'flashcard-app/decks/CLEAR_CURRENT_DECK';

/* CRUD REQUEST */
const FETCH_DECK_REQUEST = 'flashcard-app/decks/FETCH_DECK_REQUEST';
const CREATE_DECK_REQUEST = 'flashcard-app/decks/CREATE_DECK_REQUEST';
const DELETE_DECK_REQUEST = 'flashcard-app/decks/DELETE_DECK_REQUEST';
const UPDATE_DECK_REQUEST = 'flashcard-app/decks/UPDATE_DECK_REQUEST';

/* CRUD SUCCESS */
const FETCH_DECK_SUCCESS = 'flashcard-app/decks/FETCH_DECK_SUCCESS';
const CREATE_DECK_SUCCESS = 'flashcard-app/decks/CREATE_DECK_SUCCESS';
const DELETE_DECK_SUCCESS = 'flashcard-app/decks/DELETE_DECK_SUCCESS';
const UPDATE_DECK_SUCCESS = 'flashcard-app/decks/UPDATE_DECK_SUCCESS';

/* CRUD FAILURE */
const FETCH_DECK_FAILURE = 'flashcard-app/decks/FETCH_DECK_FAILURE';
const CREATE_DECK_FAILURE = 'flashcard-app/decks/CREATE_DECK_FAILURE';
const DELETE_DECK_FAILURE = 'flashcard-app/decks/DELETE_DECK_FAILURE';
const UPDATE_DECK_FAILURE = 'flashcard-app/decks/UPDATE_DECK_FAILURE';

/* 
<========================================>
  Reducer
<========================================>
*/
const initialState = {};
export default function reducer(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}

/*
<========================================>
  Action Creators
<========================================>
*/
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
    flash: { message: 'Success: Deck Created' },
  }),
  failure: error => ({ type: CREATE_DECK_FAILURE, error }),
};

export const deleteDeckActions = {
  request: () => ({ type: DELETE_DECK_REQUEST }),
  success: deletedDeck => ({
    type: DELETE_DECK_SUCCESS,
    deletedDeck,
    flash: { message: 'Success: Deck Deleted' },
  }),
  failure: error => ({ type: DELETE_DECK_FAILURE, error }),
};

export const updateDeckActions = {
  request: () => ({ type: UPDATE_DECK_REQUEST }),
  success: updatedDeck => ({
    type: UPDATE_DECK_SUCCESS,
    updatedDeck,
    flash: { message: 'Success: Deck Updated' },
  }),
  failure: error => ({ type: UPDATE_DECK_FAILURE, error }),
};

/*
<========================================>
  Side Effects (Thunks, Sagas, etc.)
<========================================>
*/
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
