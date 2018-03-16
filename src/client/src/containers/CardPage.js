import React, { Component } from "react";
import { connect } from "react-redux";
// import * as actions from "../actions";
import moment from "moment";

/* Components */
import NewCardModal from "../components/Cards/NewCardModal";
import CardList from "../components/Cards/CardList";

/* Redux Actions */
import reduxActions from "../actions";

class CardPage extends Component {
  state = {
    card: {
      front: "",
      back: "",
    },
    showModal: false,
    deckSlug: this.props.match.params.deckName,
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleAfterOpenModal = field => {
    field.focus();
  };

  handleCloseModal = () => {
    this.props.clearErrors();
    this.setState({ showModal: false });
  };

  handleCreateCard = async (front, back) => {
    // if(this.props.errors) return
    await this.props.createCard(this.state.deckSlug, front, back);
    if (front.trim() !== "" && back.trim() !== "") {
      this.setState({ ...this.state, card: { front: "", back: "" } });
      this.handleCloseModal();
    }
    // close modal and clear inputs if no errors
    // await create card to get errors stored, if any
    // if (!this.props.errors.errorMessage) {
    // }
  };

  handleDeleteCard = async cardId => {
    await this.props.deleteCard(this.state.deckSlug, cardId);
  };

  async componentDidMount() {
    // if (!this.props.decks.isFetched) {
    // fetch decks if deck is not stored in store
    // }
    await this.props.fetchDecks();
    this.props.getCurrentDeck(this.state.deckSlug);
  }

  componentWillUnmount() {
    this.props.clearCurrentDeck();
  }

  handleChange = e => {
    this.setState({
      card: { ...this.state.card, [e.target.name]: e.target.value },
    });
  };

  render() {
    const slug = this.props.match.params.deckName;
    let deckDate;
    if (this.props.decks.currentDeck) {
      deckDate =
        this.props.decks.currentDeck &&
        moment(this.props.decks.currentDeck.createdAt).format("MMM DD, YYYY");
    }

    return (
      <div>
        {/* check if decks array is empty */}
        {this.props.decks.allDecks.length !== 0 &&
          this.props.decks.currentDeck && (
            <CardList
              slug={slug}
              decks={this.props.decks.allDecks}
              handleOpenModal={this.handleOpenModal}
              handleDeleteCard={this.handleDeleteCard}
              currentDeck={this.props.decks.currentDeck}
              deckDate={deckDate}
            />
          )}
        <NewCardModal
          showModal={this.state.showModal}
          card={this.state.card}
          handleCloseModal={this.handleCloseModal}
          handleChange={this.handleChange}
          handleCreateCard={this.handleCreateCard}
          handleAfterOpenModal={this.handleAfterOpenModal}
          errors={this.props.errors}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ decks, errors }) => ({ decks, errors });

export default connect(mapStateToProps, {
  clearErrors: reduxActions.clearErrors,
  createCard: reduxActions.createCard,
  deleteCard: reduxActions.deleteCard,
  fetchDecks: reduxActions.fetchDecks,
  getCurrentDeck: reduxActions.getCurrentDeck,
  clearCurrentDeck: reduxActions.clearCurrentDeck,
})(CardPage);
