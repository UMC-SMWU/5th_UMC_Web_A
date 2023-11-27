import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  color: rgba(3, 37, 65, 1);
  padding: 10px 20px;
  border-radius: 2em;
  border: none;
  cursor: pointer;
  margin: 10px;
`;

const P = styled.p`
  color: white;
`;

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate(`/Login`);
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <P>
          <Button onClick={handleLogoutClick}>로그아웃</Button>환영합니다!
        </P>
      ) : (
        <P>
          <Button onClick={handleLoginClick}>로그인</Button>로그인 해주세요!{" "}
        </P>
      )}
    </div>
  );
}
