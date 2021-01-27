import React, { useState, useEffect, useMemo } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import "../styles/UserDetails.css";

const token = localStorage.getItem("token");
function UserDetails(props) {
  const [loggedIn, setLoggedIn] = useState(true);
  const [num, setNum] = useState(1);
  const [offset, setOffset] = useState(0);
  const limit = 3;

  // Pagination concept here
  const pageNumber = [];
  let totalUser = props.count;
  // console.log(totalUser);
  for (let i = 1; i <= Math.ceil(totalUser / limit); i++) {
    pageNumber.push(i);
  }

  // useEffect hook
  useEffect(() => {
    console.log("User Details Token: " + token);
    if (token === null) {
      setLoggedIn(false);
      console.log("Token is not provided");
    } else {
      showUser(offset, limit);
    }
  }, []);

  // Display User
  const showUser = (offset, limit) => {
    console.log("Running because of useMemo", offset, limit);
    props.displayUserData(offset, limit);
    props.history.push("/user");
  };

  // UseMemo Hook
  function handlePagination() {
    // console.log("Your Number is " + number);
    console.log("working in useMemo");
    let changePage = (num - 1) * limit;
    // console.log("change page is here" + changePage);
    setOffset(changePage);
    showUser(offset, limit);
  }

  const handlepage = useMemo(() => {
    return handlePagination();
  }, [num, offset]);

  const deleteUser = (id) => {
    // console.log("delete function Working...");
    props.removeUser(id);
    showUser(offset, limit);
  };

  const editUser = (user) => {
    // console.log(user);
    props.history.push({
      pathname: `/user/edit/${user.id}`,
      state: user,
    });
  };

  return (
    <div>
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
                      <td onClick={() => editUser(user)}>Edit</td>
                      <td onClick={() => deleteUser(user.id)}>Delete</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* Pagination Page here */}
          <div className="pagination-div">
            <ul className="pagination">
              {pageNumber.map((number) => (
                <li key={number} className="page-item">
                  <button
                    onClick={() => {
                      setNum(number);
                    }}
                    className="page-link"
                    href="!#"
                  >
                    {number}
                    {handlepage}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}

export default withRouter(UserDetails);
