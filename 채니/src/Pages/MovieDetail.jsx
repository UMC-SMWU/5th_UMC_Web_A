import React from "react";
import { useLocation, useParams } from "react-router-dom";

function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  const posterstyle = {
    width: "10%",
  };

  if (!state) {
    return <div>영화 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>{title}</h1>
      <img src={state.poster_path} alt="Movie Poster" style={posterstyle} />
      <p>평균 평점: {state.vote_average}</p>
      <p>개요: {state.overview}</p>
    </div>
  );
}

export default MovieDetail;
