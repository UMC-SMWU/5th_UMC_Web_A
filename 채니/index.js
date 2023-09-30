function checkUserInfo() {
  const usernameInput = document.getElementById("username");
  const usernameErrorMessage = document.getElementById(
    "username-error-message"
  );
  const nicknameInput = document.getElementById("nickname");
  const nicknameErrorMessage = document.getElementById(
    "nickname-error-message"
  );
  const emailInput = document.getElementById("email"); // 이메일 입력란
  const emailErrorMessage = document.getElementById("email-error-message");

  const passwordInput = document.getElementById("password"); // 비밀번호 입력란
  const passwordErrorMessage = document.getElementById(
    "password-error-message"
  );

  const passwordConfirmInput = document.getElementById("double-password"); // 비밀번호 확인란
  const passwordConfirmErrorMessage = document.getElementById(
    "passwordConfirm-error-message"
  );

  //이벤트
  if (usernameInput.value.trim() === "") {
    usernameErrorMessage.textContent = "내용을 입력해주세요.";
  } else {
    usernameErrorMessage.textContent = "이름 제대로 입력함!";
    usernameErrorMessage.style.color = "green";
    usernameErrorMessage.style.marginLeft = "-10px";
  }

  if (nicknameInput.value.length < 2 || nicknameInput.value.length > 5) {
    nicknameErrorMessage.textContent = "2자 이상, 5자 이하로 입력해주세요.";
  } else {
    nicknameErrorMessage.textContent = "닉네임을 올바르게 입력함!";
    nicknameErrorMessage.style.color = "green";
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailErrorMessage.textContent = "올바른 이메일 주소를 입력하세요.";
  } else {
    emailErrorMessage.textContent = "올바르게 입력함 !";
    emailErrorMessage.style.color = "green";
  }

  const passwordPattern =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  if (!passwordPattern.test(passwordInput.value)) {
    passwordErrorMessage.textContent =
      "영문, 숫자, 특수 문자만을 포함하여 입력하세요.";
  } else {
    passwordErrorMessage.textContent = "올바른 비밀번호임 !";
    passwordErrorMessage.style.color = "green";
  }

  if (passwordInput.value !== passwordConfirmInput.value) {
    passwordConfirmErrorMessage.textContent = "비밀번호가 일치하지 않습니다.";
  } else {
    passwordConfirmErrorMessage.textContent = "일치하는 비밀번호임!";
    passwordConfirmErrorMessage.style.color = "green";
  }

  if (
    usernameInput.value.trim() !== "" &&
    nicknameInput.value.length >= 2 && // 수정: 길이가 2 이상인지 확인
    nicknameInput.value.length <= 5 && // 수정: 길이가 5 이하인지 확인
    emailPattern.test(emailInput.value) &&
    passwordPattern.test(passwordInput.value) &&
    passwordInput.value == passwordConfirmInput.value
  ) {
    openModal();
  }
}

// 모달창 열기
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// 모달창 닫기
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
