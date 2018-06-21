import { createCard, deleteCard } from "./caseReducers";
import { updateArray } from "../utils";

import {
  CREATE_CARD_REQUEST,
  DELETE_CARD_REQUEST,
  CREATE_CARD_SUCCESS,
  DELETE_CARD_SUCCESS,
  CREATE_CARD_FAILURE,
  DELETE_CARD_FAILURE,
} from "./cards.constants";

export default function cards(state = [], action) {
  switch (action.type) {
    case CREATE_CARD_REQUEST:
    case DELETE_CARD_REQUEST:
      return state;

    case DELETE_CARD_SUCCESS:
      return deleteCard(state, action);
    case CREATE_CARD_SUCCESS:
      return createCard(state, action);

    case DELETE_CARD_FAILURE:
    case CREATE_CARD_FAILURE:
      return updateArray(state, { error: { errorMessage: action.error } });

    default: return state;
  }
}
