import { Link, withRouter } from "react-router-dom";
import { useRef } from "react";
import "../styles/AddUser.css";
import axios from "axios";

const EditUser = (props) => {
  const { id, firstName, lastName, role, country } = props.location.state;
  // console.log(id, firstName, lastName, role, country);

  const fName = useRef();
  const lName = useRef();
  const Role = useRef();
  const Country = useRef();
  // useRef -> {current}

  const handleSubmit = (e) => {
    e.preventDefault();

    // const firstName = e.target.elements.firstName.value;
    // const lastName = e.target.elements.lastName.value;
    // const role = e.target.elements.role.value;
    // const country = e.target.elements.country.value;

    const token = localStorage.getItem("token");

    const firstName = fName.current.value;
    const lastName = lName.current.value;
    const role = Role.current.value;
    const country = Country.current.value;

    if (firstName && lastName && role && country) {
      // const config = {
      //   url: `http://localhost:5000/api/user/${id}`,
      //   method: "PUT",
      //   headers: {
      //     authorization: token,
      //     "Content-Type": "application/json",
      //   },
      //   data: {
      //     firstName: firstName,
      //     lastName: lastName,
      //     role: role,
      //     country: country,
      //   },
      // };
      // axios(config)
      //   .then(() => {
      //     props.history.push("/user");
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      const user = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        role: role,
        country: country,
      };
      props.updateUser(user);
      props.history.push("/user");
    } else {
      console.log("Fill all the fields");
    }
  };
  return (
    <div>
      <Link to="/user" className="back-button">
        Back
      </Link>
      <h1>Update User Details</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input ref={fName} type="text" defaultValue={firstName}></input>
          <input ref={lName} type="text" defaultValue={lastName}></input>
          <input ref={Role} type="text" defaultValue={role}></input>
          <input ref={Country} type="text" defaultValue={country}></input>
          <button>Update User</button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(EditUser);
