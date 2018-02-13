import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import styled, { injectGlobal } from "styled-components";
import { connect } from "react-redux";
import * as actions from "./actions";

import { BrowserRouter as Router } from "react-router-dom";

/* Components */
import Nav from "./components/Nav";
import DeckList from "./components/DeckList";
import CardList from "./components/CardList";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

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

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      // render only when user is fetched
      if (!auth.isFetching) {
        return auth.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }
      return <div>Loading...</div>
    }}
  />
);

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <div>
          <Nav handleLogout={this.handleLogout} />
          <Container>
            <Route exact path="/" component={Home} />
            {/* <Route
              exact
              path="/decks"
              render={props =>
                !this.props.auth.loggedIn ? (
                  <Redirect to="/" />
                ) : (
                  <DeckList {...props} />
                )
              }
            /> */}
            <PrivateRoute
              exact
              path="/decks"
              auth={this.props.auth}
              component={DeckList}
            />
            <Route exact path="/decks/:deckName" component={CardList} />
            <Route
              exact
              path="/login"
              render={props => (
                <Login history={props.history} handleLogin={this.handleLogin} />
              )}
            />
            <Route exact path="/signup" component={Signup} />
          </Container>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, actions)(App);
