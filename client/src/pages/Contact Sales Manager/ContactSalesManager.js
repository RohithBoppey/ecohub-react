import React from "react";
import Navbarloggedin from "../../components/Navbar/Navbarloggedin";

import './ContactSM.css';

import guyPhoto from './guy.png';

const ContactSalesManager = () => {
	return (
		<div>
			<Navbarloggedin />
			<div class="column left">
				<h1 style={{ fontSize: 50, paddingTop: 60 }}>Get a demo</h1>
				<p class="p0">Fill in the following details: </p>
				<form method="post" action="/sm/message">
					<input
						type="text"
						placeholder="Name"
						id="name"
						name="name"
						class="input"
						autoComplete="off"
						required></input>
					<input
						type="text"
						placeholder="Your query here"
						id="query"
						name="query"
						class="input"
						autoComplete="off"
						required></input>
					<input
						type="text"
						placeholder="Email"
						id="email"
						name="email"
						class="input"
						autoComplete="off"
						required></input>
					<input
						type="text"
						placeholder="Phone"
						id="phone"
						name="phone"
						class="input"
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
				<div class="container1">
					<div class="row">
						<div class="col-md-4">
							<img src={guyPhoto} class="img"></img>
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
