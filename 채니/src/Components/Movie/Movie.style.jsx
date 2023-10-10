import styled from "@emotion/styled";

export const AppContainer = styled.div`
  background-color: rgb(29, 29, 85);
  display: inline-flex;
  margin: 0 15px;
  flex-wrap: wrap;
`;

export const MovieContainer = styled.div`
  margin-left: 50px;
  border: 1.5px solid black;
  margin: 10px;
  list-style-type: none;
  padding: 0;
  width: 200px; /* 고정된 너비 */
  height: 300px; /* 고정된 높이 */
  box-sizing: border-box;
  display: flex; /* flex 컨테이너로 설정 */
  flex-direction: column; /* 세로 방향으로 정렬 */
  align-items: center; /* 수직 가운데로 정렬 */
  position: relative; /* 부모 요소를 relative로 설정 */
  background-color: rgb(48, 48, 127);
  color: white;
`;

export const Images = styled.img`
  object-fit: fill;
  height: 238px;
  width: 100%;
`;

export const Captions = styled.div`
  position: absolute; /* 자식 요소를 absolute로 설정 */
  bottom: 0%; /* 부모 요소의 아래에 위치 */
  left: 0; /* 좌측에 위치하도록 설정 */
  right: 0; /* 우측에 위치하도록 설정 */
  font-size: small;
  border-top: 1px black solid;
  margin-bottom: 0px;
  width: 100%;
  height: 20%;
  display: flex;
`;

export const MovieTitle = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  width: 70%;
`;

export const MovieAverage = styled.div`
  float: right;
  margin-top: 13px;
  font-size: xx-small;
  width: 30%;
  margin-left: 16px;
`;

export const Overlapping = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  overflow: auto;
`;

export const Overview = styled.div`
  font-size: xx-small;
`;
