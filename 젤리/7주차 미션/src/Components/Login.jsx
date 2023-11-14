import { useState } from 'react';
import React from 'react'
import { isRouteErrorResponse, useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const Intro = styled.p`
    font-weight: bolder;
    font-style: Italic;
    font-size: 30px;
    margin: 15px 10px;
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
    const navigate = useNavigate();
    return (
        <div className='page-container'>
            <div className='Loginbox'>
                <Intro>이메일과 비밀번호를 입력해주세요</Intro>
                <form action="submit">
                    <LogTitle>이메일 주소</LogTitle>
                    <LogInput type="email" />
                    
                    <br />
                    <LogTitle>비밀번호</LogTitle>
                    <LogInput type="password" placeholder='영문, 숫자, 특수문자 포함 8자 이상' />
                    <LogButton>확인</LogButton>
                </form>
            </div>
        </div>
    )
}

