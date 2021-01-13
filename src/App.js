import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Form from "./components/Form";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";

function App() {
  const userDetails = [
    {
      id: 0,
      name: "Akshay Sharma",
      imageLink:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
    },
    {
      id: 1,
      name: "Anish Kaushal",
      imageLink:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
    },
    {
      id: 2,
      name: "Seema Devi",
      imageLink:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    },
  ];
  const [users, setUsers] = useState([]);

  const handleDelete = (id) => {
    const newUser = users.filter((user) => user.id !== id);
    setUsers(newUser);
  };

  const addUser = (useradded) => {
    setUsers([...users, useradded]);
  };

  return (
    <Router>
      <div className="App">
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
        <Route
          exact
          path="/user"
          render={() => (
            <div>
              <Navbar value={"loggedin"} />
              <UserDetails users={users} handleDelete={handleDelete} />
            </div>
          )}
        />
        <Route
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
        />
      </div>
    </Router>
  );
}

export default App;
