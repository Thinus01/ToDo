import './style.css';
import refresh from './assets/refresh.png';

const inputVal = document.querySelector('#inputid');
const hardlist = document.createElement('div');
const div = document.querySelector('#list');
const todo = document.querySelector('#ToDo');
let project;
let ID = 2;
const done = false;
const pushArr = [];

const list = [
  {
    index: 1,
    completed: done,
    description: 'wash the dishes',
  },
  {
    index: 2,
    completed: done,
    description: 'complete To Do List project',
  }, {
    index: ID,
    completed: done,
    description: inputVal.value,
  },
];

inputVal.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    project = inputVal.value;
    ID += 1;
    document.getElementById('list').innerHTML += `
    <div class="added" id="item${ID}">
    <input id="checker" type="checkbox">
    <p>${inputVal.value}</p>
    <img src='../src/assets/dots.png'>
    </div>
    `;
    pushArr.push(project, ID);
    list.push(pushArr);
  }
});

hardlist.innerHTML = `
<div class="added" id="item${list[0].index[0]}">
<input id="checker" type="checkbox">
<p>${list[0].description}</p>
<img src='../src/assets/dots.png'>
</div>
<div class="added" id="item${list[1].index[1]}">
<input id="checker" type="checkbox">
<p>${list[1].description}</p>
<img src='../src/assets/dots.png'>
</div>
`;

div.appendChild(hardlist);

const refreshIcon = new Image();
refreshIcon.src = refresh;
todo.appendChild(refreshIcon);
