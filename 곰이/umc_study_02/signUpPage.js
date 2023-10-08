var username = document.getElementById('username');
var username_v = document.getElementById('username-validation');

var nickname = document.getElementById('nickname');
var nickname_v = document.getElementById('nickname-validation');

var email = document.getElementById('email');
var email_v = document.getElementById('email-validation');

var password = document.getElementById('password');
var password_v = document.getElementById('password-validation');

var password_check = document.getElementById('password_check');
var password_check_v = document.getElementById('password_check_validation');

const open = document.getElementById("signUp");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");
const final_check = new Array(false, false, false, false, false,);


// 회원가입 유효성 체크 바리데이션

function signUpValidation_1() {
    if (username.value=="") {
        username_v.style.color = 'red';
        username_v.innerText = "필수 입력 항목입니다!";
        final_check[0] = false;
    }
    else {
        username_v.style.color = 'rgb(0, 255, 166)';
        username_v.innerText = "멋진 이름이네요!";
        final_check[0] = true;
    }
}

function signUpValidation_2() {
    if (nickname.value.length > 5 || nickname.value.length < 2) {
        nickname_v.style.color = 'red';
        nickname_v.innerText = "닉네임은 2~5글자로 구성해주세요!";
        final_check[1] = false;
    }
    else {
        nickname_v.style.color = 'rgb(0, 255, 166)';
        nickname_v.innerText = "멋진 닉네임이군요!";
        final_check[1] = true;
    }
}

function signUpValidation_3() {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!regExp.test(email.value)) {
        email_v.style.color = 'red';
        email_v.innerText = "올바른 메일 형식이 아닙니다!";
        final_check[2] = false;
    }
    else {
        email_v.style.color = 'rgb(0, 255, 166)';
        email_v.innerText = "올바른 메일 형식입니다!";
        final_check[2] = true;
    }
}

function signUpValidation_4() {
    var isPW = /^[A-Za-z0-9`\-=\\\[\];',\./~!@#\$%\^&\*\(\)_\+|\{\}:"<>\?]{8,16}$/;
    if (!isPW.test(password.value)) {
        password_v.style.color = 'red';
        password_v.innerText = "영어+숫자+특수문자를 조합하여 작성해주세요.";
        final_check[3] = false;
    }
    else {
        password_v.style.color = 'rgb(0, 255, 166)';
        password_v.innerText = "안전한 비밀번호입니다!";
        final_check[3] = true;
    }
}

function signUpValidation_5() {
    if (password_check.value != password.value) {
        password_check_v.style.color = 'red';
        password_check_v.innerText = "비밀번호가 일치하지 않습니다.";
        final_check[4] = false;
    }
    else {
        password_check_v.style.color = 'rgb(0, 255, 166)';
        password_check_v.innerText = "비밀번호가 일치합니다!";
        final_check[4] = true;
    }
}

open.onclick = () => {
    if (final_check.indexOf(false) === -1) {
        modal.style.display = "flex";
    }
};

close.onclick = () => {
    modal.style.display = "none";
};