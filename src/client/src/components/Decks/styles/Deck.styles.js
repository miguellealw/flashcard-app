import styled from 'styled-components';

export const DeckInfo = styled.div`
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
  & p {
    color: black;
    display: inline-block;
    margin-bottom: 0.5em;
  }
`;

export const DeckImg = styled.div`
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

export const UpdateInput = styled.input`
  padding: 0.5em 0;
  text-indent: 0.5em;
  margin-bottom: 0.5em;
  border: 1px solid #ccc;
  border-radius: 3px;
  display: block;
`;

const Button = styled.button`
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
    content: '';
    font-size: 0.7rem;
    opacity: 0;
    position: absolute;
    color: white;
    top: 5em;
    left: 0em;
    padding: 1em;
    background: #1b1b1b;
    border-radius: 3px;
    z-index: 2;
  }
`;

export const DeleteButton = Button.extend`
  &::after {
    content: 'Delete';
  }
`;

export const UpdateButton = Button.extend`
  &::after {
    content: 'Edit';
  }
`;

export const CancelButton = Button.extend`
  &::after {
    content: '';
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  margin-right: 0.5em;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
`;
