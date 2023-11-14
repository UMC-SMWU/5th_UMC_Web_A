import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	max-width: 500px;
	display: flex;
	padding: 0 20px;
	left: 50%; // 가운데에 배치
	transform: translate(-50%, 0);
	flex-direction: column;
	background-color: #f7f7f7;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	/* gap: 8px; */
`;

const TitleWrap = styled.h1`
	margin-top: 87px;
	font-size: 26px;
	font-weight: 700;
	color: #262626;
	display: flex;
`;

const Content = styled.div`
	gap: 20px;
	margin-bottom: 20px;
`;

const ContentWrap = styled.div`
	margin-top: 26px;
	flex: 1; //남는 공간을 차지하도록 함
`;

const InputTitle = styled.h3`
	font-size: 12px;
	font-weight: 600;
	color: #262626;
`;

const InputWrap = styled.div`
	display: flex;
	border-radius: 8px;
	padding: 16px;
	margin-top: 8px;
	background-color: #fff;
	border: 1px solid #e2e0e0;
	font-size: 20px;

	// 포커스가 있는 경우의 스타일
	&:focus-within {
		border: 1px solid #9e30f4;
	}
`;

const Input = styled.input`
	width: 100%;
	outline: none;
	border: none;
	height: 17px;
	font-size: 14px;
	font-weight: 400;

	&::placeholder {
		color: #dadada;
	}
`;

const ErrorMessageWrap = styled.div`
	margin-top: 8px;
	color: #ef0000;
	font-size: 12px;
`;

const Button = styled.button`
	width: 100%;
	height: 48px;
	border: none;
	font-weight: 700; // 700이 bold
	background-color: #9e30f4;
	border-radius: 64px;
	color: white;
	margin-bottom: 16px;
	cursor: pointer;

	// 버튼이 활성화되지 않았을때의 상태를 지정해줌
	&:disabled {
		background-color: #dadada;
		color: #fff;
	}
`;

export default function LoginPage() {
	const [email, setEmail] = useState(""); //빈 문자열로 초기화
	const [pw, setPw] = useState("");

	const [emailValid, setEmailValid] = useState(false);
	const [pwValid, setPwValid] = useState(false);
	const [notAllow, setNotAllow] = useState(true); // 확인버튼의 활성화와 비활성화

	const handleEmail = (e) => {
		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // 이메일 정규식

		setEmail(e.target.value);
		setEmailValid(regex.test(email) ? true : false);
		// if (regex.test(email)) {
		// 	setEmailValid(true);
		// } else {
		// 	setEmailValid(false);
		// }
	};

	const handlePassword = (e) => {
		const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // 비밀번호 정규식

		setPw(e.target.value);
		setPwValid(regex.test(pw) ? true : false);
		// if (regex.test(pw)) {
		// 	setPwValid(true);
		// } else {
		// 	setPwValid(false);
		// }
	};

	useEffect(() => {
		if (emailValid && pwValid) {
			setNotAllow(false);
			return;
		}
		setNotAllow(true);
	}, [emailValid, pwValid]);

	return (
		<Container className="page">
			<TitleWrap className="titleWrap">
				이메일과 비밀번호를
				<br />
				입력해주세요
			</TitleWrap>

			<Content>
				<ContentWrap>
					<InputTitle>이메일 주소</InputTitle>
					<InputWrap>
						<Input type="text" placeholder="test@gmail.com" value={email} onChange={handleEmail} />
					</InputWrap>
					<ErrorMessageWrap>
						{!emailValid && email.length > 0 && <div>올바른 이메일을 입력해주세요.</div>}
					</ErrorMessageWrap>
				</ContentWrap>

				<ContentWrap>
					<InputTitle>비밀번호</InputTitle>
					<InputWrap>
						<Input
							type="password"
							placeholder="영문, 숫자, 특수문자 포함 8자 이상"
							value={pw}
							onChange={handlePassword}
						/>
					</InputWrap>
					<ErrorMessageWrap>
						{!pwValid && pw.length > 0 && (
							<div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
						)}
					</ErrorMessageWrap>
				</ContentWrap>
			</Content>

			<div>
				<Button disabled={notAllow}>확 인</Button>
			</div>
		</Container>
	);
}
