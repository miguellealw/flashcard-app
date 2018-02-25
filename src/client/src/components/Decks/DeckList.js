import React from "react";
import Deck from "./Deck";
import { Link } from "react-router-dom";
import {
  DeckListContainer,
  Title,
  DeckContainer,
  Header,
  NewDeckButton,
  EmptyDeckMessage,
} from "./styles/DeckList.styles";

const DeckList = ({ decks, addDeck, handleOpenModal, match }) => (
  <DeckListContainer>
    <Header>
      <Title>Your Decks</Title>
      <Link to={`/${match.url}`} onClick={handleOpenModal}>
        <NewDeckButton>+ Deck</NewDeckButton>
      </Link>
    </Header>
    <DeckContainer>
      {!decks[0] ? (
        <EmptyDeckMessage>You Currently Have No Decks</EmptyDeckMessage>
      ) : (
        decks.map((deck, i) => (
          <li key={i}>
            <Link to={`${match.url}/${deck.slug}`}>
              <Deck
                name={deck.name}
                cardAmount={deck.cards.length}
                // imgUrl={deck.imgUrl}
              />
            </Link>
          </li>
        ))
      )}
    </DeckContainer>
  </DeckListContainer>
);

export default DeckList;
