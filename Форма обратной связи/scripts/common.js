'use strict';

const main = document.getElementById('output');
const inputField  = document.querySelectorAll('input, textarea');

function checkingFields() {
	if(inputField[0].value != "" && inputField[1].value != "" && inputField[2].value != "" && inputField[3].value != "" && inputField[4].value != "" && inputField[5].value != "" && inputField[6].value != ""&& inputField[7].value != ""&& inputField[8].value != ""&& inputField[9].value != "" && inputField[10].value != "") {
		document.getElementsByClassName('contentform')[0].getElementsByClassName('button-contact')[0].removeAttribute('disabled');
	}else {
		document.getElementsByClassName('contentform')[0].getElementsByClassName('button-contact')[0].setAttribute('disabled', "");
	}
}

for(let input of inputField) {
	input.addEventListener('input', checkingFields)
}

inputField[5].onkeypress =  function(event) {
	if(!(event.which >= 48 && event.which <= 57) && !(event.keyCode === 46) && !(event.keyCode === 8) && !(event.keyCode === 13) && !(event.keyCode >= 37 && event.keyCode <= 40)) {
		return false;
	}
}

function getMessage(event) {
	event.preventDefault();

	inputField.forEach(input => {
		const text = main.querySelector(`output#${input['name']}`);
		if(text) {
			text.value = input.value;
		}
	});	

	if(!this.getAttribute('disabled')) {
		document.getElementsByTagName('h1')[0].innerHTML = 'Ваше сообщение';
		document.getElementsByClassName('contentform')[0].classList.add('hidden');
		main.classList.remove('hidden');
	}
}

document.getElementsByClassName('contentform')[0].getElementsByClassName('button-contact')[0].addEventListener('click', getMessage)

function changeMessage() {
	document.getElementsByTagName('h1')[0].innerHTML = 'Форма обратной связи';
	document.getElementsByClassName('contentform')[0].classList.remove('hidden');
	main.classList.add('hidden');
}

main.getElementsByClassName('button-contact')[0].addEventListener('click', changeMessage);