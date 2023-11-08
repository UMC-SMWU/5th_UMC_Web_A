import React, { useState } from "react";
import * as S from "./Movie.style";
import { useNavigate } from "react-router-dom";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

function Movie({ movie }) {
  const navigate = useNavigate();
  const [showOverlapping, setShowOverlapping] = useState(false);

  const handleMouseOver = () => {
    setShowOverlapping(true);
  };

  const handleMouseOut = () => {
    setShowOverlapping(false);
  };

  const onClickImg = () => {
    navigate(`/movie/${movie.title}`, {
      state: { ...movie, poster_path: `${IMG_BASE_URL}${movie.poster_path}` },
    });
  };

  return (
    <S.AppContainer>
      <S.MovieContainer
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <S.Images
          src={`${IMG_BASE_URL}${movie.poster_path}`}
          alt="Movie Poster"
          onClick={onClickImg}
        />
        <S.Captions>
          <S.MovieTitle>{movie.title}</S.MovieTitle>
          <S.MovieAverage>{movie.vote_average}</S.MovieAverage>
        </S.Captions>
        <S.Overlapping className={showOverlapping ? "show" : ""}>
          <div>{movie.title}</div>
          <S.Overview>{movie.overview}</S.Overview>
        </S.Overlapping>
      </S.MovieContainer>
    </S.AppContainer>
  );
}

export default Movie;
