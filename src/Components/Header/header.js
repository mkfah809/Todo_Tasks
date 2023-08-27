import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>Todo App</span>
      <div>
       <Link to="/dashboard">Dashboard</Link>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
