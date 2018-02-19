import React from "react";
import Modal from "react-modal";
import MdClose from "react-icons/lib/md/close";
import MdAddCircle from "react-icons/lib/md/add-circle";
import styled from "styled-components";

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  color: #ccc;
  svg {
    width: 2em;
    height: 2em;
  }
  &:hover {
    color: black;
    // transform: scale(1.2);
  }
`;
const AddButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #ccc;
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
const Title = styled.h2`
  font-size: 3em;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;
const Input = styled.input`
  padding: 0.8rem 0;
  text-indent: 1rem;
  border: 2px solid #ddd;
  border-radius: 50rem;
  width: 25rem;
  transition: all 0.3s ease-in-out;
  &:hover,
  &:focus {
    border-color: #bbb;
  }
`;

const NewDeckModal = ({
  showModal,
  handleCloseModal,
  handleChange,
  addDeck,
  deckName
}) => (
  <Modal
    isOpen={showModal}
    style={{
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
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
      },
    }}
  >
    <Title>New Deck Name</Title>
    <Input
      type="text"
      placeholder="Deck Name"
      name="deckName"
      onChange={handleChange}
    />
    <CloseButton onClick={() => handleCloseModal()}>
      <MdClose />
    </CloseButton>

    <AddButton
      onClick={() =>
        addDeck({
          name: deckName,
          cardAmount: "26",
          slug: "deck-7",
          imgUrl: "https://source.unsplash.com/1600x900/?summer",
        })
      }
    >
      <MdAddCircle />
    </AddButton>
  </Modal>
);

export default NewDeckModal;
