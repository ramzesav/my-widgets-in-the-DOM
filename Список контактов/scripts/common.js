'use strict';

const dataContact = JSON.parse(loadContacts());

for(let i = 0; i < dataContact.length - 1; i++) {
	document.getElementsByClassName('contacts-list')[0].innerHTML += '<li><strong></strong></li>';
}

const contactList = document.getElementsByClassName('contacts-list')[0].querySelectorAll('li');

for(let i =0; i < contactList.length; i++) {
  contactList[i].dataset.email = dataContact[i].email
  contactList[i].dataset.phone = dataContact[i].phone
  contactList[i].innerHTML = dataContact[i].name
}

 
