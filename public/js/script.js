//hbs파일에 있는 <script>안에서 가져오는 라이브러리를 할당.
const socket = io('/chattings');

const getElementById = (id) => document.getElementById(id);

//* get DOM elemnt
const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_box');
const formElemnt = getElementById('chat_form');

function helloUser() {
  const username = prompt('What is your name?');
  //emit('이벤트 이름', 보내는 데이터 값)
  socket.emit('new_user', username);
  console.log(username);
  socket.on('hello_user', (data) => {
    console.log(data);
  });
}

function init() {
  helloUser();
}

init();
