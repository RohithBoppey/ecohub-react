import Error from "./components/Error";
import HomePage from "./pages/Homepage";
import IndexPage from "./pages/IndexPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} exact />
					<Route path="/error" element={<Error />} exact />
					<Route path="/register" element={<Register />} exact />
				</Routes>
			</Router>
			{/* <IndexPage/> */}
			{/* <HomePage /> */}
			{/* <Register/> */}
		</>
	);
}

export default App;
