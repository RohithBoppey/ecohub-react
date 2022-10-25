import React from "react";
import "./adminAddUser.css";

const AddUser = () => {
	return (
		<>
			<form action="/admin/adduser" method="post" autocomplete="off">
				<div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
					<div className="wrapper wrapper--w680">
						<div
							className="card card-4"
							style={{ width: "max-content" }}>
							<div className="card-body">
								<h2 className="title">
									<b>Registration Form</b>
								</h2>
								<form
									method="post"
									action="/admin/adduser"
									autocomplete="off">
									<div className="row row-space">
										<div className="col-2">
											<div className="input-group">
												<label className="label12">
													Username
												</label>
												<input
													className="input12 input--style-4"
													type="text"
													name="username"></input>
											</div>
										</div>
										<div className="col-2">
											<div className="input-group">
												<label className="label12">
													Full Name
												</label>
												<input
													className="input12 input--style-4"
													type="text"
													name="fullname"></input>
											</div>
										</div>
									</div>
									<div className="row row-space">
										<div className="col-2">
											<div className="input-group">
												<label className="label12">
													Email ID
												</label>
												<input
													className="input12 input--style-4"
													type="email"
													name="email"></input>
											</div>
										</div>
										<div className="col-2">
											<div
												className="input-group"
												style={{ display: "block" }}>
												<label className="label12">
													Gender
												</label>
												<div className="p-t-10">
													<label className="radio-container m-r-45">
														Male
														<input
															type="radio"
															checked="checked"
															name="gender"
															value="Male"></input>
														<span className="checkmark"></span>
													</label>
													<label className="radio-container">
														Female
														<input
															type="radio"
															name="gender"
															value="Female"></input>
														<span className="checkmark"></span>
													</label>
												</div>
											</div>
										</div>
									</div>
									<div className="row row-space">
										<div className="col-2">
											<div className="input-group">
												<label className="label12">
													Phone Number
												</label>
												<input
													className="input12 input--style-4"
													type="tel"
													name="phonenumber"></input>
											</div>
										</div>
										<div className="col-2">
											<div className="input-group">
												<label className="label12">
													City
												</label>
												<input
													className="input12 input--style-4"
													type="text"
													name="city"></input>
											</div>
										</div>
									</div>
									<div className="row row-space">
										<div className="col">
											<div className="input-group">
												<label className="label12">
													Password
												</label>
												<input
													className="input12 input--style-4"
													type="password"
													name="password"></input>
											</div>
										</div>
									</div>
									<div className="row row-space">
										<div className="col">
											<div className="input-group">
												<label className="label12">
													Address
												</label>
												<input
													className="input12 input--style-4"
													type="text"
													name="address"></input>
											</div>
										</div>
									</div>
									<div className="p-t-15">
										<button
											className="card-4 adubutton btn1 btn--radius-2 btn--blue "
											type="submit">
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default AddUser;
