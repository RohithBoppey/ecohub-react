import React, { useEffect, useRef } from "react";
// import axios from "axios";
import "./adLogin.css";

const AdminLogin = (props) => {

	const submitHandler = (event) => {
		event.preventDefault();
		const details = {
			username: usernameRef.current.value,
			password: passwordRef.current.value
		}
		props.onSignin(details)
	};

	const usernameRef = useRef();
	const passwordRef = useRef();

	return (
		<>hello</>
	);
};

export default AdminLogin;
