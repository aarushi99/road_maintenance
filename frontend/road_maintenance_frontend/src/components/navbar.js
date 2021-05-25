import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
  const history = useHistory();
  return (
    <div className="header">
      <div className="header-left">
        <div
          onClick={() => {
            history.replace("/home");
            console.log("clicked on home");
          }}
          className="header-item"
        >
          Home
        </div>
        <div
          onClick={() => {
            history.replace("/history");
            console.log("clicked on home");
          }}
          className="header-item header-item-history"
        >
          History
        </div>
      </div>
      <div className="header-title">Road Maintainence System</div>

      <div className="header-right">
        <div
          onClick={() => {
            history.replace("/aboutus");
            console.log("clicked on about us");
          }}
          className="header-item"
        >
          About Us
        </div>
        <div
          onClick={() => {
            history.replace("/contact");
            console.log("clicked on contact");
          }}
          className="header-item"
        >
          Contact
        </div>
        <div
          onClick={() => {
            history.replace("/help");
            console.log("clicked on help");
          }}
          className="header-item"
        >
          Help
        </div>
        <div
          onClick={() => {
            history.replace("/");
            window.location.reload();
          }}
          className="header-item"
        >
          Logout
        </div>
      </div>
    </div>
  );
}

export default Navbar;
