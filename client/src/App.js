import Error from "./components/Error";
import HomePage from "./pages/Homepage";
import IndexPage from "./pages/IndexPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Signin from "./components/Signin";
import FAQpage from "./pages/FAQpage";
import Cabservice from "./pages/Cabservice";
import Productservice from "./pages/Productservice";


function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Productservice/>} exact />
					<Route path="/error" element={<Error />} exact />
					<Route path="/register" element={<Register />} exact />
					<Route path="/signin" element={<Signin />} exact />
					<Route path="/faq" element={<FAQpage/>} exact />
					<Route path="/contactus" element={<FAQpage/>} exact />
					<Route path="/cabservice" element={<Cabservice/>} exact />
					
					{/* <Route path="/about_us" element={<AboutUsPage />} exact /> */}
				</Routes>
			</Router>
			
			{/* <IndexPage/> */}
			{/* <HomePage /> */}
			{/* <Register/> */}
		</>
	);
}

export default App;
