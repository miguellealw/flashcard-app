// import errorReducer from "./errorReducer";

export default function decks(state = [], action) {
  switch (action.type) {
    case "FETCH_DECK_REQUEST":
      return state;
    case "FETCH_DECK_SUCCESS":
      return action.userDecks;
    // return !state[0]
    //   ? [...action.userDecks]
    //   : [...state, ...action.userDecks];
    // return [...state, action.userData];
    // return [].concat(state, action.userData);
    // if (state.length > 0) return [...state, ...action.userDecks];
    // else return [...action.userDecks]
    // return [...state].concat(action.userDecks);
    // case "FETCH_DECK_FAILURE":
      // return errorReducer(state, action)
      // return [{ message: "error in fethcing deck" }];

    case "CREATE_DECK_REQUEST":
      return state;
    case "CREATE_DECK_SUCCESS":
      return [...state, action.newDeck];
    // case "CREATE_DECK_FAILURE":
    //   return action.error;

    case "CREATE_CARD_REQUEST":
      // return state;
      return state;
    case "CREATE_CARD_SUCCESS":
      const currentDeck = state.find(deck => deck.slug === action.deckSlug);
      currentDeck.cards = [...currentDeck.cards, action.newCard];
      return [...state, currentDeck];
    // case "CREATE_CARD_FAILURE":
    // return [{ message: "error in creating card" }];

    // return action.error

    default:
      return state;
  }
}
