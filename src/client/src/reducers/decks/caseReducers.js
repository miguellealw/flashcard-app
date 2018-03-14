import {
  updateObject,
  updateArray,
  removeItemInArray,
  findItemInArray,
} from "../utils";

export function createDeck(state, action) {
  return updateObject(state, {
    allDecks: updateArray(state.allDecks, action.newDeck),
  });
}

export function deleteDeck(state, action) {
  return updateObject(state, {
    allDecks: removeItemInArray(state.allDecks, action.deletedDeck._id),
  });
}

export function getCurrentDeck(state, action) {
  return updateObject(state, {
    currentDeck: findItemInArray(state.allDecks, action.deckSlug, "slug"),
  });
}

export function clearCurrentDeck(state, action) {
  return updateObject(state, { currentDeck: null });
}
