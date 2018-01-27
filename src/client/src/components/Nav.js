import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

export default class Nav extends Component {
  render() {
    return (
      <Navigation>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/decks">
            <li>Decks</li>
          </Link>

          <Link to="/login">
            <li>Log In</li>
          </Link>
          <Link to="/signup">
            <li>Sign Up</li>
          </Link>
        </ul>
      </Navigation>
    );
  }
}
