import React from "react";
import Modal from "react-modal";
import MdClose from "react-icons/lib/md/close";
import MdAddCircle from "react-icons/lib/md/add-circle";
import PropTypes from "prop-types";
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
  inputDeckName,
}) => (
  <Modal
    isOpen={showModal}
    onAfterOpen={() => handleAfterOpenModal(this.deckNameInput)}
    onRequestClose={this.handle}
    style={ModalStyles}
    appElement={document.getElementById("root")}
  >
    <Title>New Deck Name</Title>
    <form onSubmit={handleCreateDeck(deckName)}>
      <Input
        type="text"
        placeholder="Deck Name"
        name="deckName"
        innerRef={deckName => (this.deckNameInput = deckName)}
        onChange={handleChange}
      />
    </form>
    <CloseButton onClick={handleCloseModal}>
      <MdClose />
    </CloseButton>

    <AddButton onClick={handleCreateDeck(deckName)}>
      <MdAddCircle />
    </AddButton>
  </Modal>
);

NewDeckModal.proptTypes = {
  showModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleAfterOpenModal: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCreateDeck: PropTypes.func.isRequired,
  deckName: PropTypes.string.isRequired,
  inputDeckName: PropTypes.string,
};

export default NewDeckModal;
