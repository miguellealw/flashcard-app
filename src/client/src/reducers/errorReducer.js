export default function errors(state = { errorMessage: null }, action) {
  switch (action.type) {
    case "FETCH_DECK_FAILURE":
    case "CREATE_DECK_FAILURE":
    case "CREATE_CARD_FAILURE":
      const errorMessage = action.error.response.data.error;
      return { ...state.error, errorMessage };
    case "CLEAR_ERRORS":
      return { ...state.error, errorMessage: null };
    default:
      return state;
  }
}
