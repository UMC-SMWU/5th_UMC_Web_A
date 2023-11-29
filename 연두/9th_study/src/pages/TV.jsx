import React from "react";
import Contents from "../components/Contents";
import { tvprograms } from "../tvDummy";
import styled from "styled-components";

const AppContainer = styled.div`
  position: relative;
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
`;
const StyledUl = styled.ul`
  margin: 0 0;
  font-size: 0;
  line-height: 0;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-left: 60px;
`;

function TV() {
  return (
    <AppContainer>
      <StyledUl>
        {tvprograms.results.map((item) => {
          return (
            <Contents
              page="tv"
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

export default TV;
