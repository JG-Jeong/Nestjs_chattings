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
