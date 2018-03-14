import React from "react";
import Modal from "react-modal";
import MdClose from "react-icons/lib/md/close";
import MdAddCircle from "react-icons/lib/md/add-circle";
import {
  CloseButton,
  AddButton,
  Title,
  CardInputsContainer,
  InputContainer,
  InputLabel,
  FrontSideInput,
  BackSideInput,
  ModalStyles,
} from "./styles/NewCardModal.styles";

import PropTypes from "prop-types";

const NewCardInputs = ({ handleChange }) => (
  <CardInputsContainer>
    <InputContainer>
      <InputLabel htmlFor="">Front Side:</InputLabel>
      <FrontSideInput
        type="text"
        name="front"
        // innerRef={deckName => (this.deckNameInput = deckName)}
        onChange={handleChange}
      />
    </InputContainer>

    <InputContainer>
      <InputLabel htmlFor="">Back Side:</InputLabel>
      <BackSideInput
        type="text"
        name="back"
        // innerRef={deckName => (this.deckNameInput = deckName)}
        onChange={handleChange}
      />
    </InputContainer>
  </CardInputsContainer>
);

const NewCardModal = ({
  showModal,
  handleCloseModal,
  handleAfterOpenModal,
  handleChange,
  handleCreateCard,
  card,
  errors,
}) => (
  <Modal
    isOpen={showModal}
    onRequestClose={this.handleCloseModal}
    style={ModalStyles}
    appElement={document.getElementById("root")}
  >
    <Title>New Cards</Title>
    {/* {errors.errorMessage && <ErrorMessage>{errors.errorMessage}</ErrorMessage>} */}
    <NewCardInputs handleChange={handleChange} />

    <CloseButton onClick={handleCloseModal}>
      <MdClose />
    </CloseButton>

    <AddButton
      onClick={async () => await handleCreateCard(card.front, card.back)}
    >
      <MdAddCircle />
    </AddButton>
  </Modal>
);

NewCardInputs.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

NewCardModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleAfterOpenModal: PropTypes.func,
  handleChange: PropTypes.func.isRequired,
  handleCreateCard: PropTypes.func.isRequired,
  card: PropTypes.shape({
    front: PropTypes.string.isRequired,
    back: PropTypes.string.isRequired,
  }).isRequired,
  // errors,
};

export default NewCardModal;
