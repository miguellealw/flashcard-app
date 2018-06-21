import axios from 'axios';

async function fetchDecks() {
  try {
    const res = await axios.get('/api/v1/deck');
    if (res.statusText === 'OK') return res.data;
  } catch (error) {
    throw error;
  }
}

async function createDeck(name) {
  try {
    const res = await axios.post('/api/v1/deck', { name });
    // if(res.statusText === "Created") return res.data
    return res.data;
  } catch (error) {
    throw error;
  }
}

async function updateDeck(deckSlug, newName) {
  try {
    const res = await axios.patch(`/api/v1/deck/${deckSlug}`, {
      name: newName,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

async function deleteDeck(id) {
  try {
    const res = await axios.delete(`/api/v1/deck/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export default {
  fetchDecks,
  createDeck,
  deleteDeck,
  updateDeck,
};
