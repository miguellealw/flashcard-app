import React, { Component } from "react";
import { connect } from "react-redux";
import reduxActions from "../actions";

import LoginForm from "../components/Login/LoginForm";

class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logInUser: reduxActions.logInUser })(
  Login,
);
