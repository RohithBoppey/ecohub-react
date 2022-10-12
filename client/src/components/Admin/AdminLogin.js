import React from "react";

import "./adLogin.css";

const AdminLogin = () => {
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
								autocomplete="off"
								method="post"
								action="/admin">
								<div class="form-group">
									<label class="form-control-label">
										USERNAME &nbsp;&nbsp;&nbsp;
									</label>
									<input
										type="text"
										class="form-control"
										name="username"></input>
								</div>
								<div class="form-group">
									<label class="form-control-label">
										PASSWORD &nbsp;&nbsp;&nbsp;
									</label>
									<input
										type="password"
										class="form-control"
										name="password"></input>
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
