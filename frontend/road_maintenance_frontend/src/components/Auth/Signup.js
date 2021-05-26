import React, { Component } from "react";

import Input from "../Form/Input/Input";
import Button from "../Button/Button";
import { required, length, email } from "../../util/validators";
import Auth from "./Auth";
import logo from "../../images/pec_seal.png";

class Signup extends Component {
  state = {
    signupForm: {
      email: {
        value: "",
        valid: false,
        touched: false,
        validators: [required, email],
      },
      password: {
        value: "",
        valid: false,
        touched: false,
        validators: [required, length({ min: 5 })],
      },
      name: {
        value: "",
        valid: false,
        touched: false,
        validators: [required],
      },
      formIsValid: false,
    },
  };

  inputChangeHandler = (input, value) => {
    this.setState((prevState) => {
      let isValid = true;
      for (const validator of prevState.signupForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.signupForm,
        [input]: {
          ...prevState.signupForm[input],
          valid: isValid,
          value: value,
        },
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        signupForm: updatedForm,
        formIsValid: formIsValid,
      };
    });
  };

  inputBlurHandler = (input) => {
    this.setState((prevState) => {
      return {
        signupForm: {
          ...prevState.signupForm,
          [input]: {
            ...prevState.signupForm[input],
            touched: true,
          },
        },
      };
    });
  };

  render() {
    return (
      <Auth>
        <div className="login-container">
          <div className="form-signin text-center m-0">
            <img class="mb-4" src={logo} alt="" width="165" height="75" />
            <div className="h4 mb-3 fw-semibold text-center">
              Please sign up to continue
            </div>
            <form onSubmit={(e) => this.props.onSignup(e, this.state)}>
              <Input
                id="email"
                label="Your E-Mail"
                type="email"
                control="input"
                onChange={this.inputChangeHandler}
                onBlur={this.inputBlurHandler.bind(this, "email")}
                value={this.state.signupForm["email"].value}
                valid={this.state.signupForm["email"].valid}
                touched={this.state.signupForm["email"].touched}
              />
              <Input
                id="name"
                label="Your Name"
                type="name"
                control="input"
                onChange={this.inputChangeHandler}
                onBlur={this.inputBlurHandler.bind(this, "name")}
                value={this.state.signupForm["name"].value}
                valid={this.state.signupForm["name"].valid}
                touched={this.state.signupForm["name"].touched}
              />
              <Input
                id="password"
                label="Password"
                type="password"
                control="input"
                onChange={this.inputChangeHandler}
                onBlur={this.inputBlurHandler.bind(this, "password")}
                value={this.state.signupForm["password"].value}
                valid={this.state.signupForm["password"].valid}
                touched={this.state.signupForm["password"].touched}
              />
              <Button
                design="raised"
                type="submit"
                loading={this.props.loading}
              >
                Signup
              </Button>
            </form>
            <div style={{ "padding-top": "20px" }}>
              Already a user? <a href="http://localhost:3000/">Log in</a> here
            </div>
          </div>
        </div>
      </Auth>
    );
  }
}

export default Signup;
