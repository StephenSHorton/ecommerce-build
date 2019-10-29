import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import SignInForm from "./signinForm";

class SignIn extends Component {
  onSubmit = fields => {
    console.log(fields);
  };
  render() {
    return (
      <div className="sign-in">
        <SignInForm className="sign-in__form" onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default SignIn;
