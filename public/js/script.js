//hbs파일에 있는 <script>안에서 가져오는 라이브러리를 할당.
const socket = io('/chattings');

const getElementById = (id) => document.getElementById(id);

//* get DOM elemnt
const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_box');
const formElemnt = getElementById('chat_form');

//* global socket handler
socket.on('user_connected', (username) => {
  console.log(`${username} connected`);
});

//* event callback functions
const handleSubmit = (event) => {
  //이벤트 버블링때문에 새로고침이 되는걸 막아줌-> 이거 이해 안됨
  event.preventDefault();
  console.log('제출');
};

//* draw function
const drawHelloStranger = (username) =>
  (helloStrangerElement.innerText = `Hello ${username} Stranger :)`);

function helloUser() {
  //   const username = prompt('What is your name?');
  //   //emit('이벤트 이름', 보내는 데이터 값)
  //   socket.emit('new_user', username, (data) => {
  //     drawHelloStranger(data);
  //   });
}

function init() {
  helloUser();
  formElemnt.addEventListener('submit', handleSubmit);
}

init();
