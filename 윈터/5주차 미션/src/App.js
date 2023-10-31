import React from "react";
import "./index.css";
import { MovieCard } from "./Components";
import { movies, TMDB_IMAGE_BASE_URL } from "./database";

import styled from "@emotion/styled";

function App() {
	return (
		<Container>
			<MovieCardList>
				{movies.results.map(({ id, title, overview, poster_path, vote_average }) => (
					<MovieCardItem key={id}>
						<MovieCard
							title={title}
							overview={overview}
							posterPath={`${TMDB_IMAGE_BASE_URL}${poster_path}`}
							voteAverage={vote_average}
						/>
					</MovieCardItem>
				))}
			</MovieCardList>
		</Container>
	);
}

const Container = styled.div`
	background-color: #22264c;
	padding: 20px 0px;
`;

const MovieCardList = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	flex-wrap: wrap;
`;

const MovieCardItem = styled.li`
	max-width: 320px;
`;

export default App;
