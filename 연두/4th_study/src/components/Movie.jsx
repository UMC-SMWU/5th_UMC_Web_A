import React from "react";
import PropTypes from "prop-types";

// component만들어 export한 뒤 외부 폴더에서 사용가능

function Movie({ id, poster_path, title, vote_average, overview }) {
  return (
    <>
      <li className="movie_item" key={id}>
        <img
          className="out_image"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          title={title}
        />
        <div className="out_info">
          <p className="out_title">{title}</p>
          <p className="out_rate">{vote_average}</p>
        </div>

        <div className="movie_item_info">
          <div>
            <p className="in_title">{title}</p>
            <p className="in_overview">{overview}</p>
          </div>
        </div>
      </li>
    </>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Movie;
