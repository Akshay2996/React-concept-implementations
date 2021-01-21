import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/AddUser.css";
import axios from "axios";

export default function AddUser(props) {
  const fName = useRef();
  const lName = useRef();
  const Role = useRef();
  const Country = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const firstName = e.target.elements.firstName.value;
    // const lastName = e.target.elements.lastName.value;
    // const role = e.target.elements.role.value;
    // const country = e.target.elements.country.value;

    const firstName = fName.current.value;
    const lastName = lName.current.value;
    const role = Role.current.value;
    const country = Country.current.value;
    // if (firstName && lastName && role && country) {
    //   const config = {
    //     url: "http://localhost:5000/api/user/create",
    //     method: "POST",
    //     headers: {
    //       authorization: token,
    //       "Content-Type": "application/json",
    //     },
    //     data: {
    //       firstName: firstName,
    //       lastName: lastName,
    //       role: role,
    //       country: country,
    //     },
    //   };

    //   axios(config)
    //     .then((response) => {
    //       // console.log(response.data);
    //       props.onAddUser(response.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }

    const user = {
      firstName: firstName,
      lastName: lastName,
      role: role,
      country: country,
    };
    if (firstName && lastName && role && country) {
      props.addUser(user);
      props.history.push("/user");
    }
  };
  return (
    <div>
      <Link to="/user" className="back-button">
        Back
      </Link>
      <h1>Add User</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            ref={fName}
            type="text"
            placeholder="First Name"
            name="firstName"
          ></input>
          <input
            ref={lName}
            type="text"
            placeholder="Last Name"
            name="lastName"
          ></input>
          <input ref={Role} type="text" placeholder="Role" name="role"></input>
          <input
            ref={Country}
            type="text"
            placeholder="Country"
            name="country"
          ></input>
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}
