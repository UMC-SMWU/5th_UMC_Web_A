import React, { useState } from "react";
import * as S from "./LoginPage.style";
import { Input } from "../../components";
import { login } from "../../api";
import { setCookie } from "../../utils";

const LoginPage = () => {
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleIdInputChange = (event) => {
		// 입력되는 값을 event 객체에서 가지고 온다.
		setId(event.target.value);
	};

	const handlePasswordInputChange = (event) => {
		setPassword(event.target.value);
	};

	const handleLoginFormSubmit = (event) => {
		// Submit 액션의 기본 동작(페이지 초기화) 비활성화
		event.preventDefault();
		setIsLoading(true);

		let errorMessage = "";

		if (id === "" && password === "") {
			errorMessage = "아이디 & 비밀번호를 입력해주세요.";
		} else if (id === "") {
			errorMessage = "아이디를 입력해주세요.";
		} else if (password === "") {
			errorMessage = "비밀번호를 입력해주세요.";
		}

		if (errorMessage !== "") {
			alert(errorMessage);

			return;
		}

		login({
			id: id,
			pw: password,
		})
			.then((response) => {
				// 로그인 성공 시 처리

				const accessToken = response.data.result.AccessToken;

				// 쿠키에 토큰 저장
				// console.log(accessToken); -> 성공
				setCookie("token", accessToken);
			})
			.catch((error) => {
				// API 에러 발생 시 서버에서 보내주는 error response에 있는 메시지를 alert으로 띄운다.
				alert(error.response.data.message);
			})
			.finally(() => {
				setTimeout(() => {
					setIsLoading(false);
				}, 1500);
			});
	};

	return (
		<S.Container>
			<S.Title>로그인</S.Title>

			<S.LoginForm onSubmit={handleLoginFormSubmit}>
				<Input type="text" label="아이디" name="id" value={id} onChange={handleIdInputChange} />
				<Input
					type="password"
					label="비밀번호"
					name="password"
					value={password}
					onChange={handlePasswordInputChange}
				/>
				<S.LoginButton type="submit" disabled={isLoading}>
					{isLoading ? "Loading..." : "로그인 하기"}
				</S.LoginButton>
			</S.LoginForm>
		</S.Container>
	);
};

export default LoginPage;
