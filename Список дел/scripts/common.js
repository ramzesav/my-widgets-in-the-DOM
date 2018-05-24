'use strict';


const listCases  = document.getElementsByClassName('list-block')[0].getElementsByTagName('li');
const checkBox = document.getElementsByClassName('list-block')[0].getElementsByTagName('input');

var completeTask = document.getElementsByTagName('output')[0];



function counter() {
	let result = Array.from(checkBox).filter(check => {
		return check.checked;
	})
	
	return result.length;
}


let count = counter();
completeTask.value = `${count} из ${listCases.length}`;
function supervisionCase() {
	if(this.checked === true) {
		completeTask.value = `${++count} из ${listCases.length}`;
	}else {
		(count === 0) ? count = 0 : completeTask.value = `${--count} из ${listCases.length}`;	
	}

	(count === 4) ? document.getElementsByClassName('list-block')[0].classList.add('complete') : document.getElementsByClassName('list-block')[0].classList.remove('complete');
}

for(let check  of checkBox) {
	check.addEventListener('click', supervisionCase);
}

