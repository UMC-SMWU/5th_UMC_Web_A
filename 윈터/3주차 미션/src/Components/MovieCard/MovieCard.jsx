import { useState } from "react";
import * as S from "./MovieCard.style";

const MovieCard = ({ title, overview, voteAverage, posterPath }) => {
	const [hover, setHover] = useState(false);

	return (
		<S.Container onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
			<S.PosterImage src={posterPath} alt={`'${title}' 포스터`} />
			<S.Info>
				<S.Title>{title}</S.Title>
				<S.VoteAverage>{voteAverage}</S.VoteAverage>
			</S.Info>
			{hover && (
				<S.Backdrop>
					<S.BackdropTitle>{title}</S.BackdropTitle>
					<S.BackdropOverview>{overview}</S.BackdropOverview>
				</S.Backdrop>
			)}
		</S.Container>
	);
};

export default MovieCard;
