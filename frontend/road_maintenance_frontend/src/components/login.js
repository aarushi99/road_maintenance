import React from "react";
import logo from "../logo.png";
import "./login.css";

function Login() {
	return (
		<div className="login">
			<div className="login-container">
				<img src={logo} alt="Logo" />
				<h1>Sign in to Road Management System</h1>
				<p>Managing roads for the 'The City Beautiful'</p>
				<button onClick={console.log("LOGIN")} >Sign In</button>
				<button onClick={console.log("LOGOUT")}>Sign Up</button>
			</div>
		</div>
	);
}

export default Login;
