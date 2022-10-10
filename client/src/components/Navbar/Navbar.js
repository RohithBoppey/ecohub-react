import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark defaultNavbar">
				<NavLink className="navbar-brand" to="/">
					ECOHUB
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav mx-auto">
						<li className="nav-item active">
							<NavLink className="nav-link" to="/register">
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/#services">
								Our services
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/register">
								FAQ's
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/register">
								Contact us
							</NavLink>
						</li>
					</ul>
					<NavLink to="/register" className="nav-link">
						<button
							class="btn btn-outline-success my-2 my-sm-0"
							type="submit">
							Join us
						</button>
					</NavLink>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
