import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginUser } from "../reducer/userSlice";

const Intro = styled.p`
  font-weight: bolder;
  font-style: italic;
  font-size: 30px;
  margin: 10px 0px 20px 0px;
`;

const LogTitle = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin: 5px;
`;

const LogInput = styled.input`
  width: 50%;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  outline: 1px solid gray;
`;

const LogButton = styled.button`
  width: 50%;
  background-color: gray;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 25px;
  padding: 10px;
  margin-left: 10px;
  margin-top: 10px;
  &:hover {
    background-color: navy;
  }
`;

export default function Login() {
  const [id, setId] = useState("");
  const [isValidId, setValidId] = useState(false);
  const [pw, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleidChange = (event) => {
    const newid = event.target.value;
    setId(newid);
    const idRegExp = /^[a-z]+[a-z0-9]{5,19}$/g;
    setValidId(idRegExp.test(newid));
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const chkValid = () => {
    return isValidId ? null : (
      <p style={{ color: "red", margin: "0px 0px 20px 10px" }}>
        올바른 아이디를 입력해주세요
      </p>
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let body = {
      id,
      pw,
    };
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/user/login",
        body
      );
      dispatch(
        loginUser({ type: "user/loginUser", payload: response.data.result })
      );
      navigate("/");
    } catch (error) {
      if (error.response) {
        const code = error.response.status;
        switch (code) {
          case 400:
            alert("비어있는 항목이 존재합니다");
          case 401:
            alert("존재하지 않는 ID입니다");
          case 402:
            alert("비밀번호가 틀렸습니다");
          default:
            break;
        }
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  return (
    <div className='page-container'>
      <div className='Loginbox'>
        <Intro>아이디 비밀번호를 입력해주세요</Intro>
        <form onSubmit={handleSubmit}>
          <LogTitle>아이디 주소</LogTitle>
          <LogInput
            type='text'
            value={id}
            onChange={handleidChange}
          />
          {chkValid()}
          <LogTitle>비밀번호</LogTitle>
          <LogInput
            type='password'
            value={pw}
            onChange={handlePasswordChange}
            placeholder='영문, 숫자, 특수문자 포함 8자 이상'
          />
          <LogButton
            disabled={loading}
            type='submit'
          >
            확인
          </LogButton>
          {loading && <div>Loading...</div>}
        </form>
      </div>
    </div>
  );
}
