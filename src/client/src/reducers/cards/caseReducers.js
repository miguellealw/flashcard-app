import { updateArray, removeItemInArray } from "../utils";

export function createCard(state, action) {
  return updateArray(state, action.newCard);
}

export function deleteCard(state, action) {
  return removeItemInArray(state, action.deletedCardId);
}
