import React from "react";
import Tv from "../components/Tv";
import { tvs } from "../tvDummy";
import * as S from "../components/Movie.style";

export default function TV() {
  return (
      <S.Body>
        <S.Card_container>
          {tvs.results.map((item) => {
            return (
                <Tv
                  title={item.name}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                  overview={item.overview}/>
            );
          })}
        </S.Card_container>
      </S.Body>
  );  
}