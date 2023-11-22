import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Lgoin } from "../pages/Login";

const LogButton = styled.button`
  background-color: white;
  border-radius: 10px;
`;

const Message = styled.p`
  color: white;
  font-size: 12px;
  margin-left: 10px;
  display: flex;
  align-items: center;ㅇ
`;

const LoginWrapper = styled.div`
  width: 180px;
  display: flex;
`;

const LoginButton = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
  
    const handleLoginClick = () => {
      setLoggedIn(true);
      navigate('/login');
    };
  
    const handleLogoutClick = () => {
      setLoggedIn(false);
    };
  
    return (
      <div>
        {isLoggedIn ? (
          <LoginWrapper>
            <LogButton onClick={handleLogoutClick}>로그아웃</LogButton>
            <Message>환영합니다!</Message>
          </LoginWrapper>
        ) : (
          <LoginWrapper>
            <LogButton onClick={handleLoginClick}>로그인</LogButton>
            <Message>로그인 해주세요!</Message>
          </LoginWrapper>
        )}
      </div>
    );
  };

export default LoginButton;