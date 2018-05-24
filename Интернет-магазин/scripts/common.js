'use strict';


function getPriceFormatted(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

const productItem = document.getElementById('container');
let amountProduct = document.getElementById('cart-count');
let finalCost = document.getElementById('cart-total-price');

let count = 0;
let totalCost = [];

function addCart(event) {

	if(event.target.classList.contains('add')) {
		amountProduct.innerHTML = ++count;
		totalCost.push(Number(event.target.dataset.price));

		var sum = totalCost.reduce((summ, el) => {
			return summ + el;
		},0)

		finalCost.innerHTML = sum;
		return getPriceFormatted(finalCost.innerHTML);
	}
}	

productItem.addEventListener('click', addCart)

