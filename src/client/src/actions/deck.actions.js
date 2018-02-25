import deckServices from "../services/deck.service";


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
