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
		<div class="adminbody">
			{/* <div class="container"> */}
			<div class="row">
				<div class="col-lg-3 col-md-2"></div>
				<div class="col-lg-6 col-md-8 login-box">
					<div class="col-lg-12 login-key">
						<i class="fa fa-key" aria-hidden="true"></i>
					</div>
					<div class="col-lg-12 login-title">ADMIN PANEL</div>

					<div class="col-lg-12 login-form middle">
						<div class="col-lg-12 login-form">
							<form
								autoComplete="off"
								onSubmit={submitHandler}>
								<div class="form-group">
									<label class="form-control-label ad_label">
										USERNAME &nbsp;&nbsp;&nbsp;
									</label>
									<input
										type="text"
										class="form-control_ad ad_input"
										name="username"
										ref={usernameRef}></input>
								</div>
								<div class="form-group">
									<label class="form-control-label ad_label">
										PASSWORD &nbsp;&nbsp;&nbsp;
									</label>
									<input
										type="password"
										class="form-control_ad ad_input"
										name="password"
										ref={passwordRef}></input>
								</div>

								<div class="col-lg-12 loginbttm middle login-btm login-button">
									{/* <div class="col-lg-6 login-btm login-text">
                                        </div> */}
									{/* <div class="col-lg-6 login-btm login-button"> */}
									<button
										type="submit"
										class="btn btn-outline-primary">
										LOGIN
									</button>
									{/* </div> */}
								</div>
							</form>
						</div>
					</div>
					<div class="col-lg-3 col-md-2"></div>
				</div>
			</div>
		</div>
		// </div>
	);
};

export default AdminLogin;
