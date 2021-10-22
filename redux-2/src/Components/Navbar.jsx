import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        width: "200px",
        display: "flex",
        justifyContent: "space-between",
        margin: "10px auto",
      }}
    >
      <Link to="/login">Login</Link>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Navbar;
