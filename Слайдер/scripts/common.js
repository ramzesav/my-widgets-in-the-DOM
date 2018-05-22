'use strict';

const slider = document.getElementById('slider');
const picture  = ['https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-jump.png', 'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-on-foot.png', 'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-playground.png', 'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-top-view.png', 'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax.png'];

let i = 0;
const slide = () => {
	slider.src = picture[i];
	i++;
	if(i === picture.length) {
	  i = 0;
  }
};

setInterval(slide, 5000);
