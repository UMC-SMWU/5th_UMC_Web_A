import React, { useState } from "react";
import * as A from "./Movie.style";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

export default function Movie({ title, poster_path, vote_average, overview }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <A.Movie_container
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <A.Movie_img src={IMG_BASE_URL + poster_path} />
      <A.Movie_info>
        <A.Title>{title}</A.Title>
        <A.Vote>{vote_average}</A.Vote>
      </A.Movie_info>
      {isHovered && (
        <A.Movie_ov>
          <h4>{title}</h4>
          <A.Overflow>{overview}</A.Overflow>
        </A.Movie_ov>
      )}
    </A.Movie_container>
  );
}
