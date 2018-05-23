'use strict';

const set = document.getElementsByClassName('set middle')[0];
const audioMiddls = [
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/first.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/second.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/third.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fourth.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fifth.mp3'
]; 

const audioLowers = [
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/first.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/second.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/third.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fourth.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fifth.mp3'
];

const audioHigher = [
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/first.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/second.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/third.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fourth.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fifth.mp3'
];

const keysPlay = document.getElementsByTagName('li');
const audioPlay = document.getElementsByTagName('audio');


function setLower(event) {
  if(!event.shiftKey) {
    return;
  }
  set.classList.remove('middle');
  set.classList.add('lower');
};

document.addEventListener('keydown', setLower);

function setHigler(event) {
  if(!event.altKey) {
    return;
  }
  set.classList.remove('middle');
  set.classList.add('higher');
};

document.addEventListener('keydown', setHigler);

function setMiddle(event) {
  if(set.classList.contains('lower') || set.classList.contains('higher')) {
    set.classList.remove('lower') || set.classList.remove('higher')
    set.classList.add('middle');
  }
};

document.addEventListener('keyup', setMiddle);

function audioLower() {
  if(set.classList.contains('lower')) {
    for(let i = 0; i < audioLowers.length; i++) {
      audioPlay[i].src = audioLowers[i];
    }
  }else if(set.classList.contains('middle')) {
    for(let i = 0; i < audioMiddls.length; i++) {
      audioPlay[i].src = audioMiddls[i];
    }
  }else if(set.classList.contains('higher')) {
    for(let i = 0; i < audioHigher.length; i++) {
      audioPlay[i].src = audioHigher[i];
    }
  }else {
    return;
  }
}

for(let i = 0; i < audioLowers.length; i++) {
  keysPlay[i].addEventListener('click', audioLower);
  keysPlay[i].addEventListener('click', () => {(set.classList.contains('lower')) ? audioPlay[i].play() : ''});
  keysPlay[i].addEventListener('click', () => {(set.classList.contains('middle')) ? audioPlay[i].play() : ''});
  keysPlay[i].addEventListener('click', () => {(set.classList.contains('higher')) ? audioPlay[i].play() : ''});
}