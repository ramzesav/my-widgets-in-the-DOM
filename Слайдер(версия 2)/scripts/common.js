'use strict';

let nextSlide = document.querySelectorAll('nav a');
let slider = document.getElementsByClassName('slides');


for(let i = 0; i < nextSlide.length; i++) {
  if(nextSlide[i].dataset.action === "prev"){
   var prev = nextSlide[i];
  }else if(nextSlide[i].dataset.action === "next") {
    var next = nextSlide[i];
  }else if(nextSlide[i].dataset.action === "first") {
    var first = nextSlide[i];
  }else {
    var last = nextSlide[i];
  }
}


slider[0].children[0].classList.add('slide-current');

if(slider[0].children[0].classList.contains('slide-current')) {
  prev.classList.add('disabled');
  first.classList.add('disabled');
}



function Slider(container) {

  last.addEventListener('click', function(event) {
    for(let i = 0; i < slider[0].children.length; i++){
      if(slider[0].children[i].classList.contains('slide-current')) {
        slider[0].children[i].classList.remove('slide-current');
      }
    }
  
    slider[0].lastElementChild.classList.add('slide-current');

    if(event.target) {
      next.classList.add('disabled');
      last.classList.add('disabled');
    }else {
      next.classList.remove('disabled');
      last.classList.remove('disabled');
    }

    prev.classList.remove('disabled');
    first.classList.remove('disabled');
  });

  first.addEventListener('click', function(event) {

    for(let i = 0; i < slider[0].children.length; i++){
      if(slider[0].children[i].classList.contains('slide-current')) {
        slider[0].children[i].classList.remove('slide-current');
      }
    }

    slider[0].firstElementChild.classList.add('slide-current');

    if(event.target) {
      prev.classList.add('disabled');
      first.classList.add('disabled');
    }else {
      prev.classList.remove('disabled');
      first.classList.remove('disabled');
    }

    next.classList.remove('disabled');
    last.classList.remove('disabled');
  
  });

  next.addEventListener('click', function(event) {
    if(prev.classList.contains('disabled') && first.classList.contains('disabled')) {
      first.classList.remove('disabled');
      prev.classList.remove('disabled');
    }

    moveSlide(true);

    if(slider[0].lastElementChild.classList.contains('slide-current')) {
      next.classList.add('disabled');
      last.classList.add('disabled');
    }
  });
  
  
  prev.addEventListener('click', function(event) {
    if(next.classList.contains('disabled') && last.classList.contains('disabled')) {
      next.classList.remove('disabled');
      last.classList.remove('disabled');
    }

    moveSlide(false);

    if(slider[0].firstElementChild.classList.contains('slide-current')) {
      first.classList.add('disabled');
      prev.classList.add('disabled');
    }

  });
  
  function moveSlide(isForward) {
    const currentSlide = container.querySelector('.slide-current');
    const activatedSlide = isForward ? currentSlide.nextElementSibling : currentSlide.previousElementSibling;

    if(next.classList.contains('disabled') || prev.classList.contains('disabled')) {
      return;
    }
    currentSlide.classList.remove('slide-current');
    activatedSlide.classList.add('slide-current'); 
  } 

}

Array.from(slider).forEach(item => Slider(item));