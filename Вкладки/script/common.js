'use strict';

let navigator = document.getElementsByClassName('tabs-nav')[0];
let tabsContent = document.getElementsByClassName('tabs-content')[0];

let tabsShopping = navigator.firstElementChild.cloneNode(true);

tabsShopping.children[0].innerHTML = tabsContent.children[0].getAttribute("data-tab-title");

if(tabsShopping.children[0].innerHTML === 'Шопинг') {
  tabsShopping.children[0].classList.add(`${tabsContent.children[0].getAttribute("data-tab-icon")}`)
}

navigator.appendChild(tabsShopping);

let tabsFood = navigator.firstElementChild.cloneNode(true);

tabsFood.children[0].innerHTML = tabsContent.children[1].getAttribute("data-tab-title");

if(tabsFood.children[0].innerHTML === 'Еда') {
  tabsFood.children[0].classList.add(`${tabsContent.children[1].getAttribute("data-tab-icon")}`)
}

navigator.appendChild(tabsFood);

let tabsСlubs = navigator.firstElementChild.cloneNode(true);

tabsСlubs.children[0].innerHTML = tabsContent.children[2].getAttribute("data-tab-title");

if(tabsСlubs.children[0].innerHTML === 'Клубы') {
  tabsСlubs.children[0].classList.add(`${tabsContent.children[2].getAttribute("data-tab-icon")}`)
}

navigator.appendChild(tabsСlubs);

navigator.removeChild(navigator.firstElementChild);
tabsContent.firstElementChild.classList.add('ui-tabs-active');
navigator.firstElementChild.classList.add('ui-tabs-active');

for(let i = 0; i < tabsContent.children.length; i++) {
  if(!tabsContent.children[i].classList.contains('ui-tabs-active')) {
    tabsContent.children[i].classList.add('hidden');
  }
}

function switchingTabs(event) {
  for(let i = 0; i < tabsContent.children.length; i++) {
    if(tabsContent.children[i].classList.contains('ui-tabs-active')) {
      tabsContent.children[i].classList.remove('ui-tabs-active');
      tabsContent.children[i].classList.add('hidden');
    }
  }
  
   if(event.target.className.split(' ')[1] === "fa-cutlery") {
     tabsContent.children[1].classList.remove('hidden');
     tabsContent.children[1].classList.add('ui-tabs-active');
   }else if(event.target.className.split(' ')[1] === "fa-music") {
     tabsContent.children[2].classList.remove('hidden');
     tabsContent.children[2].classList.add('ui-tabs-active');
   }else {
     tabsContent.children[0].classList.remove('hidden');
     tabsContent.children[0].classList.add('ui-tabs-active');
   }

  let navList = navigator.getElementsByTagName('li');
  for(let i = 0; i < navList.length; i++) {
    navList[i].classList.remove('ui-tabs-active');
    if(!event.currentTarget.classList.contains('ui-tabs-active')) {
      event.currentTarget.classList.add('ui-tabs-active');
    }
  }
   
}

const tabsNav = navigator.getElementsByTagName('li');
for(let tabs of tabsNav) {
  tabs.addEventListener('click', switchingTabs);
}