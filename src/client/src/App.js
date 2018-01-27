import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled, { injectGlobal } from "styled-components";

/* Components */
import Nav from "./components/Nav";
import DeckList from "./components/DeckList";
import CardList from "./components/CardList";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from './components/Signup'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    // background: #eee;
  }
`;

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  // background: #ccc;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container>
          <Route exact path="/" component={Home} />
          <Route exact path="/decks" component={DeckList} />
          <Route exact path="/decks/:deckName" component={CardList} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Container>
      </div>
    );
  }
}

export default App;
