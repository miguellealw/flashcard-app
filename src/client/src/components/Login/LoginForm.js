import React from "react";
import { Formik, Form, Field } from "formik";
import Yup from "yup";

import { FormContainer, ErrorMessage } from "./styles/LoginForm.styles";

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

export default LoginForm;
