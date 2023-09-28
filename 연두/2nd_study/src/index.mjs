import "./styles.css";

const input_name = document.querySelector('#name');
const input_nickname = document.querySelector('#nickname');
const input_email = document.querySelector('#email');
const input_pw = document.querySelector('#pw');
const input_pwconfirm = document.querySelector('#pw_confirm');

const submit_button = document.querySelector('.form_button');
const close_button = document.querySelector('.close-button');
const modal = document.getElementById("modal-wrap");

const name_successMessage = document.querySelector('.name-success-message');
const name_failureMessage = document.querySelector('.name-failure-message');
const nick_successMessage = document.querySelector('.nick-success-message');
const nick_failureMessage = document.querySelector('.nick-failure-message');
const email_successMessage = document.querySelector('.email-success-message');
const email_failureMessage = document.querySelector('.email-failure-message');
const pw_successMessage = document.querySelector('.pw-success-message');
const pw_failureMessage = document.querySelector('.pw-failure-message');
const confirm_successMessage = document.querySelector('.confirm-success-message');
const confirm_failureMessage = document.querySelector('.confirm-failure-message');


input_name.onkeyup = ()=>{
  if(input_name.value.length>0){
    name_successMessage.classList.remove('hide'); // 보여주기
    name_failureMessage.classList.add('hide'); // 숨기기
  } else {
    name_successMessage.classList.add('hide');
    name_failureMessage.classList.remove('hide');
  }
}

input_nickname.onkeyup = ()=>{
  if(input_nickname.value.length>=2 && input_nickname.value.length<=5){
    nick_successMessage.classList.remove('hide'); 
    nick_failureMessage.classList.add('hide'); 
  } else {
    nick_successMessage.classList.add('hide');
    nick_failureMessage.classList.remove('hide');
  }
}

const checkEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.com$/ 

input_email.onkeyup = ()=>{
  if(checkEmail.test(input_email.value)){
    email_successMessage.classList.remove('hide'); 
    email_failureMessage.classList.add('hide'); 
  } else {
    email_successMessage.classList.add('hide');
    email_failureMessage.classList.remove('hide');
  }
}

const checkPW = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9])/

input_pw.onkeyup = ()=>{
  if(checkPW.test(input_pw.value)){
    pw_successMessage.classList.remove('hide'); 
    pw_failureMessage.classList.add('hide'); 
  } else {
    pw_successMessage.classList.add('hide');
    pw_failureMessage.classList.remove('hide');
  }
}


input_pwconfirm.onkeyup = ()=>{
  if(input_pwconfirm.value===input_pw.value){
    confirm_successMessage.classList.remove('hide'); 
    confirm_failureMessage.classList.add('hide'); 
  } else {
    confirm_successMessage.classList.add('hide');
    confirm_failureMessage.classList.remove('hide');
  }
}

const validate = () =>{
  if (input_name.value && input_name.value && input_email.value && input_pw.value && input_pwconfirm.value){
    submit_button.classList.add('activate-button')
    submit_button.disabled=false;
  }
  else{
    submit_button.classList.remove('activate-button')
    submit_button.disabled=true;
  }
}

input_name.addEventListener("keyup",validate);
input_nickname.addEventListener("keyup",validate);
input_email.addEventListener("keyup",validate);
input_pw.addEventListener("keyup",validate);
input_pwconfirm.addEventListener("keyup",validate);

submit_button.onclick = ()=>{
  modal.style.display = "flex";
}

// form submit 버튼 클릭시 자동 새로고침+input 초기화 방지함으로써 모달창 자동닫힘현상 해결결
submit_button.addEventListener ("click",(event)=>{event.preventDefault();},false);

close_button.onclick = ()=>{
  modal.style.display = "none";
}

