import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { IMG_BASE_URL } from "../components/Contents";

const ContentsDetailContatiner = styled.div`
  margin: 50px;
  justify-content: center;
  display: flex;
`;

export default function ContentsDetail() {
  const { title } = useParams();
  const { state } = useLocation();
  console.log(state);

  return (
    <ContentsDetailContatiner>
      <img
        style={{ width: "200px", height: "300px" }}
        src={IMG_BASE_URL + state.poster_path}
        alt={state.title}
        title={state.title}
      />
      <div style={{ padding: "20px" }}>{title}</div>
    </ContentsDetailContatiner>
  );
}
