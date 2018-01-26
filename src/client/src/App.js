import React, { Component } from "react";
import { Route } from "react-router-dom";

/* Components */
import Nav from "./components/Nav";
import DeckList from "./components/DeckList";
import CardList from "./components/CardList";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/deck" component={DeckList} />
        <Route exact path="/deck/:deckName" component={CardList} />
      </div>
    );
  }
}

export default App;
