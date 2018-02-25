import styled from "styled-components";
import { fadeIn } from "../../animations";

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
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
export const AddButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #ccc;
  // margin-bottom: 3rem;
  outline: none;
  svg {
    width: 5em;
    height: 5em;
  }
  &:hover {
    color: black;
  }
  &:focus {
    outline: none;
  }
`;

export const Title = styled.h2`
  font-size: 3em;
  margin: 2rem 0;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

export const CardInputsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 3rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  margin-bottom: 0.6rem;
  color: #ccc;
`;

export const FrontSideInput = styled.textarea`
  padding: 0.8rem 0;
  text-indent: 1rem;
  border: 2px solid #ddd;
  // border-radius: 50rem;
  max-width: 25rem;
  min-width: 25rem;
  max-height: 13rem;
  min-height: 13rem;
  outline: none;
  // transition: all 0.3s ease-in-out;
  &:hover,
  &:focus {
    border-color: #bbb;
  }
`;

export const BackSideInput = styled.textarea`
  padding: 0.8rem 0;
  text-indent: 1rem;
  border: 2px solid #ddd;
  outline: none;
  // border-radius: 50rem;
  max-width: 25rem;
  min-width: 25rem;
  max-height: 13rem;
  min-height: 13rem;

  // transition: all 0.3s ease-in-out;
  &:hover,
  &:focus {
    border-color: #bbb;
  }
`;

export const ErrorMessage = styled.span`
  color: white;
  background: #dc3545;
  border-radius: 0.2rem;
  padding: 0.5rem 1.5rem;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const ModalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,.8)",
  },
  content: {
    top: "80px",
    left: "200px",
    right: "200px",
    bottom: "80px",
    borderRadius: "10px",
    display: "flex",
    // justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },
};