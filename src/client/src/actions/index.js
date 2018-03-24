import * as authActions from "./auth.actions";
import * as deckActions from "./deck.actions";
import * as cardActions from "./card.actions";
import * as flashActions from "./flash.actions";

export default {
  ...authActions,
  ...deckActions,
  ...cardActions,
  ...flashActions,
};

export function clearErrors() {
  return { type: "CLEAR_ERRORS" };
}
