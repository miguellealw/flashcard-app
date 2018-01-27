import React, { Component } from "react";
import Deck from "./Deck";
import { Link } from "react-router-dom";
import styled from "styled-components";

const decks = [
  {
    name: "deck 1",
    cardAmount: "14",
    slug: "deck-1",
    imgUrl: "https://source.unsplash.com/1600x900/?nature",
  },
  {
    name: "deck 2",
    cardAmount: "23",
    slug: "deck-2",
    imgUrl: "https://source.unsplash.com/1600x900/?water",
  },
  {
    name: "deck 3",
    cardAmount: "32",
    slug: "deck-3",
    imgUrl: "https://source.unsplash.com/1600x900/?night",
  },
  {
    name: "deck 4",
    cardAmount: "25",
    slug: "deck-4",
    imgUrl: "https://source.unsplash.com/1600x900/?architecture",
  },
  {
    name: "deck 5",
    cardAmount: "26",
    slug: "deck-5",
    imgUrl: "https://source.unsplash.com/1600x900/?rain",
  },
  {
    name: "deck 6",
    cardAmount: "23",
    slug: "deck-6",
    imgUrl: "https://source.unsplash.com/1600x900/?winter",
  },
  {
    name: "deck 7",
    cardAmount: "26",
    slug: "deck-7",
    imgUrl: "https://source.unsplash.com/1600x900/?summer",
  },
];

const DeckListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-weight: bold;
  text-transform: uppercase;
  margin: 5rem 0;
  letter-spacing: 5px;
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

export default class DeckList extends Component {
  renderDecks = () => {
    return decks.map((deck, i) => (
      <li key={i}>
        <Link to={`${this.props.match.url}/${deck.slug}`}>
          <Deck
            name={deck.name}
            cardAmount={deck.cardAmount}
            imgUrl={deck.imgUrl}
          />
        </Link>
      </li>
    ));
  };

  render() {
    return (
      <DeckListContainer>
        <Title>Your Decks</Title>
        <DeckContainer>{this.renderDecks()}</DeckContainer>
      </DeckListContainer>
    );
  }
}
