import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/UserDetails.css";

function UserDetails(props) {
  // const { pathname } = props.location;
  // console.log(pathname);
  let email = props.match.params.email;
  console.log(props);
  return (
    <div className="user-details">
      <Link to="/update">
        <button className="update">Update</button>
      </Link>
      <h1>My email id is {email}</h1>
    </div>
  );
}

export default withRouter(UserDetails);
