import React, { useState, useEffect, useMemo, useRef } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import "../styles/UserDetails.css";
import axios from "axios";
import EditUser from "./EditUser";

// function computeLongWord(users) {
//   console.log("useMemo works", users);
// }

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
  // const [reload, setReload] = useState(null);
  const token = localStorage.getItem("token");
  // const longWord = useMemo(() => {
  //   computeLongWord(props.users);
  // }, [props.users]);

  useEffect(() => {
    console.log("useEffect ran");
    if (token === null) {
      setLoggedIn(false);
      console.log("Token is not provided");
    } else {
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
          props.onUserData(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [token]);

  // console.log("running everytime it's deleting the user");

  const deleteUser = (id) => {
    console.log("delete function Working...");
    const config = {
      url: `http://localhost:5000/api/user/${id}`,
      method: "DELETE",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
    };
    axios(config).then((response) => {
      // console.log(response.data);
      props.handleUserDelete(response.data.id);
    });
  };

  const editUser = (user) => {
    // console.log(user);
    props.history.push({
      pathname: `/user/edit/${user.id}`,
      state: user,
    });
  };

  // render() {
  //   if (this.state.loggedIn === false) {
  //     return <Redirect to="/login" />;
  //   }
  return (
    <div>
      {/* <div>{longWord}</div> */}
      {loggedIn ? (
        <div className="user-details">
          <Link className="add-user" to="/adduser">
            <button>Add User</button>
          </Link>
          <div className="table">
            <table>
              <tbody>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Role</th>
                  <th>Country</th>
                  <th>Edit User</th>
                  <th>Delete User</th>
                </tr>
                {props.users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.role}</td>
                      <td>{user.country}</td>
                      {/* <td>
                        <Link
                          to={{
                            pathname: `/user/edit/${user.id}`,
                            state: user,
                          }}
                          className="edit-button"
                        >
                          Edit
                        </Link>
                      </td> */}
                      <td onClick={() => editUser(user)}>Edit</td>
                      <td onClick={() => deleteUser(user.id)}>Delete</td>
                    </tr>
                  );
                })}
              </tbody>
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
