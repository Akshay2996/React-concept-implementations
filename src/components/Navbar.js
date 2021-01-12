import React, { Component } from "react";
import "../styles/Navbar.css";
import logo from "../assets/preview.jpg";
import profilephoto from "../assets/user.png";
import initialphoto from "../assets/initiallogo.jpg";
import { Link } from "react-router-dom";
import Logout from "./Logout";

export default class Navbar extends Component {
  render() {
    // const login = this.props.loggedIn;
    // console.log(login);
    if (this.props.value === "login") {
      return (
        <>
          <div className="header">
            <div className="left-flex">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.freepik.com/vectors/logo"
              >
                <img src={logo} alt="Logo" style={{ width: "100px" }} />
              </a>
            </div>
            <div className="center-flex"></div>
            <div className="right-flex">
              <img src={profilephoto} alt="Profile" style={{ width: "32px" }} />
              <Link to="/login" className="login">
                Login
              </Link>
            </div>
          </div>
        </>
      );
    }
    if (this.props.value === "loggedin") {
      return (
        <>
          <div className="header">
            <div className="left-flex">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.freepik.com/vectors/logo"
              >
                <img src={logo} alt="Logo" style={{ width: "100px" }} />
              </a>
            </div>
            <div className="center-flex"></div>
            <div className="right-flex">
              <img src={initialphoto} alt="Profile" style={{ width: "64px" }} />
              <Logout value={"login"} />
            </div>
          </div>
        </>
      );
    }
  }
}
