import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";
import { MoviesPage } from "./pages";
import MovieDetail from "./pages/MovieDetail";

function App() {
	return (
		<div className="root-wrap ">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movies" element={<MoviesPage />} />
					<Route path="/movies/:title" element={<MovieDetail />} />
					<Route path="/tv" element={<TV />} />
					<Route path="/person" element={<Celebrity />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
