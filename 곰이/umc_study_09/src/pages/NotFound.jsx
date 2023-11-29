import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

function NotFound() {

  const navigate = useNavigate();
  
  const PageContainer = styled.div`
  height: 64px;
  max-width: 1400px;
  margin: 40px auto;
  `; 

  const HomeReturn = styled.div`
  color: red;
  `; 

  return (
    <PageContainer>
        <div style={{fontWeight: "bold", fontSize: "20px", marginBottom: "20px"}}>해당 페이지를 찾지 못했습니다.</div>
        <div style={{marginBottom: "10px"}}>주소가 잘못되었거나 더 이상 제공하지 않는 페이지입니다.</div>
        <HomeReturn onClick={() => navigate('/')}>메인 페이지로 이동</HomeReturn>
    </PageContainer>
  );
}

export default NotFound;