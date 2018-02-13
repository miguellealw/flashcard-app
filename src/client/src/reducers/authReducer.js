// function isEmpty(obj) {
//   return Object.keys(obj).length === 0;
// }

// import userServices from "../services/user.service";
// let initialState = {}

// userServices.fetchCurrentUser().then(user => {
//   initialState = user ? { loggedIn: true, user } : {};
// })

// (async () => {
//   try {
//     let user = await userServices.fetchCurrentUser();
//     console.log("reducer currentuser", user);
//     initialState = user ? { loggedIn: true, user } : {};
//   } catch (error) {
//     console.error(error);
//   }
// })()

const initialState = {
  loggedIn: false,
  user: null,
  isFetching: true,
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { loggedIn: false };
    case "LOGIN_SUCCESS":
      return { loggedIn: true, user: action.user };
    case "LOGIN_FAILURE":
      return { loggedIn: false };
    case "LOGOUT_USER":
      return { loggedIn: false, user: null };
    case "SIGNUP_REQUEST":
      return {};
    case "SIGNUP_SUCCESS":
      return {};
    case "SIGNUP_FAILURE":
      return {};
    case "FETCH_USER_REQUEST":
      return { loggedIn: false, user: action.user, isFetching: true };
    case "FETCH_USER_SUCCESS":
      return { loggedIn: true, user: action.user, isFetching: false };
    case "FETCH_USER_FAILURE":
      return { loggedIn: false, user: null, isFetching: false };
    default:
      return state;
  }
}

// export default function(state = null, action) {
//   switch (action.type) {
//     case "FETCH_USER":
//       return {
//         ...state,
//         isAuthenticated: action.payload.userData !== null,
//         user: action.payload,
//       };
//     case "LOGIN_USER":
//       return {
//         ...state,
//         isAuthenticated: action.payload.userData !== null,
//         user: action.payload,
//       };
//     case "SIGNUP_USER":
//       return {
//         ...state,
//       };
//     case "LOGOUT_USER":
//       return { ...state, isAuthenticated: false, user: null };
//     default:
//       return state;
//   }
// }
