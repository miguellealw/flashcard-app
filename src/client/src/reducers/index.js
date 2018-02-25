import { combineReducers } from "redux";
import authReducer from "./authReducer";
import deckReducer from "./deckReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  decks: deckReducer,
});
