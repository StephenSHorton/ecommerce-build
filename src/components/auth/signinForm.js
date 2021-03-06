import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formFields";

class SignInForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form className={`${className} sign-in-form`} onSubmit={handleSubmit}>
        <Field
          className="sign-in-form__email"
          name="Email"
          type="email"
          title="Email"
          placeholder="Email"
          component={FormInput}
        />
        <Field
          className="sign-in-form__password"
          name="password"
          type="password"
          title="Password"
          placeholder="Password"
          component={FormInput}
        />
        <Field
          className="sign-in-form__Login"
          onClick={() => handleSubmit}
          name="login"
          type="submit"
          title="Login"
          component={FormButton}
        />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm"
})(SignInForm);

export default SignInForm;
