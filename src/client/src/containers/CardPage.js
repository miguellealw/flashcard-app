import React, { Component } from "react";
import CardList from "../components/CardList";
import NewCardModal from "../components/NewCardModal";
import { connect } from "react-redux";
import * as actions from "../actions";
import moment from "moment";

class CardPage extends Component {
  state = {
    card: {
      front: "",
      back: "",
    },
    showModal: false,
    currentDeck: () => this.props.decks.find(
      deck => deck.slug === this.props.match.params.deckName,
    ),
    deckSlug: this.props.match.params.deckName,
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleCreateCard = (front, back) => {
    const slug = this.props.match.params.deckName;
    this.props.createCard(slug, front, back);
    this.handleCloseModal();
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
        />
      </div>
    );
  }
}

const mapStateToProps = ({ decks }) => ({ decks });

export default connect(mapStateToProps, actions)(CardPage);
