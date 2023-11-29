import { useState } from "react";
import * as S from "./Movie.style";
import { useNavigate } from "react-router-dom";


export default function Tv(props) {

    const navigate = useNavigate();

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

    const onClickMovieItem = () => {
      navigate(`/tv/${props.title}`, {
        state: props
      })
    }

    return (
        // onMouseOver, onMouseOut =  해당 요소에 마우스가 올려져 있을 때와 뗴어졌을 때 반응하는 이벤트 핸들러로
        // 각각 handleMouseOver와 handleMouseOut 함수를 실행
        <S.Movie_box onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={onClickMovieItem}>
          <S.Img_box>
            <S.Img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} />
          </S.Img_box>
          <S.Info_box>
              <S.Title_box> {props.title} </S.Title_box>
              <S.Vote_average_box> {props.vote_average} </S.Vote_average_box>
          </S.Info_box>
          {isHovered && (
            <S.Overview_box>
              <S.Overview_text>
                <h4>{props.title}</h4>
                <S.Overview_text_p>{props.overview}</S.Overview_text_p>
              </S.Overview_text>
            </S.Overview_box>
          )}  
        </S.Movie_box>
    )
  }
  
  

  