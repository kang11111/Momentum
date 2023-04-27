import { getClock } from './clock.js';

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/**userName을 작성하면 localStorage에 userName 저장하고 인사 */
function onLoginSubmit(event) {
  //form의 submit event 기본 동작 막기(자동 새로고침 방지)
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY,userName);
  paintGreetings(userName);
}

/**시간에 따라 인사말 다르게 */
function checkHours(){
  let greeting = '';
  if(getClock() >= 0 && getClock() <= 11){
    greeting = 'Good morning';
  }else if(getClock() >= 12 && getClock() <= 18){
    greeting = 'Good afternoon';
  }else if(getClock() >= 19 && getClock() <=23){
    greeting = 'Good night';
  }
  return greeting;
}

/**화면 가로 넓이와 userName 길이에 따라 띄어쓰기 다르게 */
function checkText(userName){
  if(window.innerWidth <= 650 && userName.length >= 10){
    greeting.innerHTML = `${checkHours()}! <br>${userName}`;
  }else{
    greeting.innerText = `${checkHours()}! ${userName}`;
  }
}

/**userName 인사말을 h1에 그리기 */
function paintGreetings(userName){
  checkText(userName);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

/**localStorage의 username 유무에 따른 동작 */
if(savedUserName === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
}else{
  paintGreetings(savedUserName);
}