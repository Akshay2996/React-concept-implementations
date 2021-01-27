import React, { useState, useEffect, lazy, Suspense } from "react";
import Footer from "./Footer";
import Home from "./Home";
import Form from "./Form";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import ErrorBoundary from "./ErrorBoundary";
// import UserDetails from "./UserDetails";
const UserDetails = lazy(() => import("./UserDetails"));

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
              <Form {...props} history={history} />
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
              <ErrorBoundary>
                <Navbar value={"loggedin"} />
                <Suspense fallback={<h1>Loading Users ...</h1>}>
                  <UserDetails {...props} history={history} />
                </Suspense>
              </ErrorBoundary>
            </div>
          )}
        />
        <Route
          exact
          path="/adduser"
          render={({ history }) => (
            <div>
              <ErrorBoundary>
                <AddUser {...props} history={history} />
              </ErrorBoundary>
            </div>
          )}
        />
        <Route
          exact
          path="/user/edit/:id"
          render={() => (
            <div>
              <ErrorBoundary>
                <EditUser {...props} />
              </ErrorBoundary>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
