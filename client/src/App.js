import Error from "./components/Error";
import HomePage from "./pages/Homepage";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import ArticlesPage from "./pages/Articles/ArticlesPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import ContactSalesManager from "./pages/Contact Sales Manager/ContactSalesManager";
import AdminLoginPage from "./pages/Admin/AdminLoginPage";
import FAQpage from "./pages/FaqPage/FAQpage";
import Cabservice from "./pages/CabService/Cabservice";
import Productservice from "./pages/ProductService/Productservice";
import Evpage from "./pages/Electricvehicles/Evpage";
import AdminHome from "./pages/Admin/AdminHome";
import AdminAddUser from "./pages/Admin/AdminAddUser";
import ElectricCarDetails from "./pages/ElectricVehicleDetails/ElectricCarDetails";
import { useState } from "react";
import Signin from "./pages/Signin";
import UserDetails from "./pages/UserProfile/UserDetails";

function App() {
	const [userDetails, setUserDetails] = useState({});
	const navigate = useNavigate();

	const onRegisterSign = async (details) => {
		// console.log(details);
		const allUsers = await fetch("http://localhost:3001/users");
		const allUsersJson = await allUsers.json();
		// console.log(allUsersJson);
		const requiredUser = allUsersJson.filter(
			(user) =>
				user.useremail === details.useremail &&
				user.password === details.password
		);
		// console.log(requiredUser);
		setUserDetails(requiredUser[0]);
		navigate("/");
	};

	return (
		<Routes>
			<Route path="/" element={<HomePage user={userDetails} />} exact />
			<Route
				path="/user-profile"
				element={<UserDetails user={userDetails} />}
				exact
			/>
			<Route path="/error" element={<Error />} exact />
			<Route
				path="/register"
				element={<Register onRegister={onRegisterSign} />}
				exact
			/>
			<Route
				path="/signin"
				element={<Signin onSignin={onRegisterSign} />}
				exact
			/>
			<Route
				path="/about_us"
				element={<AboutUsPage user={userDetails} />}
				exact
			/>
			<Route
				path="/articles"
				element={<ArticlesPage user={userDetails} />}
				exact
			/>
			<Route path="/faq" element={<FAQpage user={userDetails} />} exact />
			<Route
				path="/cabservice"
				element={<Cabservice user={userDetails} />}
				exact
			/>
			<Route
				path="/productservice"
				element={<Productservice user={userDetails} />}
				exact
			/>
			<Route path="/ev_cars" element={<Evpage user={userDetails} />}>
				{/* <Route
						path=":name"
						element={<ElectricCarDetails />}
						exact
					/> */}
			</Route>
			<Route
				path="/ev_cars/:name"
				element={<ElectricCarDetails user={userDetails} />}
				exact
			/>
			{/* <Route path='/electric-products' element={<ElectricProductsPage />} exact/> */}
			<Route
				path="/contact_sm"
				element={<ContactSalesManager user={userDetails} />}
				exact
			/>

			{/* Admin Section */}
			<Route path="/admin/login" element={<AdminLoginPage />} exact />
			<Route path="/admin/home" element={<AdminHome />} exact />
			<Route path="/admin/adduser" element={<AdminAddUser />} exact />

			{/* Error if no page is found */}
			<Route path="*" element={<Error />} exact />
		</Routes>
	);
}

export default App;
