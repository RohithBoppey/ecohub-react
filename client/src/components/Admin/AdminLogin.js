import React from "react";

import "./adLogin.css";

const AdminLogin = () => {
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
								method="post"
								action="/admin">
								<div className="form-group">
									<label className="form-control-label label">
										USERNAME &nbsp;&nbsp;&nbsp;
									</label>
									<input
										type="text"
										className="form-control ad_login"
										name="username"></input>
								</div>
								<div className="form-group">
									<label className="form-control-label ad_password label">
										PASSWORD &nbsp;&nbsp;&nbsp;
									</label>
									<input
										type="password"
										className="form-control"
										name="password"></input>
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
