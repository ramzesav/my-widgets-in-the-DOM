'use strict';


const addCart = document.getElementsByClassName('add-to-cart');
const listItem = document.getElementsByClassName('items-list')[0];

function addItem(event) {
	if(event.target.classList.contains('add-to-cart')) {
		event.preventDefault();
		addToCart({title: event.target.dataset.title, price: event.target.dataset.price});
	}
}

listItem.addEventListener('click', addItem);



