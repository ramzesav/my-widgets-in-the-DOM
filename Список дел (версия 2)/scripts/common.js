'use strict';

const taskList = document.getElementsByClassName('todo-list')[0];
const tasks = taskList.getElementsByTagName('label');

function Checked(event) {
  if(!event.target.children[0].hasAttribute('checked')) {
    event.target.children[0].setAttribute('checked',  "");  taskList.lastElementChild.previousElementSibling.appendChild(event.target);
  }else {
   event.target.children[0].removeAttribute('checked');
   taskList.lastElementChild.appendChild(event.target);
  }
}


for(let checkedTask of tasks) {
  checkedTask.addEventListener('click', Checked)
}