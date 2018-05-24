'use strict';

const forms = document.getElementById('AddToCartForm');

const xhrColor = new XMLHttpRequest();
xhrColor.open('GET', 'https://neto-api.herokuapp.com/cart/colors', false);
xhrColor.send();
let listColors = JSON.parse(xhrColor.responseText);

const colorSwatch = document.getElementById('colorSwatch');
colorSwatch.innerHTML += '<div data-value="red" class="swatch-element color red available"><div class="tooltip">Красный</div><input quickbeam="color" id="swatch-1-red" type="radio" name="color" value="red" checked><label for="swatch-1-red" style="border-color: red;"><span style="background-color: red;"></span><img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886"></label></div>' + '<div data-value="red" class="swatch-element color red available"><div class="tooltip">Красный</div><input quickbeam="color" id="swatch-1-red" type="radio" name="color" value="red" checked><label for="swatch-1-red" style="border-color: red;"><span style="background-color: red;"></span><img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886"></label></div>' + '<div data-value="red" class="swatch-element color red available"><div class="tooltip">Красный</div><input quickbeam="color" id="swatch-1-red" type="radio" name="color" value="red" checked><label for="swatch-1-red" style="border-color: red;"><span style="background-color: red;"></span><img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886"></label></div>' + ' <div data-value="red" class="swatch-element color red available"><div class="tooltip">Красный</div><input quickbeam="color" id="swatch-1-red" type="radio" name="color" value="red" checked><label for="swatch-1-red" style="border-color: red;"><span style="background-color: red;"></span><img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886"></label></div>';

for(let i = 0; i < colorSwatch.getElementsByClassName('swatch-element').length; i++) {
	colorSwatch.getElementsByClassName('swatch-element')[i].dataset.value = listColors[i].type;
	colorSwatch.getElementsByClassName('swatch-element')[i].classList.remove('red');
	colorSwatch.getElementsByClassName('swatch-element')[i].classList.add(`${listColors[i].type}`);
	colorSwatch.getElementsByClassName('swatch-element')[i].children[1].id = `swatch-${i+1}-${listColors[i].type}`;
	colorSwatch.getElementsByClassName('swatch-element')[i].children[1].value = listColors[i].type;
	colorSwatch.getElementsByClassName('swatch-element')[i].children[2].removeAttribute('for');
	colorSwatch.getElementsByClassName('swatch-element')[i].children[2].setAttribute('for', `swatch-${i+1}-${listColors[i].type}`);

	if(!(listColors[i].isAvailable)) {
		colorSwatch.getElementsByClassName('swatch-element')[i].classList.remove('available');
		colorSwatch.getElementsByClassName('swatch-element')[i].classList.add('soldout');
		colorSwatch.getElementsByClassName('swatch-element')[i].children[1].setAttribute('disabled', '');
	}

	colorSwatch.getElementsByClassName('swatch-element')[i].children[0].textContent = listColors[i].title;
	colorSwatch.getElementsByClassName('swatch-element')[i].children[2].firstElementChild.style.backgroundColor = listColors[i].code;
	colorSwatch.getElementsByClassName('swatch-element')[i].children[1].removeAttribute('checked');

	if(colorSwatch.getElementsByClassName('swatch-element')[i].dataset.value === "red") {
		colorSwatch.getElementsByClassName('swatch-element')[i].children[1].setAttribute('checked', "")
	}
}

const xhrSize = new XMLHttpRequest();
xhrSize.open('GET', 'https://neto-api.herokuapp.com/cart/sizes', false);
xhrSize.send();
let listSize= JSON.parse(xhrSize.responseText);


const sizeSwatch = document.getElementById('sizeSwatch');
sizeSwatch.innerHTML += '<div data-value="s" class="swatch-element plain s soldout"><input id="swatch-0-s" type="radio" name="size" value="s" disabled><label for="swatch-0-s">S<img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886"></label></div>' + 
'<div data-value="s" class="swatch-element plain s soldout"><input id="swatch-0-s" type="radio" name="size" value="s" disabled><label for="swatch-0-s">S<img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886"></label></div>' + 
'<div data-value="s" class="swatch-element plain s soldout"><input id="swatch-0-s" type="radio" name="size" value="s" disabled><label for="swatch-0-s">S<img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886"></label></div>' + 
'<div data-value="s" class="swatch-element plain s soldout"><input id="swatch-0-s" type="radio" name="size" value="s" disabled><label for="swatch-0-s">S<img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886"></label></div>' + 
'<div data-value="s" class="swatch-element plain s soldout"><input id="swatch-0-s" type="radio" name="size" value="s" disabled><label for="swatch-0-s">S<img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886"></label></div>';

for(let i = 0; i < sizeSwatch.getElementsByClassName('swatch-element').length; i++) {
	sizeSwatch.getElementsByClassName('swatch-element')[i].dataset.value = listSize[i].type;
	sizeSwatch.getElementsByClassName('swatch-element')[i].classList.remove('s');
	sizeSwatch.getElementsByClassName('swatch-element')[i].classList.add(`${listSize[i].type}`);
	sizeSwatch.getElementsByClassName('swatch-element')[i].children[0].id = `swatch-${i}-${listSize[i].type}`;
	sizeSwatch.getElementsByClassName('swatch-element')[i].children[0].value = listSize[i].type;
	sizeSwatch.getElementsByClassName('swatch-element')[i].children[1].removeAttribute('for');
	sizeSwatch.getElementsByClassName('swatch-element')[i].children[1].setAttribute('for', `swatch-${i}-${listSize[i].type}`);

	if(listSize[i].isAvailable) {
		sizeSwatch.getElementsByClassName('swatch-element')[i].classList.remove('soldout');
		sizeSwatch.getElementsByClassName('swatch-element')[i].classList.add('available');
		sizeSwatch.getElementsByClassName('swatch-element')[i].children[0].removeAttribute('disabled');
	}

	let cloneImg = sizeSwatch.getElementsByClassName('swatch-element')[i].children[1].firstElementChild.cloneNode(true);
	sizeSwatch.getElementsByClassName('swatch-element')[i].children[1].innerHTML = listSize[i].title;
	sizeSwatch.getElementsByClassName('swatch-element')[i].children[1].appendChild(cloneImg);
	
	
	if(sizeSwatch.getElementsByClassName('swatch-element')[i].dataset.value === 'xl') {
		sizeSwatch.getElementsByClassName('swatch-element')[i].children[0].setAttribute('checked', "")
	}
}



const addCartForm = document.getElementById('AddToCartForm');

function addCart(event) {
	event.preventDefault();


	const xhr = new XMLHttpRequest();
	const formData = new FormData(addCartForm);
	formData.append('productId', `${addCartForm.getAttribute('data-product-id')}`);
	xhr.open('POST', 'https://neto-api.herokuapp.com/cart', true);
	xhr.send(formData);

	xhr.addEventListener('load', () => {
		if(xhr.status !== 200) {
			console.error(`Ответ ${xhr.status}: ${xhr.statusText}`);
		}else {

			let itemCart = JSON.parse(xhr.responseText);
			const cart = document.getElementById('quick-cart');

			cart.innerHTML = '<div class="quick-cart-product quick-cart-product-static" id="quick-cart-product-2721888517" style="opacity: 1;"><div class="quick-cart-product-wrap"><img src="https://neto-api.herokuapp.com/hj/3.3/cart/product_1024x1024.png" title="Tony Hunfinger T-Shirt New York"><span class="s1" style="background-color: #000; opacity: .5">$800.00</span><span class="s2"></span></div><span class="count hide fadeUp" id="quick-cart-product-count-2721888517">1</span><span class="quick-cart-product-remove remove" data-id="2721888517"></span></div>' + 
'<a id="quick-cart-pay" quickbeam="cart-pay" class="cart-ico open"><span><strong class="quick-cart-text">Оформить заказ<br></strong> <span id="quick-cart-price">$800.00</span></span></a>';

			cart.firstElementChild.id = `quick-cart-product-${itemCart[0].id}`;
			cart.children[0].children[1].id = `quick-cart-product-count-${itemCart[0].id}`;
			cart.children[0].children[2].dataset.id = itemCart[0].id;
			cart.children[0].children[0].firstElementChild.title = itemCart[0].title;
			cart.children[0].children[0].firstElementChild.src = itemCart[0].pic;
			cart.getElementsByClassName('count')[0].textContent = itemCart[0].quantity;

			let finalPurchaseAmount  = itemCart[0].quantity * itemCart[0].price;
			cart.children[1].firstElementChild.children[1].textContent  = `$${finalPurchaseAmount}`;
		}
	});

	if(event.currentTarget) {
		setTimeout(() => {
			const remove = document.getElementById('quick-cart').getElementsByClassName('remove')[0];
			console.log(remove)
			remove.addEventListener('click', (event) => {

				const xhr = new XMLHttpRequest();
				const formData = new FormData();
				formData.append('productId', `${remove.dataset.id}`);
				xhr.open('POST', 'https://neto-api.herokuapp.com/cart/remove',true);
				xhr.send(formData);

				xhr.addEventListener('load', () => {
					if(xhr.status === 200) {

						let newItemCart = JSON.parse(xhr.responseText);
						document.getElementById('quick-cart').getElementsByClassName('count')[0].textContent = newItemCart [0].quantity;

						let finalPurchaseAmount  = newItemCart[0].quantity * newItemCart[0].price;
						document.getElementById('quick-cart').children[1].firstElementChild.children[1].textContent = finalPurchaseAmount;
					}else {
						console.error(`Ответ ${xhr.status}: ${xhr.statusText}`);
					}
				})
			})
		},500)

	}
}


document.getElementById('AddToCart').addEventListener('click', addCart);