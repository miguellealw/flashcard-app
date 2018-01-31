// function isEmpty(obj) {
//   return Object.keys(obj).length === 0;
// }

export default function(state = null, action) {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        isAuthenticated: action.payload.userData !== null,
        user: action.payload,
      };
    case "LOGIN_USER":
      return {
        ...state,
        isAuthenticated: action.payload.userData !== null,
        user: action.payload,
      };
    case "LOGOUT_USER":
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
}
