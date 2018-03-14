import axios from "axios";

async function createCard(deckSlug, front, back) {
  try {
    const res = await axios.post(`/api/v1/deck/${deckSlug}/add`, {
      front,
      back,
    });
    // if(res.statusText === "Created") return res.data
    return res.data;
  } catch (error) {
    throw error;
  }
}

async function deleteCard(deckSlug, cardId) {
  try {
    console.log("delete card service");
    const res = await axios.delete(`/api/v1/deck/${deckSlug}/${cardId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default {
  createCard,
  deleteCard,
};
