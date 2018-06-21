/* Component */
import React, { Component } from 'react';
import {
  DeckInfo,
  DeckContainer,
  UpdateInput,
  DeckImg,
  UpdateButton,
  DeleteButton,
  CancelButton,
  ButtonContainer,
} from './styles/Deck.styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import reduxActions from '../../actions';
import FA from 'react-fontawesome';
import { fetchImage } from '../../helpers';

class Deck extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    cardAmount: PropTypes.number.isRequired,
    handleDeleteDeck: PropTypes.func.isRequired,
    imgUrl: PropTypes.string,
    match: PropTypes.object.isRequired,
    deckId: PropTypes.string.isRequired,
    toggleEditing: PropTypes.func,
    isEditing: PropTypes.bool,
    inputDeckName: PropTypes.string,
  };

  state = {
    name: this.props.name,
    imageUrl: '',
    isEditing: false,
  };

  componentDidMount() {
    this.setState({ imageUrl: fetchImage() });
  }

  toggleEditing = () => {
    this.setState(({ isEditing }) => ({ isEditing: !isEditing }));
  };

  isNewName = () => this.state.name !== this.props.name;
  isNameEmpty = () => this.state.name.trim() === '';

  /* 
  <========================================>
    Handlers
  <========================================>
  */
  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleEditDeckClick = async e => {
    e.preventDefault();
    if (this.isNewName()) {
      await this.props.handleUpdateDeck(this.props.deckSlug, this.state.name);
      if (this.isNameEmpty()) return;
    }
    this.toggleEditing();
  };

  handleCancelClick = e => {
    e.preventDefault();
    // reset deck name to inital name
    this.setState({ name: this.props.name });
    this.toggleEditing();
  };

  handleInputClick = e => {
    e.preventDefault();
  };

  render() {
    const {
      name,
      cardAmount,
      handleDeleteDeck,
      handleOpenConfirmationModal,
      // imgUrl,
      // match,
      deckId,
      setDeckToDelete,
    } = this.props;
    return (
      <DeckContainer>
        <DeckImg>
          <img src={this.state.imageUrl} alt="Deck Img" />
        </DeckImg>
        <DeckInfo>
          {this.state.isEditing ? (
            <UpdateInput
              onChange={this.handleChange}
              value={this.state.name}
              onClick={this.handleInputClick}
              autoFocus
            />
          ) : (
            <h3>{name}</h3>
          )}

          <p>
            {cardAmount} {cardAmount === 1 ? 'Card' : 'Cards'}
          </p>
          <ButtonContainer>
            {this.state.isEditing && (
              <CancelButton onClick={this.handleCancelClick}>
                Cancel
              </CancelButton>
            )}
            <UpdateButton onClick={this.handleEditDeckClick}>
              <FA
                name={!this.state.isEditing ? 'pencil-square-o' : 'check'}
                size="2x"
              />
            </UpdateButton>

            <DeleteButton
              onClick={e => {
                e.preventDefault();
                setDeckToDelete(deckId)
                handleOpenConfirmationModal();
              }}
            >
              <FA name="minus-square-o" size="2x" />
            </DeleteButton>
          </ButtonContainer>
        </DeckInfo>
      </DeckContainer>
    );
  }
}

export default Deck;
