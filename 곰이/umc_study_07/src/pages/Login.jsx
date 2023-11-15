import {useState, React} from "react";
// import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

export default function Login() {

//   const navigate = useNavigate();

  const PageContainer = styled.div`
  border: 1px solid blue;
  height: 500px;
  width: 600px;
  margin: 0 auto;
  `; 

  const Wrapper = styled.div`
  `; 

  const Info = styled.div`
  border: 1px solid red;
  font-size: 30px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 20px;
  `; 

  const InputLabel = styled.div`
  width: 90%;
  border: 1px solid yellow;
  margin: 0 auto;
  margin-bottom: 30px;
  `; 

  const Form = styled.form`
  width: 600px;
  border: 1px solid green;
  `; 

  const TextLabel = styled.p`
  border: 1px solid purple;
  margin-bottom: 5px;
  `; 

  const TextBox = styled.input`
  border: 1px solid black;
  height: 40px;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 5px;
  padding-left: 10px;
  font-size: 15px;
  `; 

const Validation = styled.p`
  color: red;
  font-size: 12px;
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
`;

const [emailValid, setEmailValid] = useState(false);
const [passwordValid, setPasswordValid] = useState(false);

const Validation_email = (e) => {
    setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
  }

const Validation_password = (e) => {
  setPasswordValid(/^[A-Za-z0-9`\-=\\\[\];',\./~!@#\$%\^&\*\(\)_\+|\{\}:"<>\?]{8,16}$/.test(e.target.value));
}

// const handleSubmit = (event) => {
//   event.preventDefault();
// };


  return (
    <PageContainer>
        <Wrapper>
            <Info>이메일과 비밀번호를 입력해주세요</Info>
            <Form>
                <InputLabel>
                    <TextLabel>이메일 주소</TextLabel>
                    <TextBox type="text" onBlur={Validation_email}/>
                    <Validation>{emailValid ? "올바른 메일 형식입니다!" : "올바른 메일 형식이 아닙니다!"}</Validation>

                </InputLabel>
                <InputLabel>
                    <TextLabel>비밀번호</TextLabel>
                    <TextBox type="password" onBlur={Validation_password}/>
                    <Validation>{passwordValid ? "올바른 비밀번호 형식입니다!" : "올바른 비밀번호 형식이 아닙니다!"}</Validation>
                </InputLabel> 
               
                <SubmitButton type="submit">확인</SubmitButton>
            </Form>
        </Wrapper>
    </PageContainer>
  );
}