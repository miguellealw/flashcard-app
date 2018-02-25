export default function cards(state = [], action) {
  switch (action.type) {
    case "CREATE_CARD_REQUEST":
      return state;
    case "CREATE_CARD_SUCCESS":
    case "CREATE_CARD_FAILURE":
    default:
      return state;
  }
}
