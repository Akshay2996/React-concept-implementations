import React, { useState, useEffect, Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import "../styles/UserDetails.css";
import axios from "axios";

function UserDetails(props) {
  // constructor(props) {
  //   super(props);
  //   const token = localStorage.getItem("token");
  //   let loggedIn = true;
  //   if (token === null) {
  //     loggedIn = false;
  //     console.log("Token is not provided");
  //   }
  //   this.state = { loggedIn: loggedIn };
  // }

  const [loggedIn, setLoggedIn] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log("useEffect ran");
    console.log(token);
    if (token === null) {
      setLoggedIn(false);
      console.log("Token is not provided");
      console.log(loggedIn);
    }
    const config = {
      url: "http://localhost:5000/api/user",
      method: "POST",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then((response) => {
        console.log(response.data);
        // setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, [token, loggedIn]);

  // render() {
  //   if (this.state.loggedIn === false) {
  //     return <Redirect to="/login" />;
  //   }
  return (
    <div>
      {/* {token === "null" && <Redirect to="/login" />} */}
      {loggedIn ? (
        <div className="user-details">
          <Link className="add-user" to="/adduser">
            <button>Add User</button>
          </Link>
          <div className="table">
            <table>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
                <th>Country</th>
                <th>Delete User</th>
                {/* <th>Profile Pic</th>
          <th>Name</th>
          <th>Delete User</th> */}
              </tr>
              {props.users.map((user) => {
                return (
                  <tr key={user.id}>
                    {/* <td>
                      <img
                        className="photo"
                        src={user.imageLink}
                        alt="Profilepic"
                      />
                    </td>
                    <td>{user.name}</td> */}
                    {console.log(user)}
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.role}</td>
                    <td>{user.country}</td>
                    <td
                      style={{ cursor: "pointer" }}
                      onClick={() => props.handleDelete(user.id)}
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
  // }
}

export default withRouter(UserDetails);
