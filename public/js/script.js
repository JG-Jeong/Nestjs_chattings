//hbs파일에 있는 <script>안에서 가져오는 라이브러리를 할당.
const socket = io('/');

const getElementById = () => document.getElementById(id);

//* get DOM elemnt
const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_box');
const formElemnt = getElementById('chat_form');

function helloUser() {
  const username = prompt('What is your name?');
}

function init() {
  console.log('1');
  helloUser();
}

init();
