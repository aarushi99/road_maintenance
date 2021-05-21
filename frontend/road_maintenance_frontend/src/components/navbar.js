import React from "react";
import "./navbar.css";

function navbar(props) {
	return (
		<div className="header">
			<div className="header-title header-item">
				MC Road Maintainence System
			</div>
			<div className="header-item">About Us</div>
			<div className="header-item">Contact</div>
			<div className="header-item">Help</div>
			<div className="header-item">Logout</div>
		</div>
	);
}

export default navbar;
