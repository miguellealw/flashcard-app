import { combineReducers } from "redux";
import authReducer from "./authReducer";
import deckReducer from "./deckReducer";

export default combineReducers({
  auth: authReducer,
  decks: deckReducer,
});
