import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Name = styled.h1`
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: 72px;
  text-align: center;
  & .green-color {
    color: #45e6b5;
  }
  // line-height: .5em;
`;

const LandingPage = styled.div`
  // position: relative;
  // top: -5rem;
  width: 100%;
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background: red;
`;

const AttentionGetter = styled.p`
  margin: 0rem 0 3rem;
  font-size: 1.2em;
  color: #ccc;
`;

const CallToAction = styled.button`
  border: 3px solid black;
  padding: 1rem 2rem;
  cursor: pointer;
  background: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: black;
    color: white;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

const LoginOption = styled.span`
  color: #ccc;
  font-size: .8em;
  margin-top: .5rem;

  a {
    color: #aaa;
    // text-decoration: none;
  }
`;

export default class extends Component {
  render() {
    return (
      <LandingPage>
        <Name>
          Deck<span className="green-color">ify</span>
        </Name>
        <AttentionGetter>
          create, maintain, and study flashcards all in one place
        </AttentionGetter>

        <Link to="/signup">
          <CallToAction>Sign Up Now</CallToAction>
        </Link>

        <LoginOption>
          or <Link to="/login">Login</Link>
        </LoginOption>
      </LandingPage>
    );
  }
}
