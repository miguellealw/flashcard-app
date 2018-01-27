import React, { Component } from "react";
import styled from "styled-components";

import Card from "./Card";

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

export default class CardList extends Component {
  render() {
    return (
      <DeckListContainer>
        <Title>Deck Name</Title>
        {/* <p>{this.props.match.params.deckName}</p> */}
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </DeckListContainer>
    );
  }
}
