'use strict';

const websocket = document.getElementsByClassName('websocket')[0];
const websocketNumbers = websocket.getElementsByTagName('div');

const socket = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');

socket.addEventListener('open', () =>{
	console.log("Соединение установлено");

	socket.addEventListener('message', (event) => {
		for(let number of websocketNumbers) {
			if(number.classList.contains('flip-it')) {
				number.classList.remove('flip-it')
			}
		}
		websocketNumbers[event.data - 1].classList.add('flip-it');
	});

	socket.addEventListener('close', event => {
		if(!event.wasClean) {
			console.log(`Произошла ошибка, код ошибки: ${event.code}`)
		}	
	});
});

