import React from "react";
import Navbar from "../../components/Navbar/NavbarLoggedIn";
import RegisterFooter from "../../components/Login_Signup/RegisterFooter";
import "./ProductServicePage.css";
import NavbarLoggedIn from "../../components/Navbar/NavbarLoggedIn";
import AnimatedLeafIcon from "../../components/Animated Leaf Icon final.jpg";

const Productservice = (props) => {
	const isLoggedIn = Object.keys(props.user).length !== 0;

	return (
		<>
			{!isLoggedIn ? (
				<Navbar />
			) : (
				<NavbarLoggedIn user={props.user} onLogout={props.onLogout} />
			)}

			<div className=" container contact-form">
				<div className="contact-image">
					<img src={AnimatedLeafIcon} alt="rocket_contact" />
				</div>
				<form
					onsubmit="documentValiation()"
					method="post"
					action="/ps/message">
					<h3>Please enter the Product Details</h3>
					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<textarea
									name="query"
									className="form-control"
									placeholder="Please explain your concern *"
									style={{ width: "100%", height: "400px" }}
									required></textarea>
							</div>
						</div>

						<div className="col-md-6">
							<div className="form-group">
								<input
									type="text"
									name="name"
									className="form-control"
									placeholder="Enter Your Name *"
									required
									autoComplete="off"
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									name="email"
									className="form-control"
									placeholder="Enter Your Email *"
									required
									id="email"
									autoComplete="off"
								/>
							</div>

							<div className="form-group">
								<input
									type="text"
									name="phone"
									className="form-control"
									placeholder="Enter Your Phone Number *"
									id="pno"
									required
									autoComplete="off"
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									name="ID"
									className="form-control"
									placeholder="Enter Your Unique product ID *"
									value=""
									required
									autoComplete="off"
								/>
							</div>
							<br />
							<h6>You can upload images if you have any:</h6>
							<div className="item-wrapper one">
								<div className="item">
									<form
										data-validation="true"
										action="#"
										method="post"
										enctype="multipart/form-data">
										<input
											type="file"
											id="file-upload"
											multiple
											accept="image/*"
										/>
									</form>
								</div>
							</div>
							<div className="form-group">
								<input
									type="submit"
									name="btnSubmit"
									className="btnContact"
									value="Send Message"
								/>
							</div>
						</div>
					</div>
				</form>
			</div>
			<RegisterFooter />
		</>
	);
};

export default Productservice;
