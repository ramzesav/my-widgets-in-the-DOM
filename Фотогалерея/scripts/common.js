'use strict';

const slider = document.getElementById('currentPhoto');
const buttons = [document.getElementById('prevPhoto'), document.getElementById('nextPhoto')];
const pictures = ['https://netology-code.github.io/hj-homeworks/browser/gallery/i/breuer-building.jpg', 'https://netology-code.github.io/hj-homeworks/browser/gallery/i/guggenheim-museum.jpg', 'https://netology-code.github.io/hj-homeworks/browser/gallery/i/headquarters.jpg', 'https://netology-code.github.io/hj-homeworks/browser/gallery/i/IAC.jpg', 'https://netology-code.github.io/hj-homeworks/browser/gallery/i/new-museum.jpg'];

slider.src = pictures[0];
var current = 0;

buttons[0].onclick = function() {
	current--;
	slider.src = pictures[current];

	if(current < 0) {
		current = pictures.length-1;
		slider.src = pictures[current];
	}
}

buttons[1].onclick = function() {
	current++;
	slider.src  = pictures[current];

	if(current >= pictures.length) {
		current = 0;
		slider.src = pictures[current];
	}
}


