
import { useState } from "react";


function Movie({title, poster_path, vote_average, overview}) {

    // 초기값 isHovered=false, 업데이트 함수로 setIsHovered 사용
    const [isHovered, setIsHovered] = useState(false); 

    // handleMouseOver가 동작하면 setIsHovered를 true로 바꿈
    const handleMouseOver = () => {
        setIsHovered(true);
      };
    
    // handleMouseOut가 동작하면 setIsHovered를 false로 바꿈
    const handleMouseOut = () => {
        setIsHovered(false);
      };


    return (
        // onMouseOver, onMouseOut =  해당 요소에 마우스가 올려져 있을 때와 뗴어졌을 때 반응하는 이벤트 핸들러로
        // 각각 handleMouseOver와 handleMouseOut 함수를 실행
          <div className="movie-box" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="img-box">
              <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
            </div>
            <div className="info-box">
                <div className="title-box"> {title} </div>
                <div className="vote-average-box"> {vote_average} </div>
            </div>
            {isHovered && (
              <div className="overview-box">
                <div className="overview-text">
                  <h4>{title}</h4>
                  <p>{overview}</p>
                </div>
              </div>
            )}  
          </div>
    )
  }
  
  export default Movie;