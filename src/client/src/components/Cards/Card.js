/* Component */
import React from "react";
import { CardContainer, CardFront, CardBack } from "./styles/Card.styles.js";

const Card = ({ front, back }) => {
  return (
    <CardContainer>
      <CardFront>{front}</CardFront>
      <CardBack>{back}</CardBack>
    </CardContainer>
  );
};

export default Card;
