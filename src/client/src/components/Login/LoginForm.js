import React from "react";
import { Form, Field } from "formik";

import { FormContainer, ErrorMessage } from "./styles/LoginForm.styles";

const LoginForm = ({
  values,
  handleSubmit,
  handleChange,
  handleBlur,
  isSubmitting,
  touched,
  errors,
}) => (
  <FormContainer>
    {console.log("=========isSubmitting==========", isSubmitting)}

    <Form>
      <label>
        Email:
        <Field
          type="email"
          name="email"
          placeholder="jon@gmail.com"
          autoFocus
        />{" "}
      </label>{" "}
      {touched.email &&
        errors.email && <ErrorMessage> {errors.email} </ErrorMessage>}{" "}
      <label>
        Password:
        <Field name="password" type="password" placeholder="password123" />{" "}
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
        {isSubmitting ? "Loading..." : "Log In"}
      </button>{" "}
    </Form>
  </FormContainer>
);

export default LoginForm;
