import { Link, useParams } from "react-router-dom";
import "../styles/AddUser.css";
import axios from "axios";

const EditUser = (props) => {
  const { id } = useParams();
  //   console.log(id);
  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const role = e.target.elements.role.value;
    const country = e.target.elements.country.value;
    const token = localStorage.getItem("token");

    const config = {
      url: `http://localhost:5000/api/user/${id}`,
      method: "PUT",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
      data: {
        firstName: firstName,
        lastName: lastName,
        role: role,
        country: country,
      },
    };
    axios(config)
      .then(() => {
        props.history.push("/user");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Link to="/user" className="back-button">
        Back
      </Link>
      <h1>Update User Details</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" name="firstName"></input>
          <input type="text" placeholder="Last Name" name="lastName"></input>
          <input type="text" placeholder="Role" name="role"></input>
          <input type="text" placeholder="Country" name="country"></input>
          <button>Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
