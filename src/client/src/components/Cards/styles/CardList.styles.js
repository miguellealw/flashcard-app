import styled from "styled-components";

export const DeckListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  // background: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NewCardButton = styled.button`
  padding: 0.7rem 2.5rem;
  border-radius: 10rem;
  // border: 0.1rem solid black;
  border: none;
  cursor: pointer;
  background: black;
  color: white;
  transition: all 0.3s ease;
  outline: none;
  &:hover {
    // transform: translateY(-.2rem);
    // box-shadow: 0px 5px .5rem rgba(0,0,0,.3);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }
`;

export const StudyButton = styled.button`
  padding: 0.7rem 2.5rem;
  border-radius: 10rem;
  border: none;
  cursor: pointer;
  // background: #45e6b5;
  background: linear-gradient(to bottom, #68cff2 0%, #44ffc7 100%);
  color: white;
  transition: all 0.3s ease;
  margin-right: 1rem;
  outline: none;
  &:hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }
  &:disabled,
  &[disabled] {
    background: #eee;
    color: #fff;
    cursor: not-allowed;
    &:hover {
      box-shadow: initial;
      transform: initial;
    }
  }
`;

export const ButtonContainers = styled.div`
  display: flex;
`;

export const Title = styled.h2`
  font-weight: bold;
  text-transform: uppercase;
  margin: 5rem 0;
  // letter-spacing: 3px;
  display: flex;
  align-items: flex-end;
`;

export const CardContainer = styled.ul`
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

export const NoCardsMessage = styled.span`
  color: #ccc;
`;

export const DeckTimestamp = styled.span`
  text-transform: none;
  color: #ccc;
  font-weight: 300;
  font-size: 0.6em;
  letter-spacing: initial;
  margin-left: 1rem;
`;
