'use strict';


const content = document.getElementById('content');


var xhr = new XMLHttpRequest();
xhr.addEventListener('load', onLoad)
xhr.open(
	"GET",
	"https://neto-api.herokuapp.com/book/",
	true
)

xhr.send();

function onLoad() {
	var books = JSON.parse(xhr.responseText);

	for(let i =0; i< books.length - 1; i++) {
		content.innerHTML += '<li><img></img></li>'
	}

	const itemBooks = content.getElementsByTagName('li');

	for(let i = 0; i < itemBooks.length; i++) {
		itemBooks[i].dataset.title = books[i].title;
		itemBooks[i].dataset.author = books[i].author.name;
		itemBooks[i].dataset.info = books[i].info;
		itemBooks[i].dataset.price = books[i].price;
		itemBooks[i].getElementsByTagName('img')[0].src = books[i].cover.small;
	}
}
