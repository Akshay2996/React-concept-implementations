import React from "react";

export default function UserList(props) {
  const { user } = props;
  return (
    <>
      <tr key={props.user.id}>
        <td>
          <img className="photo" src={user.imageLink} alt="Profilepic" />
        </td>
        <td>{user.name}</td>
        {/* <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.role}</td>
        <td>{user.country}</td> */}
        <td
          style={{ cursor: "pointer" }}
          onClick={() => props.handleDelete(user.id)}
        >
          Delete
        </td>
      </tr>
    </>
  );
}
