import React, { Component } from "react";
import { connect } from "react-redux";
// import * as actions from "../actions";
import moment from "moment";

/* Components */
import NewCardModal from "../components/Cards/NewCardModal";
import CardList from "../components/Cards/CardList";

/* Redux Actions */
// import { clearErrors, createCard, fetchDecks } from "../actions";
import reduxActions from "../actions";

class CardPage extends Component {
  state = {
    card: {
      front: "",
      back: "",
    },
    showModal: false,
    currentDeck: () =>
      this.props.decks.find(
        deck => deck.slug === this.props.match.params.deckName,
      ),
    deckSlug: this.props.match.params.deckName,
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.props.clearErrors();
    this.setState({ showModal: false });
  };

  handleCreateCard = async (front, back) => {
    // if(this.props.errors) return
    const slug = this.props.match.params.deckName;
    // await create card to get errors stored, if any
    await this.props.createCard(slug, front, back);

    // close modal and clear inputs if no errors
    if (!this.props.errors.errorMessage) {
      this.setState({ ...this.state, card: { front: "", back: "" } });
      this.handleCloseModal();
    }
  };

  async componentDidMount() {
    if (this.props.decks.length === 0) {
      // fetch decks if deck is not stored in store
      await this.props.fetchDecks();
    }
  }

  handleChange = e => {
    this.setState({
      card: { ...this.state.card, [e.target.name]: e.target.value },
    });
  };

  render() {
    const slug = this.props.match.params.deckName;
    const deckDate = moment(this.state.currentDeck.createdAt).format(
      "MMM DD, YYYY",
    );
    return (
      <div>
        {this.props.decks.length !== 0 && (
          <CardList
            slug={slug}
            decks={this.props.decks}
            handleOpenModal={this.handleOpenModal}
            currentDeck={this.state.currentDeck()}
            deckDate={deckDate}
          />
        )}
        <NewCardModal
          showModal={this.state.showModal}
          card={this.state.card}
          handleCloseModal={this.handleCloseModal}
          handleChange={this.handleChange}
          handleCreateCard={this.handleCreateCard}
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
  fetchDecks: reduxActions.fetchDecks,
})(CardPage);
