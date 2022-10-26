import React from "react";

import "../CabService/CabServiceCSS.css";

import CabRequest from "../../components/Cab Service/CabRequest";
import CabPrices from "../../components/Cab Service/CabPrices";
import Navbar from "../../components/Navbar/Navbar";
import NavbarLoggedIn from "../../components/Navbar/NavbarLoggedIn";

const Cabservice = (props) => {
	const isLoggedIn = Object.keys(props.user).length !== 0;

	return (
		<>
			{!isLoggedIn ? (
				<Navbar />
			) : (
				<NavbarLoggedIn user={props.user} onLogout={props.onLogout} />
			)}
			<CabRequest />
			<CabPrices />
		</>
	);
};

export default Cabservice;
