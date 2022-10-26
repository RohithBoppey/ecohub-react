import React from "react";
import ShowProductData from "../../components/Admin/ShowProductData";
import ShowUserData from "../../components/Admin/ShowUserData";
import AdminNavbar from "../../components/Admin/Navbar/Navbar";

const ShowMainData = (props) => {
	return (
		<>
			<AdminNavbar onLogout = {props.onLogout}/>
            <ShowUserData/>
            <ShowProductData/>
		</>
	);
};

export default ShowMainData;
