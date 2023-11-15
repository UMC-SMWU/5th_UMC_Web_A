import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginButton = styled.button`
  background-color: white;
  border-radius: 10px;
`;

const Message = styled.p`
  color: white;
  font-size: 12px;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const LoginWrapper = styled.p`
  width: 180px;
  display: flex;
`;

const LoginControl = () => {
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
          <LoginButton onClick={handleLogoutClick}>로그아웃</LoginButton>
          <Message>환영합니다!</Message>
        </LoginWrapper>
      ) : (
        <LoginWrapper>
          <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
          <Message>로그인 해주세요!</Message>
        </LoginWrapper>
      )}
    </div>
  );
};

export default LoginControl;
