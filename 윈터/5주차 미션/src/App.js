import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";
import { MoviesPage } from "./pages";

function App() {
	return (
		<div className="root-wrap ">
			<div className="root-wrap">
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/movies" element={<MoviesPage />} />
						<Route path="/tv" element={<TV />} />
						<Route path="/celebrity" element={<Celebrity />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
