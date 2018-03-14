import React, { Component, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import styled, { injectGlobal } from "styled-components";
import { connect } from "react-redux";
import Spinner from "react-spinkit";
import "./global.styles";

import { BrowserRouter as Router } from "react-router-dom";

import reduxActions from "./actions";

/* Components */
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import FlashMessage from "./components/Widgets/FlashMessage";

/* Containers */
import LoginPage from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";
import DeckPage from "./containers/DeckPage";
import CardPage from "./containers/CardPage";
// import flash from "./reducers/flashReducer";
// import FlashMessage from './components/Widgets/FlashMessage'

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  // background: #ccc;
`;

const Loading = styled.div`
  width: 100;
  // height: calc(100vh - 5.5rem);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrivateRoute = ({
  component: Component,
  auth,
  redirectUrl,
  isGuest,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      // render only when user is fetched
      if (auth.isFetching)
        return (
          <Loading>
            <Spinner name="ball-scale-multiple" color="#45e6b5" />
          </Loading>
        );
      return auth.loggedIn === isGuest ? (
        <Component {...props} />
      ) : (
        <Redirect to={redirectUrl} />
      );
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
        <Fragment>
          <Nav auth={this.props.auth} logoutUser={this.props.logoutUser} />
          <FlashMessage />
          <Container>
            <PrivateRoute
              exact
              path="/"
              auth={this.props.auth}
              isGuest={false}
              redirectUrl={"/decks"}
              component={Home}
            />
            <PrivateRoute
              exact
              path="/decks"
              auth={this.props.auth}
              isGuest={true}
              redirectUrl={"/login"}
              component={DeckPage}
            />
            <PrivateRoute
              exact
              path="/decks/:deckName"
              auth={this.props.auth}
              isGuest={true}
              redirectUrl={"/login"}
              component={CardPage}
            />
            <PrivateRoute
              path="/login"
              auth={this.props.auth}
              isGuest={false}
              redirectUrl={"/decks"}
              component={props => (
                <LoginPage
                  history={props.history}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <PrivateRoute
              path="/signup"
              auth={this.props.auth}
              isGuest={false}
              redirectUrl={"/decks"}
              component={SignupPage}
            />
          </Container>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ auth, flash }) => ({ auth, flash });

export default connect(mapStateToProps, {
  fetchUser: reduxActions.fetchUser,
  logoutUser: reduxActions.logoutUser,
})(App);
