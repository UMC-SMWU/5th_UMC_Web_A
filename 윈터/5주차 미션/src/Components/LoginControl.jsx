import React, { useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
	display: flex;
	gap: 8px;
	align-items: "center";
`;

const Button = styled.button`
	margin: 0;
`;

const Message = styled.span`
	align-items: "center";
`;

function LoginControl() {
	// this.state 활용해서 isLoggedIn 의 값으로 상태 관리할 수 있도록 만들기
	// isLoggedIn 타입이? boolean
	// isLoggedIn 초기값은 무엇으로 세팅할거야? false
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLoginClick = () => {
		setIsLoggedIn(true);
	};

	const handleLogoutClick = () => {
		setIsLoggedIn(false);
	};

	// const handleLoginOrLogoutButtonClick = () => {
	// 	setIsLoggedIn((prev) => !prev);
	// };

	// 로그인 상태일 때 즉 isLoggedIn가 true 일 때는 '로그아웃'
	// 반대로 로그아웃 상태일 때 즉 isLoggedIn false 는

	// 로그인 해주세요!
	// 환영합니다!

	return (
		<Container>
			<Button type="button" onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}>
				{isLoggedIn ? "로그아웃" : "로그인"}
			</Button>
			<Message>{isLoggedIn ? "환영합니다!" : "로그인 해주세요!"}</Message>
		</Container>
	);
}

export default LoginControl;
