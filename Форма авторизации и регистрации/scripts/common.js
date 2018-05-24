'use strict';


const logon = document.getElementsByClassName('sign-in-htm')[0];
const registration = document.getElementsByClassName('sign-up-htm')[0];

function submitRegistrationForm(event) {
	event.preventDefault();

	let dataForm = {};
	for(let inputs of registration.getElementsByClassName('input')) {
		dataForm[inputs.name] =  `${inputs.value}`
	}

	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://neto-api.herokuapp.com/signup', false);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(dataForm));


	var registerRequest = JSON.parse(xhr.responseText);

	if(registerRequest.error) {
		registration.getElementsByClassName('error-message')[0].textContent = registerRequest.message
	}else{
		registration.getElementsByClassName('error-message')[0].textContent = `Пользователь ${registerRequest.name} успешно зарегистрирован`;
	}

	if(event.target.classList.contains('sign-up-htm')) {
		for(let inputs of registration.getElementsByClassName('input')) {
			inputs.value = "";
		}
	}

}

registration.addEventListener('submit', submitRegistrationForm) 


function submitLoginForm(event) {

	event.preventDefault();

	let dataForm = {};
	for(let inputs of logon.getElementsByClassName('input')) {
		dataForm[inputs.name] = `${inputs.value}`
	}

	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://neto-api.herokuapp.com/signin', false);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(dataForm));

	var loginRequest = JSON.parse(xhr.responseText);


	if(loginRequest.error) {
		logon.getElementsByClassName('error-message')[0].textContent = loginRequest.message
	}else{
		logon.getElementsByClassName('error-message')[0].textContent = `Пользователь ${loginRequest.name} успешно авторизован`;
	}


	if(event.target.classList.contains('sign-in-htm')) {
		for(let inputs of logon.getElementsByClassName('input')) {
			inputs.value = "";
		}
	}
}

logon.addEventListener('submit', submitLoginForm) 

setTimeout(function(){logon.getElementsByClassName('error-message')[0].textContent= ""; }, 10000);
setTimeout(function(){registration.getElementsByClassName('error-message')[0].textContent= ""; }, 10000);