import React, { useState, useEffect, useCallback, useMemo } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useDidMountEffect from "../components/useDidMountEffect";

const LoginContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const FormBox = styled.form`
  width: 65%;
`;
// const StyledFieldset = styled.fieldset`
//   display: flex;
// `;
const StyledLabel = styled.label`
  font-size: small;
  font-weight: 600;
  padding: 9px 0;
  align-items: left;
  display: flex-start;
`;
const StyledInput = styled.input`
  background-color: transparent;
  outline-color: rgb(3, 38, 65);
  border-radius: 4px;
  border-style: solid;
  border-width: 1.25px;
  border-color: rgb(218, 218, 218);
  height: 40px;
  width: 90%;
  margin: 8px 0;
  padding: 0 18px;
  color: black;
`;
const GuideMessage = styled.div`
  font-size: small;
  color: red;
`;
// display: none; display: block;
const SubmitInput = styled.input`
  border-radius: 20px;
  border-style: solid;
  border-width: 1.25px;
  border-color: rgb(218, 218, 218);
  color: white;
  background-color: rgb(218, 218, 218);
  height: 40px;
  width: 95%;
  margin: 18px 0;
`;

// 확인버튼 비활성화 rgb(218,218,218);
// 확인버튼 활성화 rgb(3,38,65);

export default function Login() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkEmail =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkPW = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9])/;

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const { email, password } = inputs; // 비구조화 할당을 통해 값 추출

  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
    controlEmailGuideMessage();
  };
  const onChangePW = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
    controlPWGuideMessage();
  };

  const onClickSubmit = () => {
    navigate("/");
  };

  const controlEmailGuideMessage = useCallback(() => {
    if (inputs.email === "") {
      setEmailMessage("");
      setValidEmail(false);
    } else if (!checkEmail.test(inputs.email)) {
      setEmailMessage("올바른 이메일을 입력해 주세요.");
      setValidEmail(false);
    } else {
      setEmailMessage("");
      setValidEmail(true);
    }
  }, [inputs.email, checkEmail]);

  const controlPWGuideMessage = useCallback(() => {
    if (inputs.password === "") {
      setPasswordMessage("");
      setValidPassword(false);
    } else if (!checkPW.test(inputs.password)) {
      setPasswordMessage("영어+숫자+특수문자를 조합하여 작성해주세요.");
      setValidPassword(false);
    } else {
      setPasswordMessage("");
      setValidPassword(true);
    }
  }, [inputs.password, checkPW]);

  useEffect(() => {
    controlEmailGuideMessage();
    controlPWGuideMessage();
  }, [
    controlEmailGuideMessage,
    controlPWGuideMessage,
    inputs.email,
    inputs.password,
  ]);

  return (
    <LoginContainer>
      <FormBox onSubmit={onClickSubmit}>
        <h1
          style={{
            textAlign: "left",
          }}
        >
          이메일과 비밀번호를 입력해 주세요
        </h1>
        <fieldset style={{ border: "none" }}>
          <StyledLabel htmlFor="email">이메일 주소</StyledLabel>
          <StyledInput
            name="email"
            type="text"
            placeholder="이메일 주소"
            onChange={onChangeEmail}
            value={email}
          />

          <GuideMessage>{emailMessage}</GuideMessage>
        </fieldset>

        <fieldset style={{ border: "none" }}>
          <StyledLabel htmlFor="pw">비밀번호</StyledLabel>
          <StyledInput
            name="password"
            type="password"
            placeholder="영문,숫자,특수문자 포함 8자리 이상"
            onChange={onChangePW}
            value={password}
          />
          <>
            <GuideMessage>{passwordMessage}</GuideMessage>
          </>
        </fieldset>
        <>
          {validEmail === true && validPassword === true ? (
            <SubmitInput
              type="submit"
              value="확인"
              style={{ backgroundColor: "rgb(3,38,65)" }}
            />
          ) : (
            <SubmitInput type="submit" disabled value="확인" />
          )}
        </>
      </FormBox>
    </LoginContainer>
  );
}
