import React, { Component } from "react";
import { connect } from "react-redux";
import reduxActions from "../actions";

import SignupForm from '../components/Signup/SignupForm'

class Signup extends Component {
  render() {
    return (
      <div>
        <SignupForm {...this.props} />
      </div>
    );
  }
}

export default connect(null, {
  logInUser: reduxActions.logInUser,
  signUpUser: reduxActions.signUpUser,
})(Signup);
