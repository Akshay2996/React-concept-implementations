import React, { useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Form from "./components/Form";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import Navbar from "./components/Navbar";

function App() {
  // const [loggedIn, setLoggedIn] = useState(true);

  // const handleLogin = () => {
  //   setLoggedIn({ loggedIn: !loggedIn });
  //   console.log(loggedIn);
  // };
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
            </div>
          )}
        />
        {/* <Route
          path="/login"
          render={({ history }) => (
            <Form
              onRoute={() => {
                history.push("/user");
              }}
            />
          )}
        /> */}
        {/* <Route path="/login" component={Form} /> */}
        <Route
          path="/login"
          render={({ history }) => (
            <div>
              <Navbar value={"login"} />
              <Form
                onRoute={(email) => {
                  history.push(`/user/${email}`);
                }}
              />
            </div>
          )}
        />
        {/* <form onRoute={(email) => {
          this.history.push(`/users/${this.state.email}`)
        }} */}
        <Route
          exact
          path="/user/:email"
          render={() => (
            <div>
              <Navbar value={"loggedin"} />
              <UserDetails />
            </div>
          )}
        />
        {/* <Route path="/user" component={UserDetails} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
