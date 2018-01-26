import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class extends Component {
  render() {
    return (
      <div>
        this is home
        <Link to="/deck">Decks</Link>
      </div>
    );
  }
}
