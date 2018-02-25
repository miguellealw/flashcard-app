import React from "react";
import { Formik, Form, Field } from "formik";
import Yup from "yup";

import { FormContainer, ErrorMessage } from "./styles/SignupForm.styles";

const SignupForm = ({ signUpUser, logInUser }) => (
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
      });
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

export default SignupForm;
