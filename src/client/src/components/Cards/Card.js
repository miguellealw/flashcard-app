/* Component */
import React, { Fragment } from "react";
import {
  CardContainer,
  CardFront,
  CardBack,
  DeleteButton,
} from "./styles/Card.styles.js";

const Card = ({ front, back, handleDeleteCard, cardId }) => {
  return (
    <Fragment>
      <CardContainer>
        <DeleteButton onClick={() => handleDeleteCard(cardId)}>
          Delete Card
        </DeleteButton>
        <CardFront>{front}</CardFront>
        <CardBack>{back}</CardBack>
      </CardContainer>
    </Fragment>
  );
};

export default Card;
