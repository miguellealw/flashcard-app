/* Component */
import React from "react";
import { DeckInfo, DeckContainer } from "./styles/Deck.styles";
import PropTypes from "prop-types";

const Deck = ({
  name,
  cardAmount,
  handleDeleteDeck,
  imgUrl,
  match,
  deckId,
}) => (
  <DeckContainer>
    {/* <DeckImg>
          <img src={imgUrl} alt="Deck Img" />
          </DeckImg>  */}
    <DeckInfo>
      <h3>{name}</h3>
      <p>{match.params.deckName}</p>
      <p>{cardAmount} Cards</p>
      <button onClick={handleDeleteDeck(deckId)}>Delete Deck</button>
    </DeckInfo>
  </DeckContainer>
);

Deck.propTypes = {
  name: PropTypes.string.isRequired,
  cardAmount: PropTypes.number.isRequired,
  handleDeleteDeck: PropTypes.func.isRequired,
  imgUrl: PropTypes.string,
  match: PropTypes.object.isRequired,
  deckId: PropTypes.string.isRequired,
};

export default Deck;
