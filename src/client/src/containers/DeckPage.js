import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Components */
import DeckList from '../components/Decks/DeckList';
import NewDeckModal from '../components/Decks/NewDeckModal';
import Card from '../components/Theme/Card/Card';
import ConfirmationModal from '../components/Modals/ConfirmationModal';

/* Redux Actions */
import reduxActions from '../actions';

class DeckPage extends Component {
  state = {
    showNewDeckModal: false,
    showConfirmationModal: false,
    deckName: '',
    deckToDelete: '',
  };

  async componentDidMount() {
    await this.props.fetchDecks();
  }

  setDeckToDelete = deckId => {
    this.setState({ deckToDelete: deckId });
  };

  /* 
  <========================================>
    Modal Handlers
  <========================================>
  */
  handleOpenModal = modal => () => {
    this.setState({ [modal]: true });
  };

  handleCloseModal = modal => () => {
    this.setState({ [modal]: false, deckToDelete: '' });
  };

  handleAfterOpenModal = deckNameInput => {
    deckNameInput.focus();
  };

  /* 
  <========================================>
    Deck Handlers
  <========================================>
  */
  handleCreateDeck = deckName => e => {
    e.preventDefault();
    this.props.createDeck(deckName, this.state.isCreatingDeck);
    if (deckName.trim() !== '') {
      this.handleCloseModal('showNewDeckModal')();
    }
  };

  handleDeleteDeck = deckId => e => {
    // stop deck from going to cards page
    e.preventDefault();
    // this.handleOpenModal('showConfirmationModal')();
    this.props.deleteDeck(deckId);
    this.handleCloseModal('showConfirmationModal')();
    this.setState({ deckToDelete: '' });
  };

  handleUpdateDeck = (deckSlug, newName) => {
    this.props.updateDeck(deckSlug, newName);
  };

  /* 
  <========================================>
    Other Handlers
  <========================================>
  */
  handleChange = e => {
    this.setState({ deckName: e.target.value });
  };

  render() {
    return (
      <div>
        <DeckList
          decks={this.props.decks.allDecks}
          addDeck={this.addDeck}
          match={this.props.match}
          inputDeckName={this.state.deckName}
          handleOpenNewDeckModal={this.handleOpenModal('showNewDeckModal')}
          handleOpenConfirmationModal={this.handleOpenModal(
            'showConfirmationModal',
          )}
          handleDeleteDeck={this.handleDeleteDeck}
          handleUpdateDeck={this.props.updateDeck}
          handleChange={this.handleChange}
          isFetched={this.props.decks.isFetched}
          setDeckToDelete={this.setDeckToDelete}
        />

        {/* DECK MODALS */}
        <NewDeckModal
          showNewDeckModal={this.state.showNewDeckModal}
          handleCloseModal={this.handleCloseModal('showNewDeckModal')}
          handleAfterOpenModal={this.handleAfterOpenModal}
          handleChange={this.handleChange}
          deckName={this.state.deckName}
          handleCreateDeck={this.handleCreateDeck}
          inputDeckName={this.state.inputDeckName}
        />

        <ConfirmationModal
          message="Are You Sure You Want to Delete This Deck?"
          showConfirmationModal={this.state.showConfirmationModal}
          handleCloseModal={this.handleCloseModal('showConfirmationModal')}
          handleDeleteDeck={this.handleDeleteDeck}
          deckToDelete={this.state.deckToDelete}
        />
      </div>
    );
  }
}

const mapState = ({ decks, user }) => ({
  decks,
  user,
});

export default connect(mapState, {
  fetchDecks: reduxActions.fetchDecks,
  createDeck: reduxActions.createDeck,
  deleteDeck: reduxActions.deleteDeck,
  fetchUser: reduxActions.fetchUser,
  updateDeck: reduxActions.updateDeck,
})(DeckPage);
