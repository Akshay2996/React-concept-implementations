import React, { Component } from "react";
import "../styles/Navbar.css";
import logo from "../assets/preview.jpg";
import profilephoto from "../assets/user.png";
import { Link } from "react-router-dom";
import Logout from "./Logout";

export default class Navbar extends Component {
  render() {
    const login = this.props.loggedIn;
    console.log(login);
    return (
      <>
        <div className="header">
          <div className="left-flex">
            <a href="https://www.freepik.com/vectors/logo">
              <img src={logo} alt="Logo" style={{ width: "100px" }} />
            </a>
          </div>
          <div className="center-flex"></div>
          <div className="right-flex">
            <img src={profilephoto} alt="Profile" style={{ width: "32px" }} />
            {login ? (
              <Logout />
            ) : (
              <Link to="/login" className="login">
                Login
              </Link>
            )}
          </div>
        </div>
      </>
    );
  }
}

// export default function Navbar() {
//   return (
//     <>
//       <div className="header">
//         <div className="left-flex">
//           <a href="https://www.freepik.com/vectors/logo">
//             <img src={logo} style={{ width: "64px"}} />
//           </a>
//         </div>
//         <div className="center-flex"></div>
//         <div className="right-flex">
//           <img src={profilephoto} style={{width: "32px"}} />
//           <p style={{padding: "5px"}}>Akshay Sharma</p>
//         </div>
//       </div>
//     </>
//   );
// }
