import Error from "./components/Error";
import HomePage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Signin from "./components/Login_Signup/Signin";
import ArticlesPage from "./pages/Articles/ArticlesPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import ContactSalesManager from "./pages/Contact Sales Manager/ContactSalesManager";
import AdminLogin from "./components/Admin/AdminLogin";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} exact />
				<Route path="/error" element={<Error />} exact />
				<Route path="/register" element={<Register />} exact />
				<Route path="/signin" element={<Signin />} exact />
				<Route path="/about_us" element={<AboutUsPage />} exact />
				<Route path="/articles" element={<ArticlesPage />} exact />
				{/* <Route path='/electric-products' element={<ElectricProductsPage />} exact/> */}
				<Route
					path="/contact_sm"
					element={<ContactSalesManager />}
					exact
				/>

				{/* Admin Section */}
				<Route path="/admin/login" element={<AdminLogin />} exact />
			</Routes>
		</Router>
	);
}

export default App;
