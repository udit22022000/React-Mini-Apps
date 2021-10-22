import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/users",
    title: "Users",
  },
  {
    to: "/login",
    title: "LogIn",
  },
];

const Navbar = () => {
  return (
    <div
      style={{
        width: "50%",
        minWidth: "200px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {links.map(({ to, title }) => (
        <Link to={to}>{title}</Link>
      ))}
    </div>
  );
};

export default Navbar;
