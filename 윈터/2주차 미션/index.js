// 이름 유효성 검사
function checkValidationForName() {
	const regName = /^[가-힣]{2,7}$/;

	const nameInputElement = document.getElementById("name");

	if (nameInputElement.value === "") {
		return {
			isError: true,
			message: "필수 입력 항목입니다!",
		};
	} else if (!regName.test(nameInputElement.value)) {
		return {
			isError: true,
			message: "이름은 2 ~ 7글자 한글로 구성해주세요!",
		};
	} else {
		return {
			isError: false,
			message: "멋진 이름이네요!",
		};
	}
}

// 닉네임 유효성 검사
function checkValidationForNickname() {
	const regNickname = /^[가-힣]{2,7}$/;

	const nicknameInputElement = document.getElementById("nickName");

	if (nicknameInputElement.value === "") {
		return {
			isError: true,
			message: "필수 입력 항목입니다!",
		};
	} else if (!regNickname.test(nicknameInputElement.value)) {
		return {
			isError: true,
			message: "닉네임은 2 ~ 7글자 한글로 구성해주세요!",
		};
	} else {
		return {
			isError: false,
			message: "멋진 닉네임이군요!",
		};
	}
}

// 이메일 유효성 검사
function checkValidationForEmail() {
	const regEmail =
		/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

	const emailInputElement = document.getElementById("email");

	if (emailInputElement.value === "") {
		return {
			isError: true,
			message: "필수 입력 항목입니다!",
		};
	} else if (!regEmail.test(emailInputElement.value)) {
		return {
			isError: true,
			message: "올바른 메일 형식이 아닙니다!",
		};
	} else {
		return {
			isError: false,
			message: "올바른 메일 형식입니다!",
		};
	}
}

// 비밀번호 유효성 검사
function checkValidationForPassword() {
	const regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

	const passwordInputElement = document.getElementById("password");

	if (passwordInputElement.value === "") {
		return {
			isError: true,
			message: "필수 입력 항목입니다!",
		};
	} else if (!regPassword.test(passwordInputElement.value)) {
		return {
			isError: true,
			message: "영어+숫자를 조합하여 8자 이상 작성해주세요.",
		};
	} else {
		return {
			isError: false,
			message: "안전한 비밀번호입니다!",
		};
	}
}

// 비밀번호 확인 유효성 검사
function checkValidationForPasswordConfirm() {
	const regPasswordCheck = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

	const passwordConfirmInputElement = document.getElementById("passwordConfirm");

	if (passwordConfirmInputElement.value === "") {
		return {
			isError: true,
			message: "비밀번호를 입력해주세요!",
		};
	} else if (!regPasswordCheck.test(passwordConfirmInputElement.value)) {
		return {
			isError: true,
			message: "영어+숫자를 조합하여 8자 이상 작성해주세요.",
		};
	} else if (passwordConfirmInputElement.value !== passwordConfirmInputElement.value) {
		return {
			isError: true,
			message: "비밀번호가 일치하지 않습니다.",
		};
	} else {
		return {
			isError: false,
			message: "비밀번호가 일치합니다.",
		};
	}
}

function handleSignUpButtonClick() {
	const signUpCompletionModalOverlayElement = document.querySelector(
		".sign-up-completion-modal-overlay"
	);

	signUpCompletionModalOverlayElement.classList.add("open");
}

function handleSignUpCompletionModalCloseButtonClick() {
	const signUpCompletionModalOverlayElement = document.querySelector(
		".sign-up-completion-modal-overlay"
	);

	signUpCompletionModalOverlayElement.classList.remove("open");
}

function checkValidationForSignUpForm() {
	return !(
		checkValidationForName().isError ||
		checkValidationForNickname().isError ||
		checkValidationForEmail().isError ||
		checkValidationForPassword().isError ||
		checkValidationForPasswordConfirm().isError
	);
}

function updateSignUpButtonStatus() {
	const signUpButtonElement = document.getElementById("sign-up-button");
	signUpButtonElement.disabled = !checkValidationForSignUpForm();
}

function main() {
	const nameInputElement = document.getElementById("name");
	const nicknameInputElement = document.getElementById("nickName");
	const emailInputElement = document.getElementById("email");
	const passwordInputElement = document.getElementById("password");
	const passwordConfirmInputElement = document.getElementById("passwordConfirm");
	const signUpButtonElement = document.getElementById("sign-up-button");

	function handleNameInputElementFocusOut() {
		const nameCheckElement = document.getElementById("nameCheck");
		const { isError, message } = checkValidationForName();

		if (isError) {
			nameCheckElement.style.color = "red";
		} else {
			nameCheckElement.style.color = "green";
		}

		nameCheckElement.innerText = message;
		updateSignUpButtonStatus();
	}

	function handleNicknameInputElementFocusOut() {
		const nicknameCheckElement = document.getElementById("nickNameCheck");
		const { isError, message } = checkValidationForNickname();

		if (isError) {
			nicknameCheckElement.style.color = "red";
		} else {
			nicknameCheckElement.style.color = "green";
		}

		nicknameCheckElement.innerText = message;
		updateSignUpButtonStatus();
	}

	function handleEmailInputElementFocusOut() {
		const emailCheckElement = document.getElementById("emailCheck");
		const { isError, message } = checkValidationForEmail();

		if (isError) {
			emailCheckElement.style.color = "red";
		} else {
			emailCheckElement.style.color = "green";
		}

		emailCheckElement.innerText = message;
		updateSignUpButtonStatus();
	}

	function handlePasswordInputElementFocusOut() {
		const passwordCheckElement = document.getElementById("passwordCheck");
		const { isError, message } = checkValidationForPassword();

		if (isError) {
			passwordCheckElement.style.color = "red";
		} else {
			passwordCheckElement.style.color = "green";
		}

		passwordCheckElement.innerText = message;
		updateSignUpButtonStatus();
	}

	function handlePasswordConfirmInputElementFocusOut() {
		const passwordConfirmCheckElement = document.getElementById("passwordConfirmCheck");
		const { isError, message } = checkValidationForPasswordConfirm();

		if (isError) {
			passwordConfirmCheckElement.style.color = "red";
		} else {
			passwordConfirmCheckElement.style.color = "green";
		}

		passwordConfirmCheckElement.innerText = message;
		updateSignUpButtonStatus();
	}

	nameInputElement.addEventListener("focusout", handleNameInputElementFocusOut);
	nicknameInputElement.addEventListener("focusout", handleNicknameInputElementFocusOut);
	emailInputElement.addEventListener("focusout", handleEmailInputElementFocusOut);
	passwordInputElement.addEventListener("focusout", handlePasswordInputElementFocusOut);
	passwordConfirmInputElement.addEventListener(
		"focusout",
		handlePasswordConfirmInputElementFocusOut
	);
	updateSignUpButtonStatus();
}

main();
