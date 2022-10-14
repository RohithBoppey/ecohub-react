import React from "react";
// import Cars from "./Cars";
import UpcomingCars from "./UpcomingCars";
import Navbarloggedin from "../../components/Navbar/NavbarLoggedIn";
import RegisterFooter from "../../components/Login_Signup/RegisterFooter";
import "./ev-list.css";

const Evpage = () => {
	return (
		<>
			<Navbarloggedin />
			{/* <Cars/> */}
			<div className="evbody_final">
				<UpcomingCars />
				<RegisterFooter />
			</div>
		</>
	);
};

export default Evpage;
