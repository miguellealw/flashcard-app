import React, { Component } from "react";
// import Modal from '../components/Modal'
import { connect } from "react-redux";

/* Components */
import DeckList from "../components/Decks/DeckList";
import NewDeckModal from "../components/Decks/NewDeckModal";

/* Redux Actions */
// import { fetchDecks, createDeck } from "../actions";
import reduxActions from "../actions";

class DeckPage extends Component {
  state = {
    showModal: false,
  };

  async componentDidMount() {
    await this.props.fetchDecks();
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleAfterOpenModal = deckNameInput => {
    deckNameInput.focus();
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleCreateDeck = deckName => {
    this.props.createDeck(deckName);
    this.handleCloseModal();
  };

  handleChange = e => {
    // console.log(e.target.value);
    this.setState({ deckName: e.target.value });
  };

  render() {
    return (
      <div>
        <DeckList
          decks={this.props.decks}
          addDeck={this.addDeck}
          match={this.props.match}
          handleOpenModal={this.handleOpenModal}
          handleCloseModal={this.handleCloseModal}
        />
        <NewDeckModal
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          handleChange={this.handleChange}
          deckName={this.state.deckName}
          handleCreateDeck={this.handleCreateDeck}
          handleAfterOpenModal={this.handleAfterOpenModal}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ decks, user }) => ({
  decks,
  user,
});

export default connect(mapStateToProps, {
  fetchDecks: reduxActions.fetchDecks,
  createDeck: reduxActions.createDeck,
})(DeckPage);
