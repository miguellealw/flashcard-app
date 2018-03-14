/* Component */
import React, { Fragment } from "react";
import {
  CardContainer,
  CardFront,
  CardBack,
  DeleteButton,
} from "./styles/Card.styles.js";
import PropTypes from "prop-types";

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

Card.propTypes = {
  front: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired,
  handleDeleteCard: PropTypes.func.isRequired,
  cardId: PropTypes.string.isRequired,
};

export default Card;
