"use strict";

const buttonMusic = document.getElementsByClassName('drum-kit__drum');

function playBacks() {
	 for(var i = 0; i < buttonMusic.length; i++)  {
	 	for(let j = 0; j < this.getElementsByTagName('audio').length; j++) {
	 		this.getElementsByTagName('audio')[j].currentTime = 0;
	 		this.getElementsByTagName('audio')[j].play();
	 	}
  }
}

for(let music of buttonMusic) {
	music.onclick = playBacks
}



