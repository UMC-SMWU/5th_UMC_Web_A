import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";
// import styled from "@emotion/styled";

function App() {
	return (
		<div className="root-wrap ">
			<div className="root-wrap">
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/movies" element={<Movies />} />
						<Route path="/tv" element={<TV />} />
						<Route path="/celebrity" element={<Celebrity />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

// const Container = styled.div`
// 	background-color: #22264c;
// 	padding: 20px 0px;
// `;

// const MovieCardList = styled.ul`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	gap: 20px;
// 	flex-wrap: wrap;
// `;

// const MovieCardItem = styled.li`
// 	max-width: 320px;
// `;

export default App;
