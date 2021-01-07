import React, { useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Form from "./components/Form";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import Navbar from "./components/Navbar";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn({ loggedIn: !loggedIn });
    console.log(loggedIn);
  };
  return (
    <Router>
      <div className="App">
        <Navbar loggedIn={loggedIn} handleLogin={handleLogin} />
        <Route
          exact
          path="/"
          render={() => (
            <div>
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
        <Route path="/login" component={Form} />
        <Route exact path="/user/:email" render={() => <UserDetails />} />
        {/* <Route path="/user" component={UserDetails} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
