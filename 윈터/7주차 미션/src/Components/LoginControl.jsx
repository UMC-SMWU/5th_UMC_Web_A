import React, { useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

const Button = styled.button``;

const Message = styled.span`
	color: white;
`;

function LoginControl() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLoginClick = () => {
		setIsLoggedIn(true);
	};

	const handleLogoutClick = () => {
		setIsLoggedIn(false);
	};

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
