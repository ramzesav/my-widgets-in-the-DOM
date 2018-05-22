'use strict';

const btn = document.getElementsByClassName('wrapper-dropdown')[0];

btn.onclick = () => {
	(btn.classList.contains('active')) ? btn.classList.remove('active') : btn.classList.add('active')
};

