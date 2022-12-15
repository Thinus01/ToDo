import './style.css';
import refresh from './assets/refresh.png'

const description = document.querySelector('#inputid');
const hardlist = document.createElement('div');
const div = document.querySelector('#list');
const todo = document.querySelector('#ToDo');
const Added = document.querySelector('.added');
let project;
let index = 2;
let completed = false;
let pushArr = [];

description.addEventListener('keyup', (e) => {
  if(e.keyCode === 13) {
    project = description.value;
    index++;
    document.getElementById('list').innerHTML += `
    <div class="added" id="item${index}">
    <input id="checker" type="checkbox">
    <p>${description.value}</p>
    <img src='../src/assets/dots.png'>
    </div>
    `;
    pushArr.push(project, index);
    list.push(pushArr);
  }
})

const list = [
  {
    idA: 1,
    doneA: completed,
    inputValA: `wash the dishes`,
  },
  {
    idA: 2,
    doneA: completed,
    inputValA: 'complete To Do List project',
  },  {
    idA: index,
    doneA: completed,
    inputValA: description.value,
  }
];

hardlist.innerHTML = `
<div class="added" id="item${list[0].idA[0]}">
<input id="checker" type="checkbox">
<p>${list[0].inputValA}</p>
<img src='../src/assets/dots.png'>
</div>
<div class="added" id="item${list[1].idA[1]}">
<input id="checker" type="checkbox">
<p>${list[1].inputValA}</p>
<img src='../src/assets/dots.png'>
</div>
`;

div.appendChild(hardlist);

const refreshIcon = new Image();
refreshIcon.src = refresh;
todo.appendChild(refreshIcon);
