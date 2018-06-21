import styled from 'styled-components';

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.6em;
  color: #ccc;
  outline: none;
  svg {
    width: 2em;
    height: 2em;
  }
  &:hover {
    color: black;
    // transform: scale(1.2);
  }
`;

export const OptionButtonContainer = styled.div``;

const OptionButton = styled.button`
  border: none;
  background: black;
  width: 4em;
  height: 2em;
  border-radius: 0.2em;
  cursor: pointer;
  color: white;

  &:hover {
    background: #333;
  }
`;

export const OptionButtonYes = OptionButton.extend`
  margin-right: 1em;  
`;

export const OptionButtonNo = OptionButton.extend``;

export const ModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,.8)',
  },
  content: {
    top: '20em',
    bottom: '20em',
    left: '30em',
    right: '30em',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
};
