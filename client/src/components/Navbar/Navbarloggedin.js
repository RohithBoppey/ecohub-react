import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLoggedIn = () => {
	return (
		<>
			{/* {classes.navbar + classeses.navbar-expand + class} */}
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
							<NavLink className="nav-link" to="/about_us">
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/#services">
								Our services
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/faq">
								FAQ's
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/faq">
								Contact us
							</NavLink>
						</li>
						<li className="dropdown">
							{/* <NavLink to="#" data-toggle="dropdown" className="dropdown-toggle user-action"><img
                              src="<%= user.img_url %>"
                              className="avatar" alt="Avatar"> <%= user.username %>   <b className="caret"></b></NavLink> */}
							<ul className="dropdown-menu">
								<li>
									<NavLink to="/user-profile">
										<i className="fa fa-user-o"></i> Profile
									</NavLink>
								</li>
								<li>
									<NavLink to="/show-cart">
										<i className="fa fa-shopping-cart"></i>{" "}
										Your Cart
									</NavLink>
								</li>
								<li>
									<NavLink to="/update-profile">
										<i className="fa fa-sliders"></i>{" "}
										Settings
									</NavLink>
								</li>
								<li className="divider"></li>
								<li>
									<NavLink to="/">
										<i className="fas fa-door-open"></i>{" "}
										Logout
									</NavLink>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default NavbarLoggedIn;
