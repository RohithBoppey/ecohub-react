import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./showdata.css";

const ShowUserData = (props) => {
	const Rows = [
		"Username",
		"Full Name",
		"Email",
		"Gender",
		"Mobile Number",
		"Address",
		"City",
		"Delete",
	];

	const generateRows = () => {
		const allRows = Rows.map((row) => {
			return (
				<th className="th-sd">
					<b className="b-sd">{row}</b>
				</th>
			);
		});
		return allRows;
	};

	return (
		<>
			<br></br>
			<br></br>
			<h2 className="h2-sd">Customer Details :</h2>
			<br></br>
			<div className="alcenter">
				<table border="2px black" className="table-sd table-hover">
					<tr className="tr-sd">{generateRows()}</tr>
					{props.users.map((user) => {
						return (
							<tr className="tr-sd">
								<th className="th-sd">{user.username}</th>
								<th className="th-sd">{user.fullname}</th>
								<th className="th-sd">{user.useremail}</th>
								<th className="th-sd">{user.gender}</th>
								<th className="th-sd">{user.phoneNumber}</th>
								<th className="th-sd">{user.address}</th>
								<th className="th-sd">{user.cityname}</th>
								<th className="th-sd">
									<a href="/admin/deleteuser/<%= cust._id %>">
										<center>
											<button
												name="delete"
												type="submit"
												className="btn btn-outline-primary button-sd">
												Delete
											</button>
										</center>
									</a>
								</th>
							</tr>
						);
					})}
				</table>
			</div>
		</>
	);
};

export default ShowUserData;
