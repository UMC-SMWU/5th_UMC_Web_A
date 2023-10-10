import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const StyledLi = styled.li`
  float: left;
  width: 11%;
  position: relative;
  width: 11%;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: first baseline;
  align-items: center;
  margin: 12px 5px;
  list-style: none;
`;
const OutImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
const OutInfo = styled.div`
  line-height: normal;
  width: 100%;
  height: 60px;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  background-color: rgb(55, 59, 105);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
const OutTitle = styled.p`
  text-align: start;
  padding: 5px 0 0 12px;
  max-width: 80%;
  width: 80%;
  font-size: x-small;
  color: white;
  line-height: normal;
  word-break: break-all;
  word-wrap: break-word;
`;
const OutRate = styled.p`
  text-align: end;
  padding: 5px 12px 0 0;
  width: 20%;
  font-size: x-small;
  color: white;
  line-height: normal;
`;
const InInfo = styled.div`
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  position: absolute;
  display: none;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  color: #fff;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.8);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
const InTitle = styled.p`
  font-size: x-small;
  color: rgb(171, 166, 165);
  height: 10%;
  line-height: normal;
`;
const InOverview = styled.p`
  font-size: x-small;
  color: rgb(171, 166, 165);
  height: 90%;
  line-height: normal;
  margin: 0;
  word-break: break-all;
  word-wrap: break-word;
`;
const MovieItem = styled.div`
  &:hover {
    ${InInfo} {
      display: block;
    }
  }
`;

function Movie({ id, poster_path, title, vote_average, overview }) {
  return (
    <StyledLi key={id}>
      <MovieItem>
        <OutImage
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          title={title}
        />
        <OutInfo>
          <OutTitle>{title}</OutTitle>
          <OutRate>{vote_average}</OutRate>
        </OutInfo>

        <InInfo>
          <InTitle>{title}</InTitle>
          <InOverview>{overview}</InOverview>
        </InInfo>
      </MovieItem>
    </StyledLi>
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
