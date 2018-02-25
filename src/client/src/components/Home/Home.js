import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Name,
  LandingPage,
  AttentionGetter,
  SignUpButton,
  LoginOption,
} from "./styles/Home.styles";

export default class Home extends Component {
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
          <SignUpButton>Sign Up Now</SignUpButton>
        </Link>

        <LoginOption>
          or <Link to="/login">Login</Link> to Get Started
        </LoginOption>
      </LandingPage>
    );
  }
}
