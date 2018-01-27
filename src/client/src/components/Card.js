import React from "react";
import styled from "styled-components";

// const CardStyle = styled.div`
//   width: 400px;
//   height: 250px;
//   background: gray;
//   margin-bottom: 1.5rem;
// `;

const CardStyle = styled.div`
  position: relative;
  background: #eee;
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 5rem;
  border-radius: 3%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

const Card = () => {
  return (
    <div>
      <CardStyle />
    </div>
  );
};

export default Card;

