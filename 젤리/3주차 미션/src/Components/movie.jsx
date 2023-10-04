import React, { useState } from "react";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

// export default function Movie({ title, poster_path, vote_average, overview }) {
//   return (
//     <div className="movie-container">
//       <img src={IMG_BASE_URL + poster_path} />
//       <div className="movie-info">
//         <h4>{title}</h4>
//         <span>{vote_average}</span>
//       </div>
//       <div className="movieov">
//         <h4>{title}</h4>
//         <span>{overview}</span>
//       </div>
//     </div>
//   );
// }

export default function Movie({ title, poster_path, vote_average, overview }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="movie-container"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={IMG_BASE_URL + poster_path} />
      <div className="movie-info">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
      {isHovered && (
        <div className="movie-ov">
          <h4>{title}</h4>
          <span>{overview}</span>
        </div>
      )}
    </div>
  );
}
