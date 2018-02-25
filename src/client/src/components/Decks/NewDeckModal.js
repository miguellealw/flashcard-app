import React from "react";
import Modal from "react-modal";
import MdClose from "react-icons/lib/md/close";
import MdAddCircle from "react-icons/lib/md/add-circle";
import {
  CloseButton,
  AddButton,
  Title,
  Input,
  ModalStyles,
} from "./styles/NewDeckModal.styles";

const NewDeckModal = ({
  showModal,
  handleCloseModal,
  handleAfterOpenModal,
  handleChange,
  handleCreateDeck,
  deckName,
}) => (
  <Modal
    isOpen={showModal}
    onAfterOpen={() => handleAfterOpenModal(this.deckNameInput)}
    onRequestClose={this.handle}
    style={ModalStyles}
    appElement={document.getElementById("root")}
  >
    <Title>New Deck Name</Title>
    <Input
      type="text"
      placeholder="Deck Name"
      name="deckName"
      innerRef={deckName => (this.deckNameInput = deckName)}
      onChange={handleChange}
    />
    <CloseButton onClick={handleCloseModal}>
      <MdClose />
    </CloseButton>

    <AddButton onClick={async () => await handleCreateDeck(deckName)}>
      <MdAddCircle />
    </AddButton>
  </Modal>
);

export default NewDeckModal;
