import React from "react";
import Movie from "./Components/Movie"; // Movie 컴포넌트를 가져오세요.

function App() {
	// movies.results에 대한 가상 데이터 (예: 배열)를 생성합니다.
	const moviesData = [
		{ title: "영화 1", director: "감독 1" },
		{ title: "영화 2", director: "감독 2" },
		// 필요한 만큼 데이터를 추가하세요.
	];

	return (
		<div className="app-container">
			{moviesData.map((item, index) => (
				<Movie key={index} movieData={item} />
			))}
		</div>
	);
}

export default App;
