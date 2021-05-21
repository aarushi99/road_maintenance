import React from "react";
import "./navbar.css";

function navbar(props) {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-item">Home</div>
        <div className="header-item header-item-history">History</div>
      </div>
      <div className="header-title header-item">Road Maintainence System</div>

      <div className="header-right">
        <div className="header-item">About Us</div>
        <div className="header-item">Contact</div>
        <div className="header-item">Help</div>
        <div className="header-item">Logout</div>
      </div>
    </div>
  );
}

export default navbar;
