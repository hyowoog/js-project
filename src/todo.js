const todoForm = document.querySelector(".todo-Form"),
  todoInput = todoForm.querySelector("input"),
  listPending = document.querySelector("#pending");

const TODOS_LS = "toDos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function filterFn(todo) {
  return toDos.id !== 1;
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  listPending.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function addPending(txt) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btnDel = document.createElement("button");
  const newId = toDos.length + 1;
  li.id = newId;
  span.innerText = `${txt}  `;
  btnDel.innerText = "❎";
  btnDel.id = newId;
  btnDel.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(btnDel);
  listPending.appendChild(li);
  const toDoObj = {
    text: txt,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}


function loadPending() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    //console.log(loadedToDos);
    const parsedToDos = JSON.parse(loadedToDos);
    //console.log(parsedToDos);
    parsedToDos.forEach(function (todo) {
      addPending(todo.text);
    });
  }
}


function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  if (currentValue) {
    addPending(currentValue);
  }
  todoInput.value = "";
}

function init() {
  loadPending();
  todoForm.addEventListener("submit", handleSubmit);
}

init();