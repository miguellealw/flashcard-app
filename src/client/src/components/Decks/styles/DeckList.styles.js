import styled from "styled-components";

export const DeckListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-weight: bold;
  text-transform: uppercase;
  margin: 5rem 0;
  // letter-spacing: 5px;
`;

export const DeckContainer = styled.ul`
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

export const Header = styled.div`
  width: 100%;
  // background: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewDeckButton = styled.button`
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

export const EmptyDeckMessage = styled.p`
  color: #ccc;
`;
