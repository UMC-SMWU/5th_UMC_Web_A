import {useState, React} from "react";
// import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

//   const navigate = useNavigate();

const PageContainer = styled.div`
// border: 1px solid blue;
height: 500px;
width: 600px;
margin: 0 auto;
`; 

const Wrapper = styled.div`
`; 

const Info = styled.div`
// border: 1px solid red;
font-size: 30px;
font-weight: bold;
margin-top: 40px;
margin-bottom: 20px;
`; 

const InputDiv = styled.div`
width: 90%;
// border: 1px solid yellow;
margin: 0 auto;
margin-bottom: 30px;
`; 

const Form = styled.form`
width: 600px;
// border: 1px solid green;
`; 

const TextLabel = styled.label`
// border: 1px solid purple;
margin-bottom: 5px;

`; 

const TextBox = styled.input`
// border: 1px solid black;
height: 40px;
width: 100%;
border-radius: 10px;
margin-bottom: 5px;
padding-left: 10px;
font-size: 15px;
`; 

const Validation = styled.div`
color: red;
font-size: 12px;
margin-left: 3px;
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

export default function Login() {


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [emailValid, setEmailValid] = useState(false);
const [passwordValid, setPasswordValid] = useState(false);

// const Validation_email = (e) => {
//   const inputValue = e.target.value;
//   setEmail(inputValue);
  
const HandleEmail = (e) => {
  setEmail(e.target.value);
  
  // setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
}

const HandlePassword= (e) => {
  setPassword(e.target.value);
  // setPasswordValid(/^[A-Za-z0-9`\-=\\\[\];',\./~!@#\$%\^&\*\(\)_\+|\{\}:"<>\?]{8,16}$/.test(e.target.value));
}

  return (
    <PageContainer>
        <Wrapper>
            <Info>이메일과 비밀번호를 입력해주세요</Info>
            <Form>
                <InputDiv>
                    <TextLabel>이메일 주소</TextLabel>
                    <TextBox type="email" value={email} onChange={HandleEmail} />
                    {/* <Validation>{emailValid ? "올바른 메일 형식입니다!" : "올바른 메일 형식이 아닙니다!"}</Validation> */}

                </InputDiv>
                <InputDiv>
                    <TextLabel>비밀번호</TextLabel>
                    <TextBox type="password" value={password} onChange= {HandlePassword} />
                    {/* <Validation>{passwordValid ? "올바른 비밀번호 형식입니다!" : "올바른 비밀번호 형식이 아닙니다!"}</Validation> */}
                </InputDiv> 
                <SubmitButton type="submit">확인</SubmitButton>
            </Form>
        </Wrapper>
    </PageContainer>
  );
}