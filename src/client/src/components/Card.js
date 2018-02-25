/* Component */
import React from "react";
import styled from "styled-components";
import { slideFromBottom } from "./animations/index";

// const CardStyle = styled.div`
//   width: 400px;
//   height: 250px;
//   background: gray;
//   margin-bottom: 1.5rem;
// `;

const CardContainer = styled.div`
  position: relative;
  width: 400px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  border-radius: 3%;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  filter: drop-shadow(0 0.2rem 0.5rem rgba(0, 0, 0, 0.2));
  perspective: 850px;
  animation: ${slideFromBottom} 0.3s ease-in-out;
  // &:hover {
  //   filter: drop-shadow(0 0.2rem 0.5rem rgba(0, 0, 0, 0.2));

  //   // Front Side
  //   & span {
  //     transform: rotateY(-180deg);
  //   }
  //   // Back Side
  //   & div {
  //     transform: rotateY(0deg);
  //   }
  // }
`;

const CardFront = styled.span`
  // background: red;
  background: #eee;
  transition: all 0.5s ease-in-out;
  backface-visibility: hidden;
  transform: rotateY(0deg);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardBack = styled.div`
  // background: pink;
  background: #eee;
  transition: all 0.5s ease-in-out;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = ({ front, back }) => {
  return (
    <CardContainer>
      <CardFront>{front}</CardFront>
      <CardBack>{back}</CardBack>
    </CardContainer>
  );
};

export default Card;
