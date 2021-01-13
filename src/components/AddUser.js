import React from "react";
import "../styles/AddUser.css";

export default function AddUser(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const imageLink = e.target.elements.link.value;
    const name = e.target.elements.name.value;
    // console.log(imageLink, name);
    const user = {
      name: name,
      imageLink: imageLink,
    };
    if (imageLink && name) {
      props.onAddUser(user);
    }
  };
  return (
    <div>
      <h1>Add User</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Image Link" name="link"></input>
          <input type="text" placeholder="Full Name" name="name"></input>
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}
