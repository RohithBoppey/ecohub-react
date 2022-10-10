import React from "react";

import '../../components/Login_Signup/signup_css.css';

const Signin = () => {
	return (
		<div>
			<div class="container signup_body">
				<div class="row">
					<div class="col-lg-10 col-xl-9 mx-auto">
						<div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
							<div class="card-img-left d-none d-md-flex"></div>
							<div class="card-body p-4 p-sm-5">
								<h5 class="card-title text-center mb-5 fw-light fs-5">
									Login
								</h5>

								<form
									action="/signin"
									method="post"
									autocomplete="off">
									{/* <div class="form-floating mb-3">
										<input
											type="text"
											class="form-control"
											id="floatingInputUsername"
											placeholder="myusername"
											required
											autofocus
										/>
										<label for="floatingInputUsername">
											Username
										</label>
									</div> */}

									<div class="form-floating mb-3">
										<input
											type="email"
											class="form-control"
											id="floatingInputEmail"
											placeholder="name@example.com"
											name="email"
										/>
										<label for="floatingInputEmail">
											Email address <span>*</span>
										</label>
									</div>

									<hr />

									<div class="form-floating mb-3">
										<input
											type="password"
											class="form-control"
											id="floatingPassword"
											placeholder="Password"
											name="password"
										/>
										<label
											for="floatingPassword"
											required
											pattern=".{8,}"
											title="Minimum 8 required">
											Password <span>*</span>
										</label>
									</div>

									<div class="d-grid mb-2">
										<button
											class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
											type="submit">
											Login
										</button>
									</div>

									<a
										class="d-block text-center mt-2 small"
										href="/register">
										Don't Have an account? Register
									</a>
									<hr class="my-4" />

									<div class="d-grid mb-2">
										<button
											class="btn btn-lg btn-google btn-login fw-bold text-uppercase"
											type="submit">
											<i class="fab fa-google me-2"></i>{" "}
											Log in with Google
										</button>
									</div>

									<div class="d-grid">
										<button
											class="btn btn-lg btn-facebook btn-login fw-bold text-uppercase"
											type="submit">
											<i class="fab fa-facebook-f me-2"></i>{" "}
											Log in with Facebook
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signin;
