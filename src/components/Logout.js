import React from "react";
import { Link } from "react-router-dom";
import "../styles/Logout.css";

export default function Logout(props) {
  return (
    <div className="logout-box">
      <Link to="/login" style={{ textDecoration: "none" }}>
        Logout
      </Link>
    </div>
  );
}
