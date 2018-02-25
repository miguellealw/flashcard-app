import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import Yup from "yup";
// import axios from "axios";
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
      margin: 1em 0;
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

const SignupForm = ({signUpUser, logInUser}) => (
  <Formik
    initialValues={{
      email: "",
      username: "",
      password: "",
    }}
    onSubmit={async (values, { setSubmitting }) => {
      // Log User in
      // const {data} = await axios.post("/api/v1/user/signup", {
      //   email: values.email,
      //   password: values.password,
      //   username: values.username,
      // });
      signUpUser({
        email: values.email,
        password: values.password,
        username: values.username,
      })
      setSubmitting(false);
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
        username: Yup.string().required("Username is Required"),
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
            Username:
            <Field name="username" type="text" placeholder="jon123" />{" "}
          </label>{" "}
          {touched.username &&
            errors.username && (
              <ErrorMessage> {errors.username} </ErrorMessage>
            )}{" "}
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
          <button type="submit" disabled={isSubmitting}>
            Sign Up{" "}
          </button>{" "}
        </Form>{" "}
      </FormContainer>
    )}
  />
);

class Signup extends Component {
  render() {
    return (
      <div>
        <SignupForm {...this.props}/>
      </div>
    );
  }
}

export default connect(null, actions)(Signup);
