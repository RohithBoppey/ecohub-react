import React, { useEffect, useRef } from "react";
// import axios from "axios";
import "./adLogin.css";
import { useNavigate } from "react-router-dom";

const AdminLogin = (props) => {
	const submitHandler = (event) => {
		event.preventDefault();
		const details = {
			username: usernameRef.current.value,
			password: passwordRef.current.value,
		};
		props.onSignin(details);
	};

	const usernameRef = useRef();
	const passwordRef = useRef();

	return (
		<form className="login-ad" action="./" method="POST">
			<div className="content-ad">
				<div className="header-ad">
					<h2>Admin Login</h2>
				</div>
				<label>
					<h5>Email</h5>
				</label>
				<br></br>
				<input
					className="input-ad"
					type="email"
					name="_email"
					placeholder="Email"></input>
				<br></br>
				<br></br>
				<label>
					<h5>Password</h5>
				</label>
				<br></br>
				<input
					className="input-ad"
					type="password"
					name="_password"
					placeholder="Password"></input>
				<button className="button-ad" type="submit">
					Login
				</button>
			</div>
		</form>
		// </div>
	);
};

export default AdminLogin;
