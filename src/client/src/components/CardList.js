/* Component */
import React from "react";
import styled from "styled-components";
import moment from "moment";

import Card from "./Card";

const DeckListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  // background: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NewCardButton = styled.button`
  padding: 0.7rem 2.5rem;
  border-radius: 10rem;
  // border: 0.1rem solid black;
  border: none;
  cursor: pointer;
  background: black;
  color: white;
  transition: all 0.3s ease;
  outline: none;
  &:hover {
    // transform: translateY(-.2rem);
    // box-shadow: 0px 5px .5rem rgba(0,0,0,.3);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }
`;

const StudyButton = styled.button`
  padding: 0.7rem 2.5rem;
  border-radius: 10rem;
  border: none;
  cursor: pointer;
  background: #45e6b5;
  color: white;
  transition: all 0.3s ease;
  margin-right: 1rem;
  outline: none;
  &:hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }
  &:disabled,
  &[disabled] {
    background: #eee;
    color: #fff;
    cursor: not-allowed;
    &:hover {
      box-shadow: initial;
      transform: initial;
    }
  }
`;

const ButtonContainers = styled.div`
  display: flex;
`;

const Title = styled.h2`
  font-weight: bold;
  text-transform: uppercase;
  margin: 5rem 0;
  // letter-spacing: 3px;
  display: flex;
  align-items: flex-end;
`;

const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // width: 10%;
  & li {
    list-style: none;

    & a {
      color: black;
      text-decoration: none;
    }
  }
`;

const NoCardsMessage = styled.span`
  color: #ccc;
`

const DeckTimestamp = styled.span`
  text-transform: none;
  color: #ccc;
  font-weight: 300;
  font-size: 0.6em;
  letter-spacing: initial;
  margin-left: 1rem;
`;

const CardList = ({ decks, slug, handleOpenModal, currentDeck, deckDate }) => {
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
            <Card front={card.front} back={card.back} key={card._id} />
          ))
        )}
      </CardContainer>
    </DeckListContainer>
  );
};

export default CardList;
