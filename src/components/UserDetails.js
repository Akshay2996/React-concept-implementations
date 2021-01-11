import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/UserDetails.css";
import UserList from "./UserList";

function UserDetails(props) {
  let email = props.match.params.email;
  console.log(props);
  return (
    <div className="user-details">
      <Link className="add-user" to="/adduser">
        <button>Add User</button>
      </Link>
      <div className="table">
        <table>
          <tr>
            <th>Profile Pic</th>
            <th>Name</th>
            <th>Delete User</th>
          </tr>
          {props.users.map((user) => {
            return (
              <UserList key={user.id} user={user} handleDelete={props.handleDelete} />
            );
          })}
        </table>
      </div>
      {/* <h1>My email id is {email}</h1> */}
    </div>
  );
}

export default withRouter(UserDetails);
