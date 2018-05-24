'use strict';



const socket = new WebSocket('wss://neto-api.herokuapp.com/chat');

const chatStatus = document.getElementsByClassName('chat-status')[0];
const sumbitSms = document.getElementsByClassName('message-submit')[0];
const messageStatus = document.getElementsByClassName('message-status')[0];
const messagesContent = document.getElementsByClassName('messages-content')[0];
const message = document.getElementsByClassName('messages')[0];
const form = document.getElementsByClassName("message-box")[0];
const formInput = document.getElementsByClassName('message-input')[0];

socket.addEventListener('open', (event) => {
	if(event.type) {
		chatStatus.textContent = chatStatus.dataset.online;
	}else {
		chatStatus.textContent = chatStatus.dataset.offline;
	}

	if(chatStatus.textContent === 'в сети') {
		sumbitSms.removeAttribute('disabled');
		messageStatus.getElementsByClassName('message-text')[0].textContent = 'Пользователь появился в сети';
	}
});

let typeSMS  = message.cloneNode(true);
let messageTemplate = typeSMS.children[0].children[2].cloneNode(true);
let loading =  typeSMS.children[0].children[0];
let interlocutorSMS = typeSMS.children[0].children[1];

socket.addEventListener('message', (event) => {
	const now  = new Date();
	let newTime;

	if(now.getHours() >= 0 && now.getHours() < 10) {
		 newTime = ` ${"0" + now.getHours()}:${now.getMinutes()}`;
	}else {
		newTime = ` ${now.getHours()}:${now.getMinutes()}`;
	}
	
	console.log(event.data);

	if(event.data == '...' ) {
		messagesContent.appendChild(loading);
	}else {
		for(let i = 0; i < messagesContent.children.length; i++) {
			if(messagesContent.children[i].classList.contains('loading')) {
			messagesContent.removeChild(messagesContent.children[i]);
			}
		}
		interlocutorSMS.children[1].textContent = event.data;
		interlocutorSMS.children[2].textContent = newTime;
		let interlocutor = interlocutorSMS.cloneNode(true);
		messagesContent.appendChild(interlocutor);
	}
});

document.addEventListener('keydown', (event) => {
	const now  = new Date();
	let newTime;
	
	if(now.getHours() >= 0 && now.getHours() < 10) {
		 newTime = ` ${"0" + now.getHours()}:${now.getMinutes()}`;
	}else {
		newTime = ` ${now.getHours()}:${now.getMinutes()}`;
	}

	let userMessage =  form.getElementsByClassName('message-input')[0].value;

	if(event.code == 'Enter' && userMessage !== '') {
		messageTemplate.children[0].textContent = userMessage;
		messageTemplate.children[1].textContent = newTime;
		let user = messageTemplate.cloneNode(true);
		messagesContent.appendChild(user);
		socket.send(userMessage);

		for(let i = 0; i < messagesContent.children.length; i++) {
			if(messagesContent.children[i].classList.contains('message-personal')) {
				form.getElementsByClassName('message-input')[0].value = '';
			}
		};
	}
});

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const now  = new Date();
	let newTime;
	
	if(now.getHours() >= 0 && now.getHours() < 10) {
		 newTime = ` ${"0" + now.getHours()}:${now.getMinutes()}`;
	}else {
		newTime = ` ${now.getHours()}:${now.getMinutes()}`;
	}

	let userMessage =  form.getElementsByClassName('message-input')[0].value;

	if(userMessage !== '') {
		messageTemplate.children[0].textContent = userMessage;
		messageTemplate.children[1].textContent = newTime;
		let user = messageTemplate.cloneNode(true);
		messagesContent.appendChild(user);
		socket.send(userMessage);
	}

	for(let i = 0; i < messagesContent.children.length; i++) {
		if(messagesContent.children[i].classList.contains('message-personal')) {
			form.getElementsByClassName('message-input')[0].value = '';
		}
	};

});


socket.addEventListener('close', (event) => {
	if(!event.wasClean) {
		chatStatus.textContent = chatStatus.dataset.offline;
		sumbitSms.setAttribute('disabled', "");
		messageStatus.getElementsByClassName('message-text')[0].textContent = 'Пользователь не в сети';
	}
});