import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header";
import Atyourservice from "../components/Homepage/Atyourservice";
import Ourservice from "../components/Homepage/Ourservice";
import Footer from "../components/Footer";
import "../components/Homepage/HomepageCSS.css";
import NavbarLoggedIn from "../components/Navbar/NavbarLoggedIn";

const Homepage = (props) => {
	const isLoggedIn = Object.keys(props.user).length !== 0;

	return (
		<div>
			{!isLoggedIn ? (
				<Navbar />
			) : (
				<NavbarLoggedIn user={props.user} onLogout={props.onLogout} />
			)}
			<Header />
			<Atyourservice />
			<Ourservice isLoggedIn={isLoggedIn} />
			<Footer />
		</div>
	);
};

export default Homepage;
