import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../styles/Form.css";
import axios from "axios";

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

class Form extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    const token = localStorage.getItem("token");
    if (token) {
      loggedIn = true;
    }

    this.state = {
      email: "",
      password: "",
      loggedIn,
      formErrors: {
        email: "",
        password: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.setState({ formErrors, [name]: value });
    // this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    if (formValid(this.state)) {
      if (password.length >= 6 && email !== null) {
        const config = {
          url: "http://localhost:5000/api/user/login",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        };
        axios(config).then((res) => {
          // console.log(res.data);
          localStorage.setItem("token", res.data.token);
          this.props.history.push("/user");
        });
      } else {
        console.log("Error submitting form");
      }
    } else {
      console.error(`Error`);
    }
  };

  componentDidMount() {
    console.log("Component Mounted");
  }
  componentWillUnmount() {
    console.log("Successfully UnMounted");
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("component updated");
  //   console.log(prevProps, prevState);
  // }

  render() {
    const { email, password, formErrors, loggedIn } = this.state;
    if (loggedIn) {
      return <Redirect to="/user" />;
    }
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

export default Form;
