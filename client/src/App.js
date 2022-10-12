import Error from "./components/Error";
import HomePage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Signin from "./components/Login_Signup/Signin";
import ArticlesPage from "./pages/Articles/ArticlesPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import ContactSalesManager from "./pages/Contact Sales Manager/ContactSalesManager";
import AdminLogin from "./components/Admin/AdminLogin";
import FAQpage from "./pages/FaqPage/FAQpage";
import Cabservice from "./pages/CabService/Cabservice";
import Productservice from "./pages/ProductService/Productservice";
import Evpage from "./pages/Electricvehicles/Evpage";

import AdminHome from "./pages/Admin/AdminHome";

function App() {
	// yfvrdvtfvbgbybyby
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} exact />
				<Route path="/error" element={<Error />} exact />
				<Route path="/register" element={<Register />} exact />
				<Route path="/signin" element={<Signin />} exact />
				<Route path="/about_us" element={<AboutUsPage />} exact />
				<Route path="/articles" element={<ArticlesPage />} exact />
				<Route path="/faqpage" element={<FAQpage />} exact />
				<Route path="/cabservice" element={<Cabservice />} exact />
				<Route path="/productservice" element={<Productservice/>} exact/>
				<Route path="/evpage" element={<Evpage/>}exact />

				{/* <Route path='/electric-products' element={<ElectricProductsPage />} exact/> */}
				<Route
					path="/contact_sm"
					element={<ContactSalesManager />}
					exact
				/>

				{/* Admin Section */}
				<Route path="/admin/login" element={<AdminLogin />} exact />
				<Route path="/admin/home" element={<AdminHome />} exact />

				{/* Error if no page is found */}
				<Route path="*" element={<Error />} exact />
			</Routes>
		</Router>
	);
}

export default App;
