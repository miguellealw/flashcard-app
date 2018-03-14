/* Component */
import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import {
  DeckListContainer,
  Header,
  NewCardButton,
  StudyButton,
  ButtonContainers,
  Title,
  CardContainer,
  NoCardsMessage,
  DeckTimestamp,
} from "./styles/CardList.styles";

const CardList = ({
  currentDeck,
  deckDate,
  slug,
  handleOpenModal,
  handleDeleteCard,
}) => {
  // const currentDeck = decks.find(deck => deck.slug === slug);
  // const deckDate = moment(currentDeck.createdAt).format("MMM DD, YYYY");

  return (
    <DeckListContainer>
      <Header>
        <Title>
          {currentDeck.name}{" "}
          <DeckTimestamp>created on {deckDate}</DeckTimestamp>
        </Title>
        <ButtonContainers>
          <StudyButton disabled={currentDeck.cards.length === 0}>
            Study Cards
          </StudyButton>
          <NewCardButton onClick={handleOpenModal}>+ Cards</NewCardButton>
        </ButtonContainers>
      </Header>
      {/* <p>{this.props.match.params.deckName}</p> */}
      <CardContainer>
        {currentDeck.cards <= 0 ? (
          <NoCardsMessage>No Cards in Deck</NoCardsMessage>
        ) : (
          currentDeck.cards.map(card => (
            <Card
              front={card.front}
              back={card.back}
              key={card._id}
              handleDeleteCard={handleDeleteCard}
              cardId={card._id}
            />
          ))
        )}
      </CardContainer>
    </DeckListContainer>
  );
};

CardList.propTypes = {
  slug: PropTypes.string.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  handleDeleteCard: PropTypes.func.isRequired,
  deckDate: PropTypes.string.isRequired,
  currentDeck: PropTypes.shape({
    __v: PropTypes.number,
    _id: PropTypes.string,
    cards: PropTypes.array,
    createdAt: PropTypes.string,
    name: PropTypes.string,
    slug: PropTypes.string,
    updateAt: PropTypes.string,
  }).isRequired,
};

export default CardList;
