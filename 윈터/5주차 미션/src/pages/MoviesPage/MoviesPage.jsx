import React from "react";

import * as S from "./MoviesPage.style";
import { Movie } from "../../Components";
import { movies, TMDB_IMAGE_BASE_URL } from "../../database";

const MoviesPage = () => {
	return (
		<S.Container>
			<S.MovieCardList>
				{movies.results.map(({ id, title, overview, poster_path, vote_average }) => (
					<S.MovieCardItem key={id}>
						<Movie
							title={title}
							overview={overview}
							posterPath={`${TMDB_IMAGE_BASE_URL}${poster_path}`}
							voteAverage={vote_average}
						/>
					</S.MovieCardItem>
				))}
			</S.MovieCardList>
		</S.Container>
	);
};

export default MoviesPage;
