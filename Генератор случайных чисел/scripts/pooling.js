'use strict';

const pooling = document.getElementsByClassName('pooling')[0];
const poolingNumbers = pooling.getElementsByTagName('div');


function initPoling() {

	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://neto-api.herokuapp.com/comet/pooling');
	xhr.send();
	
	xhr.addEventListener('load', () => {
		if(xhr.status === 200) {
	
				for(let number of poolingNumbers) {
					if(number.classList.contains('flip-it')) {
						number.classList.remove('flip-it')
					}
				}

				poolingNumbers[xhr.responseText - 1].classList.add('flip-it');
		}else {
			console.log(`Ответ ${xhr.status}: ${xhr.statusText}`);
		}
	})

	xhr.addEventListener('error', () => {
		console.log(`Ошибка: ${xhr.statusText}`)
	})
}


setInterval(initPoling, 5000);



