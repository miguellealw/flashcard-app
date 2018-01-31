import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 5rem;
  background: #ebebeb;
  // position: absolute;
  & ul {
    display: flex;
    align-items: center;

    & a {
      text-decoration: none;
      color: black;
      // background: red;
      margin-right: 3rem;
      &:hover {
        text-decoration: underline;
      }
      & li {
        list-style: none;
      }
    }
  }
`;

// const Seperator = styled.span`
//   border-right: 5px solid black;
//   padding-left: 3rem;
// `;

class Nav extends Component {
  renderNav = () => {
    if (!this.props.auth.isAuthenticated) {
      return [
        <Link key="1" to="/login">
          <li>Log In</li>
        </Link>,
        <Link key="2" to="/signup">
          <li>Sign Up</li>
        </Link>,
      ];
    }
    return [
      <Link to="/decks" key="1">
        <li>Your Decks</li>
      </Link>,
      <Link to="/" key="2" onClick={this.props.logoutUser}>
        <li>Log Out</li>
      </Link>,
    ];
  };

  render() {
    return (
      <Navigation>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          {!this.props.auth ? <div>Loading...</div> : this.renderNav()}
        </ul>
      </Navigation>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, actions)(Nav);
