import React from "react";
import styled from "styled-components";

const DeckInfo = styled.div`
  box-sizing: border-box;
  background: #d9d9d9;
  border-bottom-right-radius: 3%;
  border-bottom-left-radius: 3%;
  padding: 0 1rem;
`;

const DeckStyle = styled.div`
  background: #989898;
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
  border-radius: 3%;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
`;

const Deck = ({ name, cardAmount, match }) => {
  return (
    <DeckStyle>
      <DeckInfo>
        <h3>{name}</h3>
        {/* <p>{match.params.deckName}</p> */}
        <p>{cardAmount} Cards</p>
      </DeckInfo>
    </DeckStyle>
  );
};

export default Deck;
    