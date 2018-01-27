import React from "react";
import styled from "styled-components";

const DeckInfo = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  
  background: #d9d9d9;
  border-bottom-right-radius: 3%;
  border-bottom-left-radius: 3%;
  padding: 1.5rem 1rem;
  box-shadow: 0 .5rem 5px rgba(0,0,0,1)
  
  & h3 {
    margin-bottom: .2rem;
  }

  & p {
    color: #aaa;
  }
`;

const DeckImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const DeckStyle = styled.div`
  position: relative;
  background: #989898;
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 5rem;
  border-radius: 3%;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
`;

const Deck = ({ name, cardAmount, imgUrl, match }) => {
  return (
    <DeckStyle>
      <DeckImg>
        <img src={imgUrl} alt="Deck Img"/>
      </DeckImg>
      <DeckInfo>
        <h3>{name}</h3>
        {/* <p>{match.params.deckName}</p> */}
        <p>{cardAmount} Cards</p>
      </DeckInfo>
    </DeckStyle>
  );
};

export default Deck;
    