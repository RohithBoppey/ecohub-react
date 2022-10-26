import React from "react";
import AdminNavbar from "../../components/Admin/Navbar/Navbar";

const AdminHome = (props) => {
	return (
		<>
		<AdminNavbar onLogout = {props.onLogout}/>
		<div style={{paddingTop : '10%'}}>
			<center>
				<h1>Admin Dashboard</h1>
			</center>

			<div className="container" style={{paddingTop:'5%'}}>
				<div className="row">
					<div className="col">
						<div
							className="card text-dark bg-info mb-3"
							style={{ maxWidth: "22rem"}}>
							<center>
								<div className="card-header">Customers</div>
							</center>
							<div className="card-body">
								<center>
									<h5 className="card-title">5</h5>
								</center>
							</div>
						</div>
					</div>
					<div className="col">
						<div
							className="card text-dark bg-light mb-3"
							style={{ maxWidth: "22rem",marginLeft : '13%' }}>
							<center>
								<div className="card-header">Products</div>
							</center>
							<div className="card-body">
								<center>
									<h5 className="card-title">24</h5>
								</center>
							</div>
						</div>
					</div>
					<div className="col">
						<div
							className="card text-white bg-dark mb-3"
							style={{ maxWidth: "22rem",marginLeft:'20%' }}>
							<center>
								<div className="card-header">Services</div>
							</center>
							<div className="card-body">
								<center>
									<h5 className="card-title">8</h5>
								</center>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default AdminHome;
