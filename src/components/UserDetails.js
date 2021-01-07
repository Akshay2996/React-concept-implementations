import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/UserDetails.css";
import Logout from "./Logout";

function UserDetails(props) {
  // const { pathname } = props.location;
  // console.log(pathname);
  let email = props.match.params.email;
  console.log(props);
  return (
      <div className="user-details">
        <Logout />
        <h1>My email id is {email}</h1>
      </div>
  );
}

export default withRouter(UserDetails);
