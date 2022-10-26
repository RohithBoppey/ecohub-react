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
import ElectricCarDetails from "./pages/ElectricVehicleDetails/ElectricCarDetails";
import { useEffect, useState } from "react";
import Signin from "./pages/Signin";
import UserDetails from "./pages/UserProfile/UserDetails";
import ElectricProductsPage from "./pages/ElectricProducts/ElectricProductsPage";

function App() {
	const [userDetails, setUserDetails] = useState({});
	const [adminDetails, setAdminDetails] = useState({});

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

	const adminSigninHandler = async (details) => {
		console.log(details);
		const allAdmin = await fetch("http://localhost:3002/admins");
		const allAdminsJson = await allAdmin.json();
		// console.log(allUsersJson);
		const requiredAdmin = allAdminsJson.filter(
			(user) =>
				user.username === details.username &&
				user.password === details.password
		);
		console.log(requiredAdmin);
		setAdminDetails(requiredAdmin[0]);
		localStorage.setItem("ecohub-admin", requiredAdmin[0].username);
		navigate("/admin/home");
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
		localStorage.removeItem("ecohub-email");
		setUserDetails({});
	};

	const adminLogoutHandler = () => {
		localStorage.removeItem("ecohub-admin");
		setAdminDetails({});
	};

	const isLoggedIn = async () => {
		const useremail = localStorage.getItem("ecohub-email");
		if (useremail !== null && useremail !== undefined) {
			// console.log(useremail);
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
			<Route
				path="/electric-products"
				element={<ElectricProductsPage user={userDetails} />}
				exact
			/>
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
			<Route
				path="/admin/login"
				element={
					<AdminLoginPage
						onSignin={adminSigninHandler}
						onLogout={adminLogoutHandler}
					/>
				}
				exact
			/>
			<Route
				path="/admin/home"
				element={
					Object.keys(adminDetails).length === 0 ? (
						<AdminLoginPage
							onSignin={adminSigninHandler}
							onLogout={adminLogoutHandler}
						/>
					) : (
						<AdminHome onLogout={adminLogoutHandler} />
					)
				}
				exact
			/>

			{/* Error if no page is found */}
			<Route path="*" element={<Error />} exact />
		</Routes>
	);
}

export default App;
