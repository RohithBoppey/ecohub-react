import React from "react";
import "./FAQcss.css";
import Navbarloggedin from "../../components/Navbar/NavbarLoggedIn";
import LeafImage from './Mail Green.png';

const FAQpage = () => {
	return (
		<>
			<Navbarloggedin />
			<div className="mainTitle">
				See the Frequently asked questions here:
			</div>

			<br />
			<div className="container faqBox">
				<div
					className="accordion accordion-flush"
					id="accordionFlushExample">
					<div className="accordion-item">
						<h2 className="accordion-header" id="flush-headingOne">
							<button
								className="accordion-button collapsed faqQuestion"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseOne"
								aria-expanded="false"
								aria-controls="flush-collapseOne">
								Why ECOHUB?
							</button>
						</h2>
						<div
							id="flush-collapseOne"
							className="accordion-collapse collapse"
							aria-labelledby="flush-headingOne"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body faqAnswer">
								ECOHUB itself is the idea which ponders on the
								pure electric-ness of the world, which primarily
								indicates go green!
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="flush-headingTwo">
							<button
								className="accordion-button collapsed faqQuestion"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseTwo"
								aria-expanded="false"
								aria-controls="flush-collapseTwo">
								What is our aim?
							</button>
						</h2>
						<div
							id="flush-collapseTwo"
							className="accordion-collapse collapse"
							aria-labelledby="flush-headingTwo"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body faqAnswer">
								Our aim is to enhance the usage of green
								products and to bring out much colour to our
								life.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2
							className="accordion-header"
							id="flush-headingThree">
							<button
								className="accordion-button collapsed faqQuestion"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseThree"
								aria-expanded="false"
								aria-controls="flush-collapseThree">
								How are we different from others?
							</button>
						</h2>
						<div
							id="flush-collapseThree"
							className="accordion-collapse collapse"
							aria-labelledby="flush-headingThree"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body faqAnswer">
								We are a lot different when compared to others,
								could be idea, could be the implementation of
								the idea, we strive to be unique from the rest
								of our competitors.
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="contact1" id="FAQ_contactUs">
				<div className="container-contact1">
					<div className="contact1-pic js-tilt" data-tilt>
						<img src={LeafImage} alt="img" />
					</div>

					<form
						className="contact1-form validate-form"
						autocomplete="off"
						method="post"
						action="/con/message">
						<span className="contact1-form-title">
							{" "}
							Try contacting us{" "}
						</span>

						<div
							className="wrap-input1 validate-input"
							data-validate="Name is required">
							<input
								className="input1 input_faq"
								type="text"
								name="name"
								placeholder="Name"
								id="name"
								required
							/>
							<span className="shadow-input1"></span>
						</div>

						<div
							className="wrap-input1 validate-input"
							data-validate="Valid email is required: ex@abc.xyz">
							<input
								className="input1 input_faq"
								type="email"
								name="email"
								placeholder="Email"
								id="email"
								required
							/>
							<span className="shadow-input1"></span>
						</div>

						<div
							className="wrap-input1 validate-input"
							data-validate="Subject is required">
							<input
								className="input1 input_faq"
								type="text"
								name="subject"
								placeholder="Subject"
								id="subject"
								required
							/>
							<span className="shadow-input1"></span>
						</div>

						<div
							className="wrap-input1 validate-input"
							data-validate="Message is required">
							<textarea
								className="input1 input_textarea"
								name="message"
								placeholder="Message"
								id="message"
								required></textarea>
							<span className="shadow-input1"></span>
						</div>

						<div className="container-contact1-form-btn">
							<button
								className="contact1-form-btn"
								onclick="validateForm()">
								<span>
									Send Email
									<i
										className="fa fa-long-arrow-right"
										aria-hidden="true"></i>
								</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default FAQpage;
