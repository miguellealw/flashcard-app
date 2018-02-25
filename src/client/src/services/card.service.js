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

export default {
  createCard,
};
