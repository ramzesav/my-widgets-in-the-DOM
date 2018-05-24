'use strict';


const link = document.getElementsByTagName('nav')[0].querySelectorAll('a');
const content = document.getElementById('content');
const preloader = document.getElementById('preloader');

function getPage(tab) {

	const subscription = new XMLHttpRequest();
	subscription.addEventListener('loadstart', () => preloader.classList.remove('hidden'));
	subscription.addEventListener('loadend', () => preloader.classList.add('hidden'));
	subscription.open(
		'GET',
		`${tab.href}`,
		false
	);

	subscription.send();
	content.innerHTML += subscription.responseText;
}

for(let tabs of link) {	
	if(tabs.classList.contains('active')) {
		getPage(tabs);
	}

	tabs.addEventListener('click', (event) => {
		event.preventDefault();

		if(!tabs.classList.contains('active')) {
			for(let i = 0; i< link.length; i++) {
				if(link[i].classList.contains('active')) {
					link[i].classList.remove('active');
					content.innerHTML = "";
				}
			}
			tabs.classList.add('active');
			getPage(tabs);
		}
	})
}

