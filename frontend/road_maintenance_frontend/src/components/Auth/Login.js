import React, { Component } from "react";

import Input from "../Form/Input/Input";
import Button from "../Button/Button";
import { required, length, email } from "../../util/validators";
import Auth from "./Auth";
import logo from "../../images/pec_seal.png";
import "./Login.css";

class Login extends Component {
  state = {
    loginForm: {
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
      formIsValid: false,
    },
  };

  inputChangeHandler = (input, value) => {
    this.setState((prevState) => {
      let isValid = true;
      for (const validator of prevState.loginForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.loginForm,
        [input]: {
          ...prevState.loginForm[input],
          valid: isValid,
          value: value,
        },
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        loginForm: updatedForm,
        formIsValid: formIsValid,
      };
    });
  };

  inputBlurHandler = (input) => {
    this.setState((prevState) => {
      return {
        loginForm: {
          ...prevState.loginForm,
          [input]: {
            ...prevState.loginForm[input],
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
            <div className="h4 mb-3 fw-normal text-center">Please sign in</div>
            <form
              onSubmit={(e) =>
                this.props.onLogin(e, {
                  email: this.state.loginForm.email.value,
                  password: this.state.loginForm.password.value,
                })
              }
            >
              <Input
                id="email"
                label="Email Address"
                type="email"
                control="input"
                onChange={this.inputChangeHandler}
                onBlur={this.inputBlurHandler.bind(this, "email")}
                value={this.state.loginForm["email"].value}
                valid={this.state.loginForm["email"].valid}
                touched={this.state.loginForm["email"].touched}
              />
              <Input
                id="password"
                label="Password"
                type="password"
                control="input"
                onChange={this.inputChangeHandler}
                onBlur={this.inputBlurHandler.bind(this, "password")}
                value={this.state.loginForm["password"].value}
                valid={this.state.loginForm["password"].valid}
                touched={this.state.loginForm["password"].touched}
              />
              <Button
                design="raised"
                type="submit"
                loading={this.props.loading}
              >
                Login
              </Button>
            </form>
            <div style={{ "padding-top": "20px" }}>
              Haven't registered yet?{" "}
              <a href="http://localhost:3000/signup">Sign up</a> here
            </div>
          </div>
        </div>
      </Auth>
    );
  }
}

export default Login;
