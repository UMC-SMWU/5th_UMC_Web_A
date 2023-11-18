import React from "react";
import styled from "@emotion/styled";
import { Movie } from "../Components";
import { tvPrograms } from "../database";

const Container = styled.div`
	background-color: #fff;
	padding: 20px 0px;
`;

const TVCardList = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	flex-wrap: wrap;
`;

const TVCardItem = styled.li`
	max-width: 320px;
`;

const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w440_and_h660_face";

const MoviesPage = () => {
	return (
		<Container>
			<TVCardList>
				{tvPrograms.results.map(({ id, name, overview, poster_path, vote_average }) => (
					<TVCardItem key={id}>
						<Movie
							title={name}
							overview={overview}
							posterPath={`${TMDB_IMAGE_BASE_URL}${poster_path}`}
							voteAverage={vote_average}
						/>
					</TVCardItem>
				))}
			</TVCardList>
		</Container>
	);
};

export default MoviesPage;
