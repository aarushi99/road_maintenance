import React from "react";

import "./Auth.css";

const auth = (props) => (
	<div className="main-login-container">
		<section className="auth-form">{props.children}</section>
	</div>
);

export default auth;
