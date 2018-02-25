import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import reduxActions from "../../actions";

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

class Nav extends Component {
  renderNav = () => {
    if (!this.props.auth.loggedIn) {
      return [
        <Link key="1" to="/">
          <li>Home</li>
        </Link>,
        <Link key="2" to="/login">
          <li>Log In</li>
        </Link>,
        <Link key="3" to="/signup">
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
      <div>
        {!this.props.auth.isFetching && (
          <Navigation>
            <ul>{this.renderNav()}</ul>
          </Navigation>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, {
  logoutUser: reduxActions.logoutUser,
})(Nav);
