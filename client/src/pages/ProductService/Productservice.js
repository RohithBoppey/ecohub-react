import React, { useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import RegisterFooter from "../../components/Login_Signup/RegisterFooter";
import "./ProductServicePage.css";
import AnimatedLeafIcon from "../../components/Animated Leaf Icon final.jpg";
import { sendMessageToAdmin } from "../../util/utils";
import { useNavigate } from "react-router-dom";

const Productservice = (props) => {
	console.log(props);

	const navigate = useNavigate();

	const queryRef = useRef();
	const productIDRef = useRef();
	const phoneNumberRef = useRef();
	const useremailRef = useRef();
	const fullnameRef = useRef();

	const submitHandler = async (event) => {
		event.preventDefault();
		const details = {
			userId: props.user.id,
			fullname: fullnameRef.current.value,
			typeofQuery: "Product Service",
			query: `(ID : ${productIDRef.current.value})\nIssue: ${queryRef.current.value}`,
			useremail: useremailRef.current.value,
		};

		// sending the details to backend admin messages
		await sendMessageToAdmin(details);
		navigate("/");
	};

	return (
		<>
			<Navbar />
			<div className=" container contact-form">
				<div className="contact-image">
					<img src={AnimatedLeafIcon} alt="rocket_contact" />
				</div>
				<form onSubmit={submitHandler}>
					<h3>Please enter the Product Details</h3>
					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<textarea
									name="query"
									className="form-control"
									placeholder="Please explain your concern *"
									style={{ width: "100%", height: "400px" }}
									required
									ref={queryRef}></textarea>
							</div>
						</div>

						<div className="col-md-6">
							<div className="form-group">
								<input
									type="text"
									name="name"
									className="form-control"
									defaultValue={props.user.fullname}
									ref={fullnameRef}
									required
									autoComplete="off"
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									name="email"
									className="form-control"
									defaultValue={props.user.useremail}
									ref={useremailRef}
									required
									disabled={true}
									readOnly={true}
									id="email"
									autoComplete="off"
								/>
							</div>

							<div className="form-group">
								<input
									type="text"
									name="phone"
									className="form-control"
									defaultValue={props.user.phoneNumber}
									ref={phoneNumberRef}
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
									ref={productIDRef}
									required
									autoComplete="off"
								/>
							</div>
							<br />
							<h6>You can upload images if you have any:</h6>
							<div className="item-wrapper one">
								<div className="item">
									<input
										type="file"
										id="file-upload"
										multiple
										accept="image/*"
									/>
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
