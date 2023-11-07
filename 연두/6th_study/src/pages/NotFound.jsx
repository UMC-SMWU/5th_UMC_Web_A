import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NotFoundContainer = styled.div`
  margin: 50px 150px;
  justify-content: center;
`;

export default function NotFound() {
  const navigate = useNavigate();

  const onClickGoHome = () => {
    navigate("/");
  };
  return (
    <NotFoundContainer>
      <h1 style={{ fontWeight: "900" }}>해당 페이지를 찾지 못했습니다.</h1>
      <div style={{ paddingBottom: "10px" }}>
        주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.
      </div>
      <div style={{ color: "red" }} onClick={onClickGoHome}>
        메인 페이지로 이동
      </div>
    </NotFoundContainer>
  );
}
