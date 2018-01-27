import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled, { injectGlobal } from "styled-components";

/* Components */
import Nav from "./components/Nav";
import DeckList from "./components/DeckList";
import CardList from "./components/CardList";
import Home from "./components/Home";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
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
          <Route exact path="/deck" component={DeckList} />
          <Route exact path="/deck/:deckName" component={CardList} />
        </Container>
      </div>
    );
  }
}

export default App;
