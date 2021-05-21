import React from "react";
import "./navbar.css";

function navbar(props) {
  return (
    <div className="header">
      <div className="header-left">Menu</div>
      <div className="header-middle">Home</div>
      <div className="header-right">Logout</div>
    </div>
  );
}

export default navbar;
