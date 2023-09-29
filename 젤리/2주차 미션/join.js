document.addEventListener("DOMContentLoaded", function (event) {
  const wid = document.getElementById("wid");
  const wnickname = document.getElementById("wnickname");
  const wemail = document.getElementById("weamail");
  const wpwd = document.getElementById("wpwd");
  const wpwdchk = document.getElementById("wpwdchk");
  const joinbutton = document.getElementById("joinbutton");

  const iid = document.querySelector(".id");
  const inickname = document.querySelector(".nickname");
  const iemail = document.querySelector(".email");
  const ipwd = document.querySelector(".pwd");
  const ipwdchk = document.querySelector(".pwdchk");

  joinbutton.setAttribute("disabled", "true");

  iid.addEventListener("input", checkInputs);
  inickname.addEventListener("input", checkInputs);
  iemail.addEventListener("input", checkInputs);
  ipwd.addEventListener("input", checkInputs);
  ipwdchk.addEventListener("input", checkInputs);

  function checkInputs() {
    const isIdValid = idcheck();
    const isNicknameValid = nicknamecheck();
    const isEmailValid = emailcheck();
    const isPwdValid = pwdcheck();
    const isPwdChkValid = pwddbchk();

    if (
      isIdValid &&
      isNicknameValid &&
      isEmailValid &&
      isPwdValid &&
      isPwdChkValid
    ) {
      joinbutton.removeAttribute("disabled");
    } else {
      joinbutton.setAttribute("disabled", "true");
    }
  }

  function idcheck() {
    if (iid.value === "") {
      wid.style.visibility = "visible";
      wid.textContent = "필수 입력 항목입니다!";
      wid.style.color = "red";
      return false;
    } else {
      wid.style.visibility = "visible";
      wid.textContent = "멋진 이름이네요!";
      wid.style.color = "green";
      return true;
    }
  }

  function nicknamecheck() {
    if (inickname.value.length > 5 || inickname.value.length < 2) {
      wnickname.style.visibility = "visible";
      wnickname.textContent = "닉네임은 2~5글자로 구성해주세요!";
      wnickname.style.color = "red";
      return false;
    } else {
      wnickname.style.visibility = "visible";
      wnickname.textContent = "멋진 닉네임이네요!";
      wnickname.style.color = "green";
      return true;
    }
  }

  function emailcheck() {
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!iemail.value.match(regExp)) {
      wemail.style.visibility = "visible";
      wemail.textContent = "올바른 메일 형식이 아닙니다!";
      wemail.style.color = "red";
      return false;
    } else {
      wemail.style.visibility = "visible";
      wemail.textContent = "올바른 메일 형식입니다!";
      wemail.style.color = "green";
      return true;
    }
  }

  function pwdcheck() {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
    if (!ipwd.value.match(passwordRegex)) {
      wpwd.style.visibility = "visible";
      wpwd.textContent = "영어+숫자+특수문자를 조합하여 작성해주세요.";
      wpwd.style.color = "red";
      return false;
    } else {
      wpwd.style.visibility = "visible";
      wpwd.textContent = "안전한 비밀번호입니다!";
      wpwd.style.color = "green";
      return true;
    }
  }

  function pwddbchk() {
    if (ipwdchk.value !== ipwd.value) {
      wpwdchk.style.visibility = "visible";
      wpwdchk.textContent = "비밀번호가 일치하지 않습니다.";
      wpwdchk.style.color = "red";
      return false;
    } else {
      wpwd.style.visibility = "visible";
      wpwdchk.textContent = "비밀번호가 일치합니다!";
      wpwdchk.style.color = "green";
      return true;
    }
  }
});
