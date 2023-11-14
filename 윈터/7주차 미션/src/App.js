import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components";
import {
	MoviesPage,
	HomePage,
	NotFoundPage,
	TVPage,
	CelebrityPage,
	MovieDetailPage,
	LoginPage,
} from "./pages";

function App() {
	return (
		<div className="root-wrap ">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Header />
								<HomePage />
							</>
						}
					/>
					<Route
						path="/movies"
						element={
							<>
								<Header />
								<MoviesPage />
							</>
						}
					/>
					<Route
						path="/movies/:title"
						element={
							<>
								<Header />
								<MovieDetailPage />
							</>
						}
					/>
					<Route
						path="/tv"
						element={
							<>
								<Header />
								<TVPage />
							</>
						}
					/>
					<Route
						path="/person"
						element={
							<>
								<Header />
								<CelebrityPage />
							</>
						}
					/>
					<Route path="/login" element={<LoginPage />} />
					<Route
						path="*"
						element={
							<>
								<Header />
								<NotFoundPage />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
