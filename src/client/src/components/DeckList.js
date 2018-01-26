import React, { Component } from "react";
import Deck from "./Deck";
import { Link } from "react-router-dom";

const decks = [
  { name: "deck 1", cardAmount: "14", slug: "deck-1" },
  { name: "deck 2", cardAmount: "23", slug: "deck-2" },
  { name: "deck 3", cardAmount: "32", slug: "deck-3"},
  { name: "deck 4", cardAmount: "25", slug: "deck-4"},
  { name: "deck 5", cardAmount: "26", slug: "deck-5"},
];

export default class DeckList extends Component {
  renderDecks = () => {
    return decks.map(deck => (
      <Link to={`${this.props.match.url}/${deck.slug}`}>
        <Deck name={deck.name} cardAmount={deck.cardAmount} />
      </Link>
    ));
  };

  render() {
    return (
      <div>
        <h2>Your Decks</h2>
        {this.renderDecks()}
      </div>
    );
  }
}
