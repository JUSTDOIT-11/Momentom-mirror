const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input"); //위에 이미 form을 grab해뒀기 때문에 그 안에 input은 html전부가 아닌 form에서만 찾을 수 있다.
const toDoList = document.querySelector(".todo-list");

function paintToDo(newTodo) {
  const doList = document.createElement("li");
  const doListSpan = document.createElement("span");
  doList.appendChild(doListSpan); //doList 안에 doListSpan을 넣음 : li안에span생성
  doListSpan.innerText = newTodo; //paintToDo 함수는 toDoSubmit 함수에서 실행되기 때문에 toDoSubmit함수에 선언한 newTodo변수를 사용함
  toDoList.appendChild(doList); //toDoList 안에 doList를 넣음 : ul안에 li생성
}

function toDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", toDoSubmit);
