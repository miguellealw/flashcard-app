import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  // background: #989898;
  background: whitesmoke;
  width: 400px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  transition: all 0.2s ease-out;
  cursor: pointer;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
  & div img {
    filter: grayscale(100%) blur(1px);
  }
  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
    & div img {
      filter: grayscale(0%) blur(0px);
    }
  }
`;

export const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 0.8em;
  background: white;
  padding: 1em 1em;
  color: black;
  & h3 {
    margin: 0.5em 0;
    color: black;
  }
  // & p {
  //   color: black;
  //   display: inline-block;
  //   margin-bottom: 0.5em;
  // }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  & img {
    transition: all 0.3s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const CardIcon = styled.button`
  background: none;
  border: none;
  color: #ccc;
  margin: 0 0.5em;
  cursor: pointer;
  position: relative;
  &:hover {
    color: black;
  }

  &:hover::after {
    opacity: 1;
  }

  &::after {
    content: '${props => props.name}';
    display: ${props => !!!props.name && 'none'};
    font-size: 0.7rem;
    opacity: 0;
    position: absolute;
    color: white;
    top: 2.8em;
    left: 0em;
    padding: 1em;
    background: #1b1b1b;
    border-radius: 3px;
    z-index: 2;
  }
`;
