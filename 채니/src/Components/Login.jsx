import React, { useState } from "react";
import * as S from "./Login.style";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = () => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the entered email is in a valid format
    if (!emailRegex.test(email)) {
      setEmailError("잘못된 이메일 형식입니다");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <S.FormContainer>
      <S.Title>이메일과 비밀번호를 입력해주세요</S.Title>
      <S.Form>
        <S.Label>
          이메일주소
          <S.Input
            type="text"
            placeholder="email을 입력하세요"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur} // Trigger validation on blur
          />
        </S.Label>
        {emailError && <S.ErrorMsg>{emailError}</S.ErrorMsg>}
      </S.Form>

      <S.Form>
        <S.Label>
          비밀번호
          <S.Input
            type="password"
            value={password}
            placeholder="비밀번호를 입력하세요"
            onChange={handlePasswordChange}
          />
        </S.Label>
      </S.Form>
      <S.Button>로그인</S.Button>
    </S.FormContainer>
  );
}

export default Login;
