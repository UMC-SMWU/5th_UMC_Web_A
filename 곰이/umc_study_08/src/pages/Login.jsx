import {useState, useEffect, React} from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const PageContainer = styled.div`
border: 1px solid grey;
height: 500px;
width: 600px;
margin: 0 auto;
margin-top: 40px;
`; 

const Wrapper = styled.div`
`; 

const Info = styled.div`
// border: 1px solid red;
font-size: 30px;
font-weight: bold;
margin-top: 40px;
margin-bottom: 40px;
margin-left: 25px;
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

&:disabled {
  background-color: #dadada;
  color: #fff;
}

`;

export default function Login() {

const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [emailValid, setEmailValid] = useState(false);
const [passwordValid, setPasswordValid] = useState(false);
const [allow, setAllow] = useState(false);
  
const HandleEmail = (e) => {
  setEmail(e.target.value);
  setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
}

const HandlePassword= (e) => {
  setPassword(e.target.value);
  setPasswordValid(/^[A-Za-z0-9`\-=\\\[\];',\./~!@#\$%\^&\*\(\)_\+|\{\}:"<>\?]{8,16}$/.test(e.target.value));
}

const EmailValidation = () => {
  if (!emailValid && email ==="") {
    return <div style={{fontSize: "12px", marginLeft: "5px"}}>&nbsp;</div>;
  } 
  else if (!emailValid) {
    return (<div style={{color: "red", fontSize: "12px", marginLeft: "5px"}}>올바른 메일 형식이 아닙니다.</div>);
  }
  else {
    return (<div style={{color: "green", fontSize: "12px", marginLeft: "5px"}}>올바른 메일 형식입니다.</div>);
  }
}

const PasswordValidation = () => {
  if (!passwordValid && password ==="") {
    return <div style={{fontSize: "12px", marginLeft: "5px"}}>&nbsp;</div>;
  } 
  else if (!passwordValid) {
    return (<div style={{color: "red", fontSize: "12px", marginLeft: "5px"}}>올바른 비밀번호 형식이 아닙니다.</div>);
  }
  else {
    return (<div style={{color: "green", fontSize: "12px", marginLeft: "5px"}}>올바른 비밀번호 형식입니다.</div>);
  }
}

const HandleSubmit = (e) => {
  if (!allow) {
    e.preventDefault(); // allow가 false일 때만 기본 제출 동작 막기
  } else {
    // allow가 true일 때 수행할 작업 추가
    console.log("폼 제출!");
    navigate('/');
  }
};

useEffect(() => {
  if (emailValid && passwordValid) {
    setAllow(true);
  } else {
    setAllow(false);
  }
}, [emailValid, passwordValid]);

  return (
    <PageContainer>
        <Wrapper>
            <Info>이메일과 비밀번호를 입력해주세요</Info>
            <Form onSubmit={HandleSubmit}>
                <InputDiv>
                    <TextLabel>이메일 주소</TextLabel>
                    <TextBox
                    type="email"
                    value={email}
                    onChange={HandleEmail}/>
                    {EmailValidation()}
                </InputDiv>
                <InputDiv>
                    <TextLabel>비밀번호</TextLabel>
                    <TextBox type="password" value={password} onChange= {HandlePassword} />
                    {PasswordValidation()}
                </InputDiv> 
                <SubmitButton disabled={!allow} type="submit">확인</SubmitButton>
            </Form>
        </Wrapper>
    </PageContainer>
  );
}
