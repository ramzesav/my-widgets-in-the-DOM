'use strict';

const loader = document.getElementById('loader');
const content = document.getElementById('content');
const froms =  document.getElementById('from');
const to = document.getElementById('to');
const inputField = document.getElementById('source');
const result = document.getElementById('result');


var xhr = new XMLHttpRequest();
xhr.addEventListener('load', onLoad);
xhr.addEventListener('loadstart', onLoadStart);
xhr.addEventListener('loadend', onLoadEnd);

xhr.open(
	'GET',
	'https://neto-api.herokuapp.com/currency',
	true
);

xhr.send();

function onLoad() {
	let currencyRate = JSON.parse(xhr.responseText)
	console.log(currencyRate)
	currencyRate.forEach((el) => {
		froms.innerHTML += `<option value = "${el.value}">${el.code}</option>`
		to.innerHTML += `<option value = "${el.value}">${el.code}</option>`
	})
}


function onLoadStart() {
	loader.classList.remove('hidden');
}

function onLoadEnd() {
	loader.classList.add('hidden');
	content.classList.remove('hidden');
}

function conversion() {
	let convert = ((inputField.value * froms.value) / to.value);
	let resultFinals = convert.toFixed(2);

	result.value = resultFinals;
}

froms.addEventListener('change', conversion)
to.addEventListener('change', conversion);
inputField.addEventListener('input', conversion);