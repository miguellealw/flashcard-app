import cardServices from "../services/card.service";

export function clearErrors() {
  return { type: "CLEAR_ERRORS" };
}


export const createCard = (deckSlug, front, back) => async (
  dispatch,
  getState,
) => {
  dispatch(request());
  // console.log('state errros', !!stateErrors)
  try {
    const newCard = await cardServices.createCard(deckSlug, front, back);
    let stateErrors = getState().errors.errorMessage;
    if (!!stateErrors) {
      dispatch(clearErrors());
    }
    dispatch(success(newCard, deckSlug));
  } catch (error) {
    // const errorMessage = error.response.data.error;
    dispatch(failure(error));
  }

  function request() {
    return { type: "CREATE_CARD_REQUEST" };
  }
  function success(newCard, deckSlug) {
    return { type: "CREATE_CARD_SUCCESS", newCard, deckSlug };
  }
  function failure(error) {
    return { type: "CREATE_CARD_FAILURE", error };
  }
};
