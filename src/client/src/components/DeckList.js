import React from "react";
import Deck from "./Deck";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import axios from "axios";

const DeckListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-weight: bold;
  text-transform: uppercase;
  margin: 5rem 0;
  // letter-spacing: 5px;
`;

const DeckContainer = styled.ul`
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

const Header = styled.div`
  width: 100%;
  // background: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NewDeckButton = styled.button`
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

const EmptyDeckMessage = styled.p`
  color: #ccc;
`;

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
