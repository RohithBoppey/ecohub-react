import React from "react";

import "../CabService/CabServiceCSS.css";
import NavbarLoggedIn from "../../components/Navbar/NavbarLoggedIn";
import CabRequest from "../../components/Cab Service/CabRequest";
import CabPrices from "../../components/Cab Service/CabPrices";

const Cabservice = () => {
	return (
		<>
			<NavbarLoggedIn />
			<CabRequest />
			<CabPrices />
		</>
	);
};

export default Cabservice;
