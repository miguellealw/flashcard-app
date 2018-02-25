export default function errors(state = { errorMessage: null }, action) {
  switch (action.type) {
    case "FETCH_DECK_FAILURE":
    case "CREATE_DECK_FAILURE":
    case "CREATE_CARD_FAILURE":
      return { ...state.error, errorMessage: action.error };
    case "CLEAR_ERRORS":
      return { ...state.error, errorMessage: null };
    default:
      return state;
  }
}
