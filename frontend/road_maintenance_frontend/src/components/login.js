import React from "react";
import logo from "../starbucks-logo-4.png";
import "./login.css";

function Login(props) {
	return (
		<div className="login-container">
			<div className="form-signin text-center">
				<form>
					<img class="mb-4" src={logo} alt="" width="100" height="100" />
					<h1 class="h3 mb-3 fw-normal">Please sign in</h1>
					
					<div class="form-floating">
						<input
							type="email"
							class="form-control"
							id="floatingInput"
							placeholder="name@example.com"
						/>
						<label for="floatingInput">Email address</label>
					</div>
					<div class="form-floating">
						<input
							type="password"
							class="form-control"
							id="floatingPassword"
							placeholder="Password"
						/>
						<label for="floatingPassword">Password</label>
					</div>
					<button class="w-100 btn mt-3 btn-lg btn-primary" type="submit">
						Sign in
					</button>
					<p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
				</form>
			</div>
		</div>
	);
}

export default Login;
