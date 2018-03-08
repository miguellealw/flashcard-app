export default function flash(state = { show: false }, action) {
  switch (action.type) {
    case "FLASH_SUCCESS":
    case "FLASH_FAILURE":
      return {
        ...state,
        show: true,
        status: action.status,
        message: action.message,
      };
    case "FLASH_CLEAR":
      return { ...state, show: false };
    default:
      return state;
  }
}
