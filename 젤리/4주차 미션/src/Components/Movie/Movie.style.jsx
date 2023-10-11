import styled from 'styled-components';

export const Body = styled.body`
  background-color: rgb(26, 26, 56);
  // margin: 0;
`;

export const App_container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

export const Movie_container = styled.div`
  width: 250px;
  background-color: rgb(52, 52, 72);
  color: white;
  border-radius: 5px;
  margin: 16px;
  position: relative;
`;

export const Movie_img = styled.img`
  max-width: 100%;
  position: relative;
`;

export const Movie_info = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Title = styled.h4`
  margin: 0;
`;

export const Vote = styled.span`
  margin-left: 3px;
`;

export const Movie_ov = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
`;

export const Overflow = styled.span`
  overflow: auto;
`;
