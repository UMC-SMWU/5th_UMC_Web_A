// Movie.jsx
import React, { useState } from "react";
import "./index.css";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

function Movie(props) {
  const { movie } = props;
  const [showOverlapping, setShowOverlapping] = useState(false);

  const handleMouseOver = () => {
    setShowOverlapping(true);
  };

  const handleMouseOut = () => {
    setShowOverlapping(false);
  };

  return (
    <div
      className="movie"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        className="images"
        src={`${IMG_BASE_URL}${movie.poster_path}`}
        alt="Movie Poster"
      />
      <div className="captions">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-average">{movie.vote_average}</div>
      </div>
      <div className={`overlapping ${showOverlapping ? "show" : ""}`}>
        <div>{movie.title}</div>
        <div className="overview">{movie.overview}</div>
      </div>
    </div>
  );
}

export default Movie;
