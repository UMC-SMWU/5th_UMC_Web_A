import React, { useState } from "react";
import * as S from "./Tv.style";
import { useNavigate } from "react-router-dom";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

function Tv({ tv }) {
  const navigate = useNavigate();
  const [showOverlapping, setShowOverlapping] = useState(false);

  const handleMouseOver = () => {
    setShowOverlapping(true);
  };

  const handleMouseOut = () => {
    setShowOverlapping(false);
  };

  const onClickImg = () => {
    navigate(`/tv/${tv.name}`, {
      state: { ...tv, poster_path: `${IMG_BASE_URL}${tv.poster_path}` },
    });
  };

  return (
    <S.AppContainer>
      <S.MovieContainer
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <S.Images
          src={`${IMG_BASE_URL}${tv.poster_path}`}
          alt="TV Poster"
          onClick={onClickImg}
        />
        <S.Captions>
          <S.MovieTitle>{tv.name}</S.MovieTitle>
          <S.MovieAverage>{tv.vote_average}</S.MovieAverage>
        </S.Captions>
        <S.Overlapping className={showOverlapping ? "show" : ""}>
          <div>{tv.title}</div>
          <S.Overview>{tv.overview}</S.Overview>
        </S.Overlapping>
      </S.MovieContainer>
    </S.AppContainer>
  );
}

export default Tv;
