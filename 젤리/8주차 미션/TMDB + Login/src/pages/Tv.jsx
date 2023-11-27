import React from "react";
import TV from "../Components/TV";
import { tvs } from "../tvDummy";

export default function Tvs() {
  return (
    <div>
      <div className='movies-container'>
        {tvs.results.map((item) => {
          return (
            <TV
              name={item.name}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}
