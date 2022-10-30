import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import NavbarLoggedIn from "../../components/Navbar/NavbarLoggedIn";
import { sendMessageToAdmin } from "../../util/utils";

import "./ContactSM.css";

import guyPhoto from "./guy.png";

const ContactSalesManager = (props) => {
	const queryRef = useRef();

	const isLoggedIn = Object.keys(props.user).length !== 0;

	const navigate = useNavigate();

	const submitHandler = async (event) => {
		event.preventDefault();
		const details = {
			userId: props.user.id,
			fullname: props.user.fullname,
			typeofQuery: "Contact Sales Manager",
			query: queryRef.current.value,
			useremail: props.user.useremail,
		};
		
		// sending the details to backend admin messages
		await sendMessageToAdmin(details);
		navigate("/");
	};

	return (
		<div>
			{!isLoggedIn ? (
				<Navbar />
			) : (
				<NavbarLoggedIn user={props.user} onLogout={props.onLogout} />
			)}
			<div class="column left">
				<h1 style={{ fontSize: 50, paddingTop: 60 }}>Get a demo</h1>
				<p class="p0">Fill in the following details: </p>
				<form onSubmit={submitHandler}>
					<input
						type="text"
						placeholder="Name"
						value={props.user.fullname}
						id="name"
						name="name"
						class="input"
						autoComplete="off"
						readOnly="true"
						disabled="true"
						required></input>
					<input
						type="text"
						placeholder="Your query here"
						id="query"
						name="query"
						class="input"
						ref={queryRef}
						autoComplete="off"
						required></input>
					<input
						type="text"
						placeholder="Email"
						id="email"
						name="email"
						class="input"
						readOnly="true"
						disabled="true"
						value={props.user.useremail}
						autoComplete="off"
						required></input>
					<input
						type="text"
						placeholder="Phone"
						id="phone"
						name="phone"
						class="input"
						readOnly="true"
						disabled="true"
						value={props.user.phoneNumber}
						autoComplete="off"
					/>
					<br />
					<br />
					<button type="submit" class="submit">
						Submit
					</button>
				</form>
			</div>
			<div class="column right" style={{ backgroundColor: "#c5ead8" }}>
				<p class="p1">
					You can contact our highly trained marketing and sales agent
					regarding queries about not only electric products and
					vehicles, but also services for electric products completely
					for free!
				</p>
				<div class="container-csm">
					<div class="row">
						<div class="col-md-4">
							<img src={guyPhoto} class="img1" alt="alt"></img>
						</div>
						<div class="col-md-8">
							<div class="row">
								<h4>Mikkel Smith</h4>
							</div>
							<h5>Sales Manager</h5>
						</div>
					</div>
				</div>
				<p class="p2">
					Make sure you ask all your doubts now and here and Welcome
					to the world of ECOHUB! 💖
				</p>
			</div>
		</div>
	);
};

export default ContactSalesManager;
