'use strict';

const picView = document.getElementsByClassName('gallery-view')[0];

const links = document.getElementById('nav').getElementsByTagName('a');

const picGallery = [
	'https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/01.jpg',
	'https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/02.jpg',
	'https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/03.jpg',
	'https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/04.jpg',
	'https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/05.jpg',
	'https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/06.jpg',
	'https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/07.jpg'
];

function galleryСhoice(event) {
		for(let linkItem of links) {
			linkItem.classList.remove('gallery-current');
		}
}

for(let linkItem of links) {
	linkItem.addEventListener('click', galleryСhoice);
	linkItem.addEventListener('click', (event) => {event.preventDefault();});
};

links[0].addEventListener('click', () => {
	if(links[0].href === 'https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/01.jpg') {
		links[0].classList.add('gallery-current');
		picView .src = picGallery[0];
	}
});

links[1].addEventListener('click', () => {
	if(links[1].href === 'https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/02.jpg') {
		links[1].classList.add('gallery-current');
		picView .src = picGallery[1];
	}
});

links[2].addEventListener('click', () => {
	if(links[2].href === 'https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/03.jpg') {
		links[2].classList.add('gallery-current');
		picView .src = picGallery[2];
	}
});

links[3].addEventListener('click', () => {
	if(links[3].href === 'https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/04.jpg') {
		links[3].classList.add('gallery-current');
		picView .src = picGallery[3];
	}
});

links[4].addEventListener('click', () => {
	if(links[4].href === 'https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/05.jpg') {
		links[4].classList.add('gallery-current');
		picView .src = picGallery[4];
	}
});

links[5].addEventListener('click', () => {
	if(links[5].href === 'https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/06.jpg') {
		links[5].classList.add('gallery-current');
		picView .src = picGallery[5];
	}
});

links[6].addEventListener('click', () => {
	if(links[6].href === 'https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/07.jpg') {
		links[6].classList.add('gallery-current');
		picView .src = picGallery[6];
	}
});