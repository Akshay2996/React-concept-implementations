import React, { useState, useEffect, useMemo, useRef } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import "../styles/UserDetails.css";

// function computeLongWord(users) {
//   console.log("useMemo works", users);
// }
const limit = 3;
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
  // const [currentPage, setCurrentPage] = useState(1);
  // const [num, setNum] = useState(1);
  const [offset, setOffset] = useState(0);

  // const indexOfLastUser = currentPage * limit;
  // const indexOfFirstUser = indexOfLastUser - limit;
  // const currentUsers = props.users.slice(indexOfFirstUser, indexOfLastUser);

  // Pagination concept here
  const pageNumber = [];
  let totalUser = props.count;
  console.log(totalUser);
  for (let i = 1; i <= Math.ceil(totalUser / limit); i++) {
    pageNumber.push(i);
  }

  const handlePagination = (num) => {
    // console.log("Your Number is " + number);
    console.log("Num state" + num);
    let changePage = (num - 1) * limit;
    console.log("change page is here" + changePage);
    setOffset(changePage);
    // setCurrentPage(number);
    showUser(offset, limit);
  };
  // const [reload, setReload] = useState(true);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   console.log("User Details Token" + token);
  //   // if (token === null) {
  //   //   setLoggedIn(false);
  //   //   console.log("Token is not provided");
  //   // }
  // }, []);

  // function showUser() {
  //   props.onShowUser();
  // }

  // const longWord = useMemo(() => {
  //   computeLongWord(props.users);
  // }, [props.users]);

  const showUser = (offset, limit) => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      setLoggedIn(true);
      console.log(offset, limit);
      props.displayUserData(offset, limit);
      props.history.push("/user");
    } else {
      setLoggedIn(false);
      console.log("Token is not provided");
    }
  };

  const deleteUser = (id) => {
    console.log("delete function Working...");
    // const config = {
    //   url: `http://localhost:5000/api/user/${id}`,
    //   method: "DELETE",
    //   headers: {
    //     authorization: token,
    //     "Content-Type": "application/json",
    //   },
    // };
    // axios(config).then((response) => {
    //   // console.log(response.data);
    //   props.handleUserDelete(response.data.id);
    // });
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

  // render() {
  //   if (this.state.loggedIn === false) {
  //     return <Redirect to="/login" />;
  //   }
  return (
    <div>
      {/* <div>{longWord}</div> */}
      <button
        onClick={() => {
          showUser(offset, limit);
        }}
      >
        Show Users
      </button>

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
                      {/* <td onClick={() => props.removeUser(user.id)}>Delete</td> */}
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
                      // setNum(number);
                      handlePagination(number);
                    }}
                    className="page-link"
                  >
                    {number}
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
  // }
}

export default withRouter(UserDetails);
