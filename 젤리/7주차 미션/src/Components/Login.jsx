import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const Intro = styled.p`
    font-weight: bolder;
    font-style: italic;
    font-size: 30px;
    margin: 10px 0px 20px 0px;
`;

const LogTitle = styled.p`
    font-size : 15px;
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

const LogButton = styled.button `
    width: 50%;
    background-color: gray;
    color:white;
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
    const [email, setEmail] = useState('');
    const [isValidEmail, setValidEmail] = useState(false);
    const navigate = useNavigate();
    
    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    
        const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setValidEmail(emailRegExp.test(newEmail));
    };

    const chkValid = (event) => {
        return isValidEmail ? null : <p style={{color:'red',
        margin: '0px 0px 20px 10px'
    }}>올바른 이메일을 입력해주세요</p>
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValidEmail) {
            navigate('/');
        }
    };
    return (
        <div className='page-container'>
            <div className='Loginbox'>
                <Intro>이메일과 비밀번호를 입력해주세요</Intro>
                <form onSubmit={handleSubmit}>
                    <LogTitle>이메일 주소</LogTitle>
                    <LogInput type="email" onChange={handleEmailChange} />
                    {chkValid()}
                   <LogTitle>비밀번호</LogTitle>
                    <LogInput type="password" placeholder='영문, 숫자, 특수문자 포함 8자 이상' />
                    <LogButton type="submit">확인</LogButton>
                </form>
            </div>
        </div>
    )
}

