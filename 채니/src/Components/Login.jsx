import React, { useState } from "react";
import * as S from "./Login.style";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/thunks";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // 추가: 로딩 상태 관리
  const [emailError, setEmailError] = useState(""); // 추가: 이메일 에러 상태 관리

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

  const handleLogin = async () => {
    if (!email || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    setLoading(true);

    const user = {
      id: email,
      pw: password,
    };

    try {
      const response = await dispatch(loginUser(user));

      if (response && response.data.AccessToken) {
        // 토큰이 있다면 로컬 스토리지에 저장
        localStorage.setItem("token", response.data.AccessToken);
      }

      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error("로그인 실패:", error);
      setLoading(false);
    }
  };

  return (
    <S.FormContainer>
      <S.Title>아이디와 비밀번호를 입력해주세요</S.Title>
      <S.Form>
        <S.Label>
          아이디
          <S.Input
            type="text"
            placeholder="아이디를 입력하세요"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            id="id"
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
            id="password"
          />
        </S.Label>
      </S.Form>
      <S.Button disabled={loading} onClick={handleLogin}>
        {loading ? "Loading..." : "로그인"}
      </S.Button>
    </S.FormContainer>
  );
}

export default Login;
