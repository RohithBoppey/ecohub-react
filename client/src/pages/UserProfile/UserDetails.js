import React from "react";

import "./user-profile.css";

const UserDetails = (props) => {
	// console.log(props)
	return (
		<div>
			<div class="container middle">
				<div class="outer">
					<div
						id="userprofilepage"
						class="profile-nav col-md-14 middle">
						<div class="panel">
							<div class="container user-heading round">
								<a href="#">
									<img
										src={props.user.avatar}
										alt="User-image"
										class="profileImage"
									/>
								</a>

								<h1 style={{ fontSize: 28 }}>
									<br />
									{props.user.fullname}
								</h1>
								<p>{props.user.id}</p>
							</div>
						</div>

						<div>
							<h1 style={{ textAlign: "center", fontSize: 50 }}>
								<b>User details</b>
							</h1>
							<div class="row">
								<div>
									<h5 style={{ textAlign: "center" }}>
										{props.user.username}
									</h5>
								</div>
								<div>
									<h5 style={{ textAlign: "center" }}>
										{props.user.fullname}
									</h5>
								</div>
								<div>
									<h5 style={{ textAlign: "center" }}>
										{props.user.cityname}, India.
									</h5>
								</div>

								<div>
									<h5 style={{ textAlign: "center" }}>
										{props.user.useremail}
									</h5>
								</div>

								<div style={{ textAlign: "center" }}>
									<br />
									<button
										type="button"
										class="btn btn-outline-primary">
										<a
											href="/update-profile"
											style={{ textDecoration: "none" }}>
											Update Profile
										</a>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer class="bg-light pb-5">
				<div class="container text-center">
					<p class="font-italic text-muted mb-0">
						&copy; Ecohub.com All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default UserDetails;
