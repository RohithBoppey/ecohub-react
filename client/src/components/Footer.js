import React from "react";

const Footer = () => {
	return (
		<>
			<div style={{ "text-align": "center" }}>
				<a href="/register">
					<button
						style={{
							"text-align": "center",
							color: "whitesmoke",
							"font-size": "2rem",
							"font-weight": "600",
							"background-color": "greenyellow",
							padding: "0 1rem",
							"border-radius": "30px",
						}}
						className="btn btn-outline-success my-2 my-sm-0"
						type="submit">
						Join us
					</button>
				</a>
			</div>
			<br />
			<br />
			<h1 style={{ color: "black", "text-align": "center" }}>
				<b>Visit our socials</b>
			</h1>
			<br />
			<div id="contact-info">
				<div className="links">
					<a
						href="https://www.linkedin.com"
						target="_blank"
						rel="noreferrer">
						<div>
							<span>
								<i className="fab fa-linkedin-in"></i>
							</span>
						</div>
					</a>
					<a
						href="https://github.com"
						target="_blank"
						rel="noreferrer"
						className="orange-shadow">
						<div>
							<span>
								<i className="fab fa-github"></i>
							</span>
						</div>
					</a>
					<a
						href="https://www.facebook.com"
						className="orange-border"
						target="_blank"
						rel="noreferrer">
						<div>
							<span></span>
							<span>
								<i className="fab fa-facebook-f"></i>
							</span>
						</div>
					</a>
					<a
						href="https://www.instagram.com"
						className="orange-background"
						target="_blank"
						rel="noreferrer">
						<div>
							<span></span>
							<span>
								<i className="fab fa-instagram"></i>
							</span>
						</div>
					</a>
				</div>
			</div>
			<br /> <br />
			<br />
		</>
	);
};

export default Footer;
