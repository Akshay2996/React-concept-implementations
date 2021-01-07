import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Form.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors }) => {
  let valid = true;
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loggedIn: false,
      formErrors: {
        email: "",
        password: "",
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Minimum 6 characters required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    if (formValid(this.state)) {
      if (password.length >= 6 && email !== null) {
        this.props.history.push(`/user/${this.state.email}`);
        console.log("Form submitted", this.state);
      } else {
        console.log("Error submitting form");
      }
    } else {
      console.error(`Error`);
    }
    // this.props.history.push({
    //   pathname: "/page",
    //   data: this.state,
    // });
  };

  render() {
    const { email, password, formErrors } = this.state;
    return (
        <div className="wrapper">
          <Link to="/" className="back">
            Back
          </Link>
          <div className="form-wrapper">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
              <div className="createAccount">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
    );
  }
}
