import Movie from "./components/Movie.style";
import { movies } from "./movieDummy";
import styled from "styled-components";
import React from "react";

const AppContainer = styled.div`
  position: relative;
  margin: 50px 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const StyledUl = styled.ul`
  margin: 0 -1.5%;
  font-size: 0;
  line-height: 0;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

function App() {
  return (
    <AppContainer>
      <StyledUl>
        {movies.results.map((item) => {
          return (
            <Movie
              key={item.id}
              id={item.id}
              poster_path={item.poster_path}
              title={item.title}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          );
        })}
      </StyledUl>
    </AppContainer>
  );
}

export default App;
