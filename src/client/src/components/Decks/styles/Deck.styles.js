import styled from 'styled-components'


export const DeckInfo = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;

  background: #fff;
  // border-bottom-right-radius: 3%;
  // border-bottom-left-radius: 3%;
  padding: 1rem 1rem;
  // box-shadow: 0 -1rem 10px rgba(0, 0, 0, .3);
  & h3 {
    margin-bottom: 0.2rem;
  }
  & p {
    color: #aaa;
  }
`;

// const DeckImg = styled.div`
//   width: 100%;
//   height: 100%;
//   // border-radius: 3%;
//   overflow: hidden;
//   & img {
//     transition: all 0.3s ease;
//     width: 100%;
//     height: 100%;
//     &:hover {
//     }
//   }
// `;

export const DeckContainer = styled.div`
  position: relative;
  // background: #989898;
  background: whitesmoke;
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 5rem;
  // border-radius: 3%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
  & div img {
    filter: grayscale(100%) blur(1px);
  }
  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    & div img {
      filter: grayscale(0%) blur(0px);
    }
  }
`;
