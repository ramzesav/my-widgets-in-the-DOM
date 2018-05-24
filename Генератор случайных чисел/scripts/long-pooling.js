'use strict';

'use strict';

const longPooling = document.getElementsByClassName('long-pooling')[0];
const longPoolingNumbers = longPooling.getElementsByTagName('div');


function initLongPoling() {

	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://neto-api.herokuapp.com/comet/pooling');
	xhr.send();
	
	xhr.addEventListener('load', () => {
		if(xhr.status === 200) {
	
				for(let number of longPoolingNumbers) {
					if(number.classList.contains('flip-it')) {
						number.classList.remove('flip-it')
					}
				}

				longPoolingNumbers[xhr.responseText.trim() - 1].classList.add('flip-it');
		}else {
			console.log(`Ответ ${xhr.status}: ${xhr.statusText}`);
		}
    initLongPoling();
	})

	xhr.addEventListener('error', () => {
		console.log(`Ошибка: ${xhr.statusText}`)
	})
}

initLongPoling();


let counter = 5;
 function tick() {
   console.log(counter);
   counter--;
   if (counter !== 0) {
     return true;
   }
}
requestAnimationFrame(tick);


