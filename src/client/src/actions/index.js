import * as authActions from './auth.actions'
import * as deckActions from './deck.actions'
import * as cardActions from './card.actions'

export default {
  ...authActions,
  ...deckActions,
  ...cardActions
}

export function clearErrors() {
  return { type: "CLEAR_ERRORS" };
}
