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
import ShowMainData from "./pages/Admin/ShowMainData";
import ShowAllMessages from "./pages/Admin/ShowAllMessages";
import UserCart from "./pages/Cart/UserCart";
import { useDispatch, useSelector } from "react-redux";

/* 
	This is the main file.
	1. Every request will come to this component.
	2. Refer to useEffect component -> 
		The code in useEffect will be run each time the component is re-rendered.
		So will check for login each and everytime this page gets rendered.
	3. Check for isLoggedIn() function in useEffect.
*/

function App() {
	/* 
		These are the states required for all pages. Initially would be an empty Javascript object. 
	*/

	const [userDetails, setUserDetails] = useState({});
	const [adminDetails, setAdminDetails] = useState({});

	const [allProducts, setAllProducts] = useState([]);

	const dispatch = useDispatch();
	const userDet = useSelector((state) => state.userDet);

	/* 
		This navigate helps to navigate between pages while retaining states.
	*/
	const navigate = useNavigate();

	/* 
		The details entered in signin page will be entered here.
	*/

	const onSign = async (details) => {
		/* 
			Signin works as:
			1. We fetch all the users from the database.
			2. We compare the given useremail and password to each of the user from the database.
			3. If it matches, we return the corresponding user and save it into the localStorage as well as the userDetails state.
		*/

		// console.log(details);
		const allUsers = await fetch("http://localhost:3001/users");

		/* 
			String -> Convert into JSON
		*/

		const allUsersJson = await allUsers.json();
		// console.log(allUsersJson);
		const requiredUser = allUsersJson.filter(
			(user) =>
				user.useremail === details.useremail &&
				user.password === details.password
		);

		/* Filtered user => array like [{}] => One object */

		console.log(requiredUser);

		// Set localStorage and State.

		if (requiredUser.length === 0) {
			alert("Please enter a valid useremail and password and try again.");
		} else {
			setUserDetails(requiredUser[0]);
			localStorage.setItem("ecohub-email", requiredUser[0].useremail);
			dispatch({ type: "login", userDetails: details });
			navigate("/");
		}
	};

	const adminSigninHandler = async (details) => {
		// Same as onSignin.

		console.log(details);
		const allAdmin = await fetch("http://localhost:3002/admins");
		const allAdminsJson = await allAdmin.json();
		// console.log(allUsersJson);
		const requiredAdmin = allAdminsJson.filter(
			(user) =>
				user.username === details.username &&
				user.password === details.password
		);
		// console.log(requiredAdmin);
		if (requiredAdmin.length === 0) {
			alert("Please provide proper Admin Details");
		} else {
			setAdminDetails(requiredAdmin[0]);
			localStorage.setItem("ecohub-admin", requiredAdmin[0].username);
			navigate("/admin/home");
		}
	};

	const onRegister = async (details) => {
		/*
			1. Details entered in Register component will come here.
			2. Compare all Details in the database.
			3. If email found, already user there, hence same details.
			4. Else, new email, save to backend. 
		*/

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

			// Storing entered userDetails in state and also localStore
			setUserDetails(details);
			dispatch({ type: "login", userDetails: details });
			localStorage.setItem("ecohub-email", details.useremail);
		} else {
			// Storing already present userDetails in state and also localStore

			localStorage.setItem("ecohub-email", requiredUser[0].useremail);
			dispatch({ type: "login", userDetails: requiredUser[0] });
			setUserDetails(requiredUser[0]);
		}
		navigate("/");
	};

	/* 
		1. Remove localStorage content.
		2. Restore state value to empty JS object.
	*/

	const LogoutHandler = () => {
		localStorage.removeItem("ecohub-email");
		setUserDetails({});
	};

	const adminLogoutHandler = () => {
		localStorage.removeItem("ecohub-admin");
		setAdminDetails({});
	};

	// function which runs each time component renders.

	/* 
		1. Check for details in localStorage.
		2. If not null, not undefined, then restore all from Database.
		3. Compare with each and save the current user with matched email.
		4. If no user, nothing is sent and redirected to Register. 
	*/

	const isLoggedIn = async () => {
		const useremail = localStorage.getItem("ecohub-email");
		const adminLogin = localStorage.getItem("ecohub-admin");

		if (useremail !== null && useremail !== undefined) {
			// console.log(useremail);
			const allUsers = await fetch("http://localhost:3001/users");
			const allUsersJson = await allUsers.json();
			const requiredUser = allUsersJson.filter(
				(user) => user.useremail === useremail
			);
			if(requiredUser.length !== 0){
				setUserDetails(requiredUser[0]);
				dispatch({ type: "login", userDetails: requiredUser[0] });
			}
		}

		if (adminLogin !== null && adminLogin !== undefined) {
			// console.log(useremail);
			const allAdmin = await fetch("http://localhost:3002/admins");
			const allAdminsJson = await allAdmin.json();
			// console.log(allUsersJson);
			const requiredAdmin = allAdminsJson.filter(
				(user) => user.username === adminLogin
			);
			// console.log(requiredAdmin);
			setAdminDetails(requiredAdmin[0]);
		}
	};

	const getAllElectricProducts = async () => {
		const result = await fetch("http://localhost:3001/products");
		const resultJSON = await result.json();
		setAllProducts(resultJSON);
	};

	// This will render each time component is re-rendered.

	useEffect(() => {
		isLoggedIn();
		getAllElectricProducts();
	}, []);

	// Routing should be here.
	// Route should contain path and element and exact(optional)

	// Sending onLogout to all for Navbar -> Logout button

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
				element={
					allProducts.length !== 0 ? (
						<ElectricProductsPage
							user={userDetails}
							products={allProducts}
						/>
					) : (
						<p>Loading...</p>
					)
				}
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

			<Route
				path="/show-cart"
				element={
					<UserCart user={userDetails} onLogout={LogoutHandler} />
				}
				exact
			/>
			{/* Admin Section */}
			{/* Check if admin details are present and redirect accordingly */}

			<Route
				path="/admin/login"
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
			{console.log(adminDetails)}
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

			<Route
				path="/admin/show-all-data"
				element={
					Object.keys(adminDetails).length === 0 ? (
						<AdminLoginPage
							onSignin={adminSigninHandler}
							onLogout={adminLogoutHandler}
						/>
					) : (
						<ShowMainData onLogout={adminLogoutHandler} />
					)
				}
				exact
			/>
			<Route
				path="/admin/messages"
				element={
					Object.keys(adminDetails).length === 0 ? (
						<AdminLoginPage
							onSignin={adminSigninHandler}
							onLogout={adminLogoutHandler}
						/>
					) : (
						<ShowAllMessages onLogout={adminLogoutHandler} />
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
