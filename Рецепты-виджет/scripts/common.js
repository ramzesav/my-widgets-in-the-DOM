'use strict';

function random(){
	return 'func' + Math.floor(Math.random() * 1000);
}

function loadData(url) {
	const functionName = random();
	return new Promise((done, fail) => {
		window[functionName] = done;

   const elem = document.createElement("script");
   elem.src = `${url}?jsonp=${functionName}`;
   document.body.appendChild(elem);
	});
};

const mainTitle = document.getElementsByClassName('content')[0].querySelector('h1');

function dataRecept(data) {
	document.getElementsByClassName('cover')[0].style.background = `url(${data.pic})`;
	document.getElementsByClassName('cover')[0].querySelector('font').textContent = data.title;

	for(let i = 0; i < data.ingredients.length; i++) {
		if(i < 4) {
			document.getElementsByClassName('content')[0].querySelectorAll('td')[1].textContent += `${data.ingredients[i]},`;
		}else {
			document.getElementsByClassName('content')[0].querySelectorAll('td')[1].textContent += `${data.ingredients[i]}.`;
		}
	}
} 


function recipeRatingData(data) {
	if(data.rating <= 10) {
		mainTitle.textContent = data.rating.toFixed(2);
	}
	document.getElementsByClassName('content')[0].querySelector('small').textContent = `${data.votes} оценок`;
};

const consumers = document.getElementsByClassName("consumers")[0];

function recipeUser(data) {
	for(let i = 0; i< data.consumers.length; i++) {
		console.log(data.consumers[i]);
		consumers.innerHTML += `<img src="${data.consumers[i].pic}" title="${data.consumers[i].name}">`
	}
	consumers.innerHTML += `<span>(+${data.total})</span>`

}

loadData('https://neto-api.herokuapp.com/food/42')
	.then(dataRecept)
	.catch(er => console.log(er));

loadData('https://neto-api.herokuapp.com/food/42/rating')
	.then(recipeRatingData)
	.catch(er => console.log(er));

loadData('https://neto-api.herokuapp.com/food/42/consumers')
	.then(recipeUser)
	.catch(er => console.log(er));
