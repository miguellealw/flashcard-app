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
import PropTypes from "prop-types";
// import Spinner from "react-spinkit";
// import SlideFromBottom from "../animations/SlideFromBottom";
// import { TransitionGroup } from "react-transition-group";

const DeckList = ({
  decks,
  handleOpenModal,
  match,
  handleDeleteDeck,
  isCreatingDeck,
  show,
}) => (
  <DeckListContainer>
    <Header>
      <Title>Your Decks</Title>
      <Link to={`/${match.url}`} onClick={handleOpenModal}>
        <NewDeckButton>+ Deck</NewDeckButton>
      </Link>
    </Header>
    <DeckContainer>
      {!decks.length ? (
        <EmptyDeckMessage>You Currently Have No Decks</EmptyDeckMessage>
      ) : (
        decks.map((deck, i) => (
          // isCreatingDeck ? (
          //   <li key={i}>
          //     <Spinner name="circle" />
          //   </li>
          // ) :

          <li key={deck._id}>
            <Link to={`${match.url}/${deck.slug}`}>
              <Deck
                name={deck.name}
                cardAmount={deck.cards.length}
                handleDeleteDeck={handleDeleteDeck}
                deckId={deck._id}
                match={match}
                // imgUrl={deck.imgUrl}
              />
            </Link>
          </li>
        ))
      )}
    </DeckContainer>
  </DeckListContainer>
);

DeckList.propTypes = {
  decks: PropTypes.array,
  handleOpenModal: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  handleDeleteDeck: PropTypes.func.isRequired,
  isCreatingDeck: PropTypes.bool,
  show: PropTypes.bool,
};

export default DeckList;
