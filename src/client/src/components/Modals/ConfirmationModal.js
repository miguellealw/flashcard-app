import React, { Component } from 'react';
import Modal from 'react-modal';
import MdClose from 'react-icons/lib/md/close';
import {
  CloseButton,
  ModalStyles,
  OptionButtonYes,
  OptionButtonNo,
  OptionButtonContainer,
} from '../Modals/styles/ConfirmationModal.styles';

const ConfirmationModal = ({
  showConfirmationModal,
  handleCloseModal,
  shouldDelete,
  message,
  deckToDelete,
  handleDeleteDeck,
}) => (
  <Modal isOpen={showConfirmationModal} style={ModalStyles}>
    <CloseButton onClick={handleCloseModal}>
      <MdClose />
    </CloseButton>
    <h3>{message}</h3>
    <OptionButtonContainer>
      <OptionButtonYes onClick={handleDeleteDeck(deckToDelete)}>
        Yes
      </OptionButtonYes>
      <OptionButtonNo onClick={handleCloseModal}>No</OptionButtonNo>
    </OptionButtonContainer>
  </Modal>
);

export default ConfirmationModal;
