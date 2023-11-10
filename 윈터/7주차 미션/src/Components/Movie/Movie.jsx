import { useState } from "react";
import * as S from "./Movie.style";
import { useNavigate } from "react-router-dom";

const Movie = (props) => {
	const [hover, setHover] = useState(false);
	const navigate = useNavigate();

	const onClickMovieItem = () => {
		navigate(`/movies/${props.title}`, { state: props });
	};

	return (
		<S.Container
			onClick={onClickMovieItem}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<S.PosterImage src={props.posterPath} alt={`'${props.title}' 포스터`} />
			<S.Info>
				<S.Title>{props.title}</S.Title>
				<S.VoteAverage>{props.voteAverage}</S.VoteAverage>
			</S.Info>
			{hover && (
				<S.Backdrop>
					<S.BackdropTitle>{props.title}</S.BackdropTitle>
					<S.BackdropOverview>{props.overview}</S.BackdropOverview>
				</S.Backdrop>
			)}
		</S.Container>
	);
};

export default Movie;
