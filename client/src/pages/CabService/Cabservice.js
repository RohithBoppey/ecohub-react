import React from "react";

import "../CabService/CabServiceCSS.css";

import CabRequest from "../../components/Cab Service/CabRequest";
import CabPrices from "../../components/Cab Service/CabPrices";
import Navbar from "../../components/Navbar/Navbar";
import NavbarLoggedIn from "../../components/Navbar/NavbarLoggedIn";

import { useSelector } from "react-redux";

const Cabservice = (props) => {

	const isLoggedIn = useSelector((state) => state.userIsLoggedIn);

	console.log(isLoggedIn)

	return (
		<>
			{isLoggedIn === false ? (
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
