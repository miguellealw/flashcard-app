import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  width: 400px;
  height: 250px;
  background: gray;
  margin-bottom: 10px;
`;

const Card = () => {
  return (
    <div>
      <CardStyle />
    </div>
  );
};

export default Card;

// export default class Card extends Component {
//   render() {
//     return (
//     );
//   }
// }
