import React, { Component } from "react";
import Card from "./Card";

export default class CardList extends Component {
  render() {
    return <div>
        <h2>Deck Name</h2>
        {/* <p>{this.props.match.params.deckName}</p> */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>;
  }
}
