import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from 'axios';
// import { loginUserAsync } from '../redux/login/actions'; // actions 경로로 수정
import { setCookie } from '../util/CookieUtil'; // your-cookie-path에 실제 파일 경로를 입력해야 합니다.
import styled from 'styled-components';

const PageContainer = styled.div`
  border: 1px solid grey;
  height: 500px;
  width: 600px;
  margin: 0 auto;
  margin-top: 40px;
`;

const Wrapper = styled.div``;

const Info = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 25px;
`;

const InputDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const Form = styled.form`
  width: 600px;
`;

const TextLabel = styled.label`
  margin-bottom: 5px;
`;

const TextBox = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 5px;
  padding-left: 10px;
  font-size: 15px;
`;

const SubmitButton = styled.button`
  display: block;
  background-color: navy;
  width: 90%;
  height: 40px;
  border-radius: 15px;
  box-shadow: none;
  color: white;
  margin: 0 auto;

  &:disabled {
    background-color: #dadada;
    color: #fff;
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const [inputs, setInputs] = useState({ id: '', pw: '' });
  const { id, pw } = inputs;
  const [loading, setLoading] = useState(false);

  const HandleChange = (e) => {
    const {id, value } = e.target;
    setInputs((prev) => ({...prev, [id]: value}));
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();

    let body = {
      id,
      pw,
    }; 

    try {
      setLoading(true);
      const res = await axios.post('http://localhost:8000/user/login', body);
      // dispatch(loginUserAsync(id, pw));
      dispatch({ type: 'user/loginUser', payload: res.data.result });
      // 로그인에 성공하면 id와 pw를 쿠키로 저장
      setCookie('userId', id, { path: '/' });
      setCookie('userPw', pw, { path: '/' });
      navigate('/');
    }
    catch (error) {
      const status = error.response.status;
      if (status === 400) {
        alert('비어있는 내용입니다.');
        return;
      }
      if (status === 404) {
        alert('아이디 또는 비밀번호가 틀렸습니다.');
        return;
      }
    } finally {
      setTimeout(() => setLoading(false), 1500);
    }
  };

  return (
    <PageContainer>
      <Wrapper>
        <Info>이메일과 비밀번호를 입력해주세요</Info>
        <Form onSubmit={HandleSubmit}>
          <InputDiv>
            <TextLabel>아이디</TextLabel>
            <TextBox
              id="id"
              type="id"
              value={id}
              onChange={HandleChange}
              placeholder="아이디"
            />
          </InputDiv>
          <InputDiv>
            <TextLabel>비밀번호</TextLabel>
            <TextBox
              id="pw"
              type="password"
              value={pw}
              onChange={HandleChange}
              placeholder="비밀번호"
            />
          </InputDiv>
          <SubmitButton disabled={loading} type="submit">확인</SubmitButton>
          {loading && <div>Loading...</div>}
        </Form>
      </Wrapper>
    </PageContainer>
  );
}
