import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import styled, { injectGlobal } from "styled-components";
import { connect } from "react-redux";
import Spinner from "react-spinkit";

import { BrowserRouter as Router } from "react-router-dom";

import reduxActions from "./actions";

/* Components */
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import LoginPage from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";

/* Containers */
import DeckPage from "./containers/DeckPage";
import CardPage from "./containers/CardPage";

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

const Loading = styled.div`
  width: 100;
  // height: calc(100vh - 5rem);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrivateRoute = ({
  component: Component,
  auth,
  redirectUrl,
  isLoggedIn,
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
      return auth.loggedIn === isLoggedIn ? (
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
        <div>
          <Nav handleLogout={this.handleLogout} />
          <Container>
            <PrivateRoute
              exact
              path="/"
              auth={this.props.auth}
              isLoggedIn={false}
              redirectUrl={"/decks"}
              component={Home}
            />
            <PrivateRoute
              exact
              path="/decks"
              auth={this.props.auth}
              isLoggedIn={true}
              redirectUrl={"/login"}
              component={DeckPage}
            />
            <PrivateRoute
              exact
              path="/decks/:deckName"
              auth={this.props.auth}
              isLoggedIn={true}
              redirectUrl={"/login"}
              component={CardPage}
            />
            <PrivateRoute
              path="/login"
              auth={this.props.auth}
              isLoggedIn={false}
              redirectUrl={"/decks"}
              component={props => (
                <LoginPage history={props.history} handleLogin={this.handleLogin} />
              )}
            />
            <PrivateRoute
              path="/signup"
              auth={this.props.auth}
              isLoggedIn={false}
              redirectUrl={"/decks"}
              component={SignupPage}
            />
          </Container>
        </div>
      </Router>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     auth: state.auth,
//   };
// }

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { fetchUser: reduxActions.fetchUser })(
  App,
);
