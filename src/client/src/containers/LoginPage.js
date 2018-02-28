import React, { Component } from "react";
import { connect } from "react-redux";
import reduxActions from "../actions";
import { Formik, Form, Field } from "formik";
import Yup from "yup";

import LoginForm from "../components/Login/LoginForm";

class LoginPage extends Component {
  handleSubmit = values => {
    this.props.logInUser({
      email: values.email,
      password: values.password,
    }, this.props.history);
    // setTimeout(() => {
    // }, 1000);
  };

  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={this.handleSubmit}
        validate={values => {
          let errors = {};
          return errors;
        }}
        validationSchema={() =>
          Yup.object().shape({
            email: Yup.string()
              .email()
              .required("Email is Required"),
            password: Yup.string().required("Password is Required"),
          })
        }
        component={LoginForm}
      />
    );
  }
}


export default connect(null, { logInUser: reduxActions.logInUser })(
  LoginPage,
);
