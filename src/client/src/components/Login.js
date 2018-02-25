import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import Yup from "yup";
import { connect } from "react-redux";
import * as actions from "../actions";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 5rem);
  form {
    width: 50%;
    display: flex;
    flex-direction: column;
    // background: pink;

    input {
      border: 2px solid #f2f2f2;
      width: 100%;
      height: 3.5rem;
      text-indent: 1rem;
      margin-top: 0.5rem;

      &:hover {
        border: 2px solid #d0d0d0;
      }
      &:focus {
        border: 2px solid #d0d0d0;
      }
      &[type="checkbox"] {
        width: 0;
        height: 0;
        margin-right: 1rem;
      }
      .checkbox-label {
        margin: 0;
      }
    }

    label {
      margin: 1rem 0;
    }

    button {
      margin: 1.5rem 0;
      background: black;
      color: white;
      padding: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      border: inherit;
      border: 2px solid black;
      transition: all 0.3s ease-in-out;

      &:hover {
        border: 2px solid black;
        background: white;
        color: black;
      }
    }
  }
`;

const ErrorMessage = styled.div`
  color: #e81b0c;
`;

const LoginForm = ({ logInUser, history }) => (
  <Formik
    initialValues={{
      email: "",
      password: "",
    }}
    onSubmit={async (values, { setSubmitting }) => {
      // Log User In
      try {
        logInUser({ email: values.email, password: values.password }, history);
        setSubmitting(false);
      } catch (error) {
        setSubmitting(false);
      }
    }}
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
    render={({
      values,
      handleSubmit,
      handleChange,
      handleBlur,
      isSubmitting,
      touched,
      errors,
    }) => (
      <FormContainer>
        <Form>
          <label>
            Email:
            <Field type="email" name="email" placeholder="jon@gmail.com" />{" "}
          </label>{" "}
          {touched.email &&
            errors.email && <ErrorMessage> {errors.email} </ErrorMessage>}{" "}
          <label>
            Password:
            <Field
              name="password"
              type="password"
              placeholder="password123"
            />{" "}
          </label>{" "}
          {touched.password &&
            errors.password && (
              <ErrorMessage> {errors.password} </ErrorMessage>
            )}{" "}
          {/* <label className="checkbox-label">
            <Field
              name="rememberUser"
              component={({ field }) => (
                <input type="checkbox" name="remember" />
              )}
            />
            Remember Me{" "}
          </label>{" "} */}
          {/* TODO: style disabled button */}
          <button type="submit" disabled={isSubmitting}>
            Log In{" "}
          </button>{" "}
        </Form>{" "}
      </FormContainer>
    )}
  />
);

class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, actions)(Login);
