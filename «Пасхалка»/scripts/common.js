'use strict';

const menu = document.getElementsByTagName('nav')[0];
const secret = document.getElementsByClassName('secret')[0];

function hiddenMenu(event) {
	if(!event.ctrlKey ) {
		return;
	}

	if(!event.altKey) {
		return;
	}

	switch(event.code) {
		case 'KeyT':
			menu.classList.toggle('visible');
			break;
		default:
			return;	
	}
} 

document.addEventListener('keydown', hiddenMenu);

Array.prototype.equals = function (array) {
    if (!array)
        return false;

    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            return false;   
        }           
    }       
    return true;
}

Object.defineProperty(Array.prototype, "equals", {enumerable: false});

let letters = [];
let secretWord = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];

function secretCode(event) {
	letters.push(event.code);

	if(event.code !== "KeyY" && event.code !== "KeyT" && event.code !== "KeyN" && event.code !== "KeyJ" && event.code !== "KeyK" && event.code !== "KeyU" && event.code !== "KeyB" && event.code !== "KeyZ") {
		letters = letters.splice();
	}

	if(letters.equals(secretWord)) {
		secret.classList.add('visible')
	}
}


document.addEventListener('keydown', secretCode);

