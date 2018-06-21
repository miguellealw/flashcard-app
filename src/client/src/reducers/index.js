import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import deckReducer from './decks/deckReducer';
import errorReducer from './errorReducer';
import flashReducer from './flash/flashReducer';

export default combineReducers({
  flash: flashReducer,
  errors: errorReducer,
  auth: authReducer,
  decks: deckReducer,
});
