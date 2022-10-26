import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header";
import Atyourservice from "../components/Homepage/Atyourservice";
import Ourservice from "../components/Homepage/Ourservice";
import Footer from "../components/Footer";
import "../components/Homepage/HomepageCSS.css";
import NavbarLoggedIn from "../components/Navbar/NavbarLoggedIn";

const Homepage = (props) => {
	return (
		<div>
			{Object.keys(props.user).length === 0 ? (
				<Navbar />
			) : (
				<NavbarLoggedIn user={props.user} />
			)}
			<Header />
			<Atyourservice />
			<Ourservice />
			<Footer />
		</div>
	);
};

export default Homepage;
