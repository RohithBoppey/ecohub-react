import React, { useEffect, useRef } from "react";
// import axios from "axios";
// import "./adLogin.css";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
	const nav = useNavigate();
	useEffect(() => {
		if(localStorage.getItem("adminLoggedIn") == 'true'){
			nav('/admin/home');
		}
	}, [])
	
	const submitHandler = (event) => {
		event.preventDefault();
		localStorage.setItem("adminLoggedIn", 'true');
		window.location.reload();
	};

	const usernameRef = useRef();
	const passwordRef = useRef();

	return (
		<div className="adminbody ">
			{/* <div className="container"> */}
			<div className="row">
				<div className="col-lg-3 col-md-2"></div>
				<div className="col-lg-6 col-md-8 login-box">
					<div className="col-lg-12 login-key">
						<i className="fa fa-key" aria-hidden="true"></i>
					</div>
					<div className="col-lg-12 login-title">ADMIN PANEL</div>

					<div className="col-lg-12 login-form middle">
						<div className="col-lg-12 login-form">
							<form
								autoComplete="off"
<<<<<<< HEAD
								onSubmit={submitHandler}>
								<div class="form-group">
									<label class="form-control-label ad_label">
=======
								method="post"
								action="/admin">
								<div className="form-group">
									<label className="form-control-label label">
>>>>>>> 90f34c418e54811a12d795f91645c23ee5311651
										USERNAME &nbsp;&nbsp;&nbsp;
									</label>
									<input
										type="text"
<<<<<<< HEAD
										class="form-control_ad ad_input"
										name="username"
										ref={usernameRef}></input>
								</div>
								<div class="form-group">
									<label class="form-control-label ad_label">
=======
										className="form-control ad_login"
										name="username"></input>
								</div>
								<div className="form-group">
									<label className="form-control-label ad_password label">
>>>>>>> 90f34c418e54811a12d795f91645c23ee5311651
										PASSWORD &nbsp;&nbsp;&nbsp;
									</label>
									<input
										type="password"
<<<<<<< HEAD
										class="form-control_ad ad_input"
										name="password"
										ref={passwordRef}></input>
=======
										className="form-control"
										name="password"></input>
>>>>>>> 90f34c418e54811a12d795f91645c23ee5311651
								</div>

								<div className="col-lg-12 loginbttm middle login-btm login-button">
									{/* <div className="col-lg-6 login-btm login-text">
                                        </div> */}
									{/* <div className="col-lg-6 login-btm login-button"> */}
									<button
										type="submit"
										className="btn btn-outline-primary">
										LOGIN
									</button>
									{/* </div> */}
								</div>
							</form>
						</div>
					</div>
					{/* <div className="col-lg-3 col-md-2"><h1></h1></div> */}
				</div>
			</div>
			<div className="row">

				</div>
		</div>
		// </div>
	);
};

export default AdminLogin;
