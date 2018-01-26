import React, { Component } from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  width: 100%;
  height: 5rem;
  background: #ebebeb;
`;

export default class Nav extends Component {
  render() {
    return (
      <Navigation>
        <p>Log In</p>
        <p>Sign Up</p>
      </Navigation>
    );
  }
}
