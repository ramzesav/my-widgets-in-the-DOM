'use strict';


function loadData(url) {
	return new Promise((done, fail) => {
		window.parseTwitt = done;

   const elem = document.createElement("script");
   elem.src = url;
   document.body.appendChild(elem);
	});
};

const biography = document.getElementsByClassName('bio')[0];
const dataTwitt = document.querySelectorAll('output');

function showTwitter(twitter) {
	document.getElementsByClassName('bg')[0].setAttribute('src', `${twitter.wallpaper}`);
	biography.children[1].firstElementChild.textContent = twitter.username;
	biography.children[1].children[1].textContent = twitter.description;
	document.getElementsByClassName('avatar')[0].setAttribute('src', `${twitter.pic}`);
	dataTwitt[0].value = twitter.tweets;
	dataTwitt[1].value = twitter.followers;
	dataTwitt[2].value = twitter.following;
};

loadData('https://neto-api.herokuapp.com/twitter/jsonp?jsonp=parseTwitt')
	.then(showTwitter)
	.catch(er => console.log(er));


