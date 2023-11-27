import axios from "axios";
import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../app/authSlice";

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
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    goLogin();
  };

  // const LogoutHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(logout());
  // };

  return (
    <LoginContainer>
      {/* {isLoggedIn === true ? (
        <button onClick={LogoutHandler}>Logout</button>
      ) : (
        <button onClick={LoginHandler}>LoginHandler</button>
      )} */}

      <FormBox onSubmit={onClickSubmit}>
        <h1 style={{ textAlign: "left" }}>이메일과 비밀번호를 입력해 주세요</h1>
        <StyledFieldset style={{ border: "none" }}>
          <StyledLabel htmlFor="email">아이디</StyledLabel>
          <StyledInput
            name="id"
            type="text"
            placeholder="아이디를 입력하세요."
            onChange={onChangeHandler}
            value={id}
          />
        </StyledFieldset>

        <StyledFieldset style={{ border: "none" }}>
          <StyledLabel htmlFor="pw">비밀번호</StyledLabel>
          <StyledInput
            name="pw"
            type="password"
            placeholder="비밀번호를 입력하세요."
            onChange={onChangeHandler}
            value={pw}
          />
        </StyledFieldset>
        <SubmitInput
          disabled={loading}
          type="submit"
          value="확인"
          style={{ backgroundColor: "rgb(3,38,65)" }}
        />
        <div>{msg}</div>
      </FormBox>
    </LoginContainer>
  );
}

//     {validEmail === true && validPassword === true ? (
//       <SubmitInput
//         type="submit"
//         value="확인"
//         style={{ backgroundColor: "rgb(3,38,65)" }}
//       />
//     ) : (
//       <SubmitInput type="submit" disabled value="확인" />
//     )}
//   </>
