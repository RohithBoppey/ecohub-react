import React from "react";
import Cabprices from "../CabService/Cabprices";
import Cabrequest from "../CabService/Cabrequest";
import "../CabService/CabServiceCSS.css";
import Navbarloggedin from "../../components/Navbar/Navbarloggedin";

const Cabservice = () => {
	return (
		<>
			<Navbarloggedin />
			<Cabrequest />
			<Cabprices />
		</>
	);
};

export default Cabservice;
