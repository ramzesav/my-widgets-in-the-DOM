'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/draw');

connection.addEventListener('open', () => {
	window.editor.addEventListener('update', (event) => {

		event.canvas.toBlob(blob => {
			connection.send(blob);
		})
	});
});


connection.addEventListener('message', (event) => {
	console.log(event.data);
})