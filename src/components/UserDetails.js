import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import "../styles/UserDetails.css";
import UserList from "./UserList";

function UserDetails(props) {
  // constructor(props) {
  //   super(props);
  //   const token = localStorage.getItem("token");
  //   let loggedIn = true;
  //   console.log("working...");
  //   if (token === null) {
  //     loggedIn = false;
  //     console.log("this is working");
  //   }
  //   this.state = { loggedIn: loggedIn };
  // }
  // render() {
  //   if (this.state.loggedIn === false) {
  //     return <Redirect to="/login" />;
  //   }
  return (
    <div className="user-details">
      <Link className="add-user" to="/adduser">
        <button>Add User</button>
      </Link>
      <div className="table">
        <table>
          <tr>
            {/* <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>Country</th>
            <th>Delete User</th> */}
            <th>Profile Pic</th>
            <th>Name</th>
            <th>Delete User</th>
          </tr>
          {props.users.map((user) => {
            return (
              <UserList
                key={user.id}
                user={user}
                handleDelete={props.handleDelete}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
  // }
}

export default withRouter(UserDetails);
