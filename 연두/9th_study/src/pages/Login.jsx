import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, logoutUser } from "../store/authSlice";

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
const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
`;
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

export default function Login() {
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
    isLoggedIn: false,
  });

  const { id, pw } = inputs;

  const [msg, showMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [validEmail, setValidID] = useState(false);
  const [validPassword, setValidPW] = useState(false);
  const [idMessage, setIDMessage] = useState("");
  const [passwordMessage, setPWMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const isLoggedIn = useSelector((state) => state.auth.user.isLoggedIn);

  async function goLogin() {
    // 확인 버튼을 누르면 axios를 통신하는 동안 클릭이 안되도록 함
    setLoading(true);
    showMsg("Loading...");

    try {
      const response = await axios({
        url: "http://localhost:8000/user/login",
        method: "post",
        data: {
          id: inputs.id,
          pw: inputs.pw,
        },
      });
      console.log(response);
      // Redux에 id, pw 저장 + isLoggedIn = true 설정

      setLoading(false); // axios 통신끝나면 클릭 방지 풀림
      setTimeout(() => showMsg(""), 1500); // 통신이 끝난 후 1.5초까지 'Loading...'을 출력

      const code = response.data.code;
      if (code === 400) {
        alert("아이디 또는 비밀번호가 입력되지 않았습니다.");
      } else if (code === 401) {
        alert("존재하지 않는 id입니다.");
      } else if (code === 402) {
        alert("비밀번호가 일치하지 않습니다.");
      } else {
        dispatch(loginUser(response.data.result));
        console.log(response.data.result);
        localStorage.setItem("token", response.data.result.AccessToken);
        localStorage.setItem("id", response.data.result.userId);
        localStorage.setItem("pw", response.data.result.password);
        // json 객체에 대해서는 JSON.stringify()
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onChangeHandler = (e) => {
    // id, pw 입력란에 입력된 문자를 state 저장관리
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    controlIdGuideMessage();
    controlPWGuideMessage();
  };

  const controlIdGuideMessage = () => {
    if (!inputs.id) {
      setValidID(false);
      setIDMessage("아이디를 입력하세요.");
    } else if (inputs.id) {
      setValidID(true);
      setIDMessage("");
    }
  };
  const controlPWGuideMessage = () => {
    if (!inputs.pw) {
      setValidPW(false);
      setPWMessage("비밀번호를 입력하세요.");
    } else if (inputs.pw) {
      setValidPW(true);
      setPWMessage("");
    }
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    goLogin();
  };

  return (
    <LoginContainer>
      <FormBox onSubmit={onClickSubmit}>
        <h1
          style={{
            textAlign: "left",
          }}
        >
          아이디와 비밀번호를 입력해 주세요
        </h1>
        <StyledFieldset style={{ border: "none" }}>
          <StyledLabel htmlFor="id">아이디</StyledLabel>
          <StyledInput
            name="id"
            type="text"
            placeholder="아이디"
            onChange={onChangeHandler}
            value={id}
          />
          {}
          <GuideMessage>{idMessage}</GuideMessage>
        </StyledFieldset>

        <StyledFieldset style={{ border: "none" }}>
          <StyledLabel htmlFor="pw">비밀번호</StyledLabel>
          <StyledInput
            name="pw"
            type="password"
            placeholder="비밀번호"
            onChange={onChangeHandler}
            value={pw}
          />
          <>
            <GuideMessage>{passwordMessage}</GuideMessage>
          </>
        </StyledFieldset>
        <>
          {validEmail === true && validPassword === true ? (
            <SubmitInput
              disabled={loading}
              type="submit"
              value="확인"
              style={{ backgroundColor: "rgb(3,38,65)" }}
            />
          ) : (
            <SubmitInput type="submit" disabled value="확인" />
          )}
        </>
        <div>{msg}</div>
      </FormBox>
    </LoginContainer>
  );
}

// 이메일, 비밀번호 유효성 검사+안내 메세지 코드

/**
 * // eslint-disable-next-line react-hooks/exhaustive-deps
const checkEmail =
/^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
// eslint-disable-next-line react-hooks/exhaustive-deps
const checkPW = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9])/;
const [validEmail, setValidEmail] = useState(false);
const [validPassword, setValidPassword] = useState(false);
const [emailMessage, setEmailMessage] = useState("");
const [passwordMessage, setPasswordMessage] = useState("");

const onChangeEmail = (e) => {
const { value, name } = e.target;
setInputs({
  ...inputs,
  [name]: value,
});
controlEmailGuideMessage();
};
const onChangePW = (e) => {
const { value, name } = e.target;
setInputs({
  ...inputs,
  [name]: value,
});
controlPWGuideMessage();
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
 */

{
  /* <StyledInput
            name="pw"
            type="password"
            placeholder="영문,숫자,특수문자 포함 8자리 이상"
            onChange={onChangeHandler}
            value={pw}
          /> */
}
