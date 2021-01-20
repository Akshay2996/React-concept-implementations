import React, { useState, useEffect, useCallback } from "react";
import Footer from "./Footer";
import Home from "./Home";
import Form from "./Form";
import { Route, Switch } from "react-router-dom";
import UserDetails from "./UserDetails";
import Navbar from "./Navbar";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

function App(props) {
  console.log(props);
  //   const [users, setUsers] = useState([]);

  //   const { users } = props;

  //   const handleUserDelete = (id) => {
  //     const newUser = users.filter((user) => user.id.toString() !== id);
  //     setUsers(newUser);
  //   };

  //   const addUser = (useradded) => {
  //     setUsers([...users, useradded]);
  //   };

  // const displayUserData = useCallback(
  //   (data) => {
  //     return setUsers(data);
  //   },
  //   [data]
  // );
  //   const displayUserData = (data) => {
  //     setUsers(data);
  //   };

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Navbar value={"login"} />
              <Home />
              <Footer />
            </div>
          )}
        />
        <Route
          path="/login"
          render={({ history }) => (
            <div>
              <Navbar value={"login"} />
              <Form history={history} />
              <Footer />
            </div>
          )}
        />
        {/* <Route
          exact
          path="/user"
          render={({ history }) => (
            <div>
              <Navbar value={"loggedin"} />
              <UserDetails
                history={history}
                users={users}
                handleUserDelete={handleUserDelete}
                onUserData={displayUserData}
              />
            </div>
          )}
        /> */}
        <Route
          exact
          path="/user"
          render={({ history }) => (
            <div>
              <Navbar value={"loggedin"} />
              <UserDetails history={history} {...props} />
            </div>
          )}
        />
        {/* <Route
          exact
          path="/adduser"
          render={({ history }) => (
            <div>
              <AddUser
                onAddUser={(user) => {
                  addUser(user);
                  history.push(`/user`);
                }}
              />
            </div>
          )}
        /> */}
        <Route
          exact
          path="/adduser"
          render={({ history }) => (
            <div>
              <AddUser {...props} history={history} />
            </div>
          )}
        />
        <Route
          exact
          path="/user/edit/:id"
          render={() => (
            <div>
              <EditUser {...props} />
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
