const listData = document.querySelector('.lists');
const inputField = document.querySelector('.inputid');
const clearCompleted = document.querySelector('.clear');
let tasks = [];
const completed = false;
let index = 0;

function addToList() {
  listData.innerHTML = '';
  tasks.forEach((listed) => {
    if (listed.completed === true) {
      listData.innerHTML += `
      <div class="main-list">
      <input type="checkbox" class="check" id="check${listed.index}" onclick="Check(${listed.index});" checked>
      <input class="list-item" id="list${listed.index}" value="${listed.description}" readonly>
      <i class="fa-solid fa-pen-to-square edit " id="edit${listed.index}" onclick="editList(${listed.index});"></i>
      <i class="fa-solid fa-floppy-disk save hide" id="save${listed.index}" onclick="saveList(${listed.index});"></i>
      <i id="remove-icon" onclick="Remove(${listed.index});" class="fa-solid fa-trash"></i>
      </div>
     `;
    } else {
      listData.innerHTML += `
      <div class="main-list">
      <input type="checkbox" class="check" id="check${listed.index}" onclick="Check(${listed.index});">
      <input class="list-item" id="list${listed.index}" value="${listed.description}" readonly>
      <i class="fa-solid fa-pen-to-square edit " id="edit${listed.index}" onclick="editList(${listed.index});"></i>
      <i class="fa-solid fa-floppy-disk save hide" id="save${listed.index}" onclick="saveList(${listed.index});"></i>
      <i id="remove-icon" onclick="Remove(${listed.index});" class="fa-solid fa-trash"></i>
      </div>
     `;
    }
    inputField.value = '';
  });
}

window.addEventListener('load', addToList);

inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputField.value.length !== 0) {
    const storedData = localStorage.getItem('To-Do');

    if (storedData === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(storedData);
      index = tasks.length === 0 ? 0 : tasks.length;
    }

    const LocalData = {
      index,
      description: inputField.value,
      completed,
    };

    tasks.push(LocalData);
    localStorage.setItem('To-Do', JSON.stringify(tasks));
    addToList();
  }
});

window.onload = () => {
  if (localStorage.getItem('To-Do')) {
    tasks = JSON.parse(localStorage.getItem('To-Do'));
  }
  addToList();
};

window.saveList = (index) => {
  const editBtn = document.getElementById(`edit${index}`);
  const saveBtn = document.getElementById(`save${index}`);
  saveBtn.style.display = 'none';
  editBtn.style.display = 'block';
  const specList = document.getElementById(`list${index}`);
  const storedData = localStorage.getItem('To-Do');
  tasks = JSON.parse(storedData);
  tasks[index].description = specList.value;
  localStorage.setItem('To-Do', JSON.stringify(tasks));
  addToList();
};

window.editList = (index) => {
  const editBtn = document.getElementById(`edit${index}`);
  const saveBtn = document.getElementById(`save${index}`);
  saveBtn.style.display = 'block';
  editBtn.style.display = 'none';
  const specList = document.getElementById(`list${index}`);
  specList.removeAttribute('readonly');
  const { length } = specList.value;
  specList.setSelectionRange(length, length);
  specList.focus();
  return specList;
};

window.Remove = (index) => {
  const storedData = localStorage.getItem('To-Do');
  tasks = JSON.parse(storedData);
  tasks.splice(index, 1);
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i;
  }
  localStorage.setItem('To-Do', JSON.stringify(tasks));
  addToList();
};

window.Check = (index) => {
  const checkBox = document.getElementById(`check${index}`);
  const specList = document.getElementById(`list${index}`);
  if (checkBox.checked) {
    specList.style.textDecoration = 'line-through';
    specList.style.color = 'gray';

    const storedData = localStorage.getItem('To-Do');
    tasks = JSON.parse(storedData);
    tasks[index].completed = true;
    localStorage.setItem('To-Do', JSON.stringify(tasks));
    addToList();
  } else {
    specList.style.textDecoration = 'none';
    specList.style.color = 'inherit';
    const storedData = localStorage.getItem('To-Do');
    tasks = JSON.parse(storedData);
    tasks[index].completed = false;
    localStorage.setItem('To-Do', JSON.stringify(tasks));
    addToList();
  }
};

clearCompleted.addEventListener('click', () => {
  const storedData = localStorage.getItem('To-Do');
  tasks = JSON.parse(storedData);
  const clearedData = tasks.filter((element) => element.completed === false);
  tasks = clearedData;
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i;
  }
  localStorage.setItem('To-Do', JSON.stringify(tasks));
  addToList();
});