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
import { useEffect, useState } from "react";
import Signin from "./pages/Signin";
import UserDetails from "./pages/UserProfile/UserDetails";

function App() {
	const [userDetails, setUserDetails] = useState({});
	const navigate = useNavigate();

	const onSign = async (details) => {
		// console.log(details);
		const allUsers = await fetch("http://localhost:3001/users");
		const allUsersJson = await allUsers.json();
		// console.log(allUsersJson);
		const requiredUser = allUsersJson.filter(
			(user) =>
				user.useremail === details.useremail &&
				user.password === details.password
		);
		console.log(requiredUser);
		setUserDetails(requiredUser[0]);
		localStorage.setItem("ecohub-email", requiredUser[0].useremail);
		navigate("/");
	};

	const onRegister = async (details) => {
		const allUsers = await fetch("http://localhost:3001/users");
		const allUsersJson = await allUsers.json();

		const requiredUser = allUsersJson.filter(
			(user) => user.useremail === details.useremail
		);

		// console.log(requiredUser);

		if (requiredUser.length === 0) {
			// no user exists
			await fetch("http://localhost:3001/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(details),
			});
			setUserDetails(details);
			localStorage.setItem("ecohub-email", details.useremail);
		} else {
			localStorage.setItem("ecohub-email", requiredUser[0].useremail);
			setUserDetails(requiredUser[0]);
		}
		navigate("/");
	};

	const LogoutHandler = () => {
		localStorage.removeItem('ecohub-email');
		setUserDetails({});
	};

	const isLoggedIn = async () => {
		const useremail = localStorage.getItem("ecohub-email");
		if (useremail !== null && useremail !== undefined) {
			console.log(useremail);
			const allUsers = await fetch("http://localhost:3001/users");
			const allUsersJson = await allUsers.json();
			const requiredUser = allUsersJson.filter(
				(user) => user.useremail === useremail
			);
			setUserDetails(requiredUser[0]);
		}
	};

	useEffect(() => {
		isLoggedIn();
	}, []);

	return (
		<Routes>
			<Route
				path="/"
				element={
					<HomePage user={userDetails} onLogout={LogoutHandler} />
				}
				exact
			/>
			<Route
				path="/user-profile"
				element={
					<UserDetails user={userDetails} onLogout={LogoutHandler} />
				}
				exact
			/>
			<Route path="/error" element={<Error />} exact />
			<Route
				path="/register"
				element={
					<Register
						onRegister={onRegister}
						onLogout={LogoutHandler}
					/>
				}
				exact
			/>
			<Route
				path="/signin"
				element={<Signin onSignin={onSign} onLogout={LogoutHandler} />}
				exact
			/>
			<Route
				path="/about_us"
				element={
					<AboutUsPage user={userDetails} onLogout={LogoutHandler} />
				}
				exact
			/>
			<Route
				path="/articles"
				element={
					<ArticlesPage user={userDetails} onLogout={LogoutHandler} />
				}
				exact
			/>
			<Route
				path="/faq"
				element={
					<FAQpage user={userDetails} onLogout={LogoutHandler} />
				}
				exact
			/>
			<Route
				path="/cabservice"
				element={
					<Cabservice user={userDetails} onLogout={LogoutHandler} />
				}
				exact
			/>
			<Route
				path="/productservice"
				element={
					<Productservice
						user={userDetails}
						onLogout={LogoutHandler}
					/>
				}
				exact
			/>
			<Route
				path="/ev_cars"
				element={
					<Evpage user={userDetails} onLogout={LogoutHandler} />
				}>
				{/* <Route
						path=":name"
						element={<ElectricCarDetails />}
						exact
					/> */}
			</Route>
			<Route
				path="/ev_cars/:name"
				element={
					<ElectricCarDetails
						user={userDetails}
						onLogout={LogoutHandler}
					/>
				}
				exact
			/>
			{/* <Route path='/electric-products' element={<ElectricProductsPage />} exact/> */}
			<Route
				path="/contact_sm"
				element={
					<ContactSalesManager
						user={userDetails}
						onLogout={LogoutHandler}
					/>
				}
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
