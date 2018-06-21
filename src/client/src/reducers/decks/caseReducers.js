import {
  updateObject,
  updateArray,
  updateItemInArray,
  removeItemInArray,
  findItemInArray,
} from '../utils';

export function createDeck(state, action) {
  return updateObject(state, {
    allDecks: updateArray(
      state.allDecks,
      action.newDeck
    ),
  });
}

export function deleteDeck(state, action) {
  return updateObject(state, {
    allDecks: removeItemInArray(state.allDecks, action.deletedDeck._id),
  });
}

export function updateDeck(state, action) {
  console.log(action);
  const newDecks = updateItemInArray(
    state.allDecks,
    action.updatedDeck._id,
    '_id',
    deckToUpdate => ({
      ...deckToUpdate,
      name: action.updatedDeck.name,
      slug: action.updatedDeck.slug,
    }),
  );
  return updateObject(state, {
    allDecks: newDecks,
  });
}

export function getCurrentDeck(state, action) {
  return updateObject(state, {
    currentDeck: findItemInArray(state.allDecks, action.deckSlug, 'slug'),
  });
}

export function clearCurrentDeck(state, action) {
  return updateObject(state, { currentDeck: null });
}
