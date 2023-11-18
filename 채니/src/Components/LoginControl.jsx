import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsLoggedIn(true);
    navigate("/login");
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {isLoggedIn ? (
        <>
          <button onClick={handleLogoutClick} style={{ borderRadius: "30px" }}>
            로그아웃
          </button>
          <p style={{ color: "white", fontSize: "14px" }}>
            &nbsp;&nbsp;&nbsp; 환영합니다.
          </p>
        </>
      ) : (
        <>
          <button onClick={handleLoginClick} style={{ borderRadius: "30px" }}>
            로그인
          </button>
          <p style={{ color: "white", fontSize: "14px" }}>
            &nbsp;&nbsp;&nbsp;로그인 해주세요!
          </p>
        </>
      )}
    </div>
  );
}

export default LoginControl;
