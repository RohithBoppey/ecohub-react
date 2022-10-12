import React from "react";

const AdminHome = () => {
	return (
		<div>
			<center>
				<h1>Admin Dashboard</h1>
			</center>

			<div class="container">
				<div class="row">
					<div class="col">
						<div
							class="card text-dark bg-info mb-3"
							style={{ maxWidth: "22rem" }}>
							<center>
								<div class="card-header">Customers</div>
							</center>
							<div class="card-body">
								<center>
									<h5 class="card-title">5</h5>
								</center>
							</div>
						</div>
					</div>
					<div class="col">
						<div
							class="card text-dark bg-light mb-3"
							style={{ maxWidth: "22rem" }}>
							<center>
								<div class="card-header">Products</div>
							</center>
							<div class="card-body">
								<center>
									<h5 class="card-title">24</h5>
								</center>
							</div>
						</div>
					</div>
					<div class="col">
						<div
							class="card text-white bg-dark mb-3"
							style={{ maxWidth: "22rem" }}>
							<center>
								<div class="card-header">Services</div>
							</center>
							<div class="card-body">
								<center>
									<h5 class="card-title">8</h5>
								</center>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminHome;
