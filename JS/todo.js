const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input"); //위에 이미 form을 grab해뒀기 때문에 그 안에 input은 html전부가 아닌 form에서만 찾을 수 있다.
const toDoList = document.querySelector(".todo-list");

const TODO_KEY = "toDos";

let toDos = []; //배열이 비어있기때문에 페이지 리로드시 새로 입력되는값에 덮여짐. 45번줄 확인.

function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos)); //toDos Array에 들어가는 값음 "값"(text)의 형태로 들어가게 하기위함.
}

//deleteToDo()로 하고, const deleteList = this.parentElement; 로 해도 동작함 -> why?
function deleteToDo(event) {
  const deleteList = event.target.parentElement; // 삭제하려는 내용이 담긴 list가 button(and span)의 부모엘리먼트 이므로
  deleteList.remove();
}

function paintToDo(newTodo) {
  const doList = document.createElement("li");
  const doListSpan = document.createElement("span");
  doListSpan.innerText = newTodo; //paintToDo 함수는 toDoSubmit 함수에서 실행되기 때문에 toDoSubmit함수에 선언한 newTodo변수를 사용함
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteToDo); //지우기버튼을 눌렀을때 해당 함수 실행
  doList.append(doListSpan, deleteButton); //doList 안에 doListSpan, deleteButton을 넣음 : li안에span, button생성
  toDoList.appendChild(doList); //toDoList 안에 doList를 넣음 : ul안에 li생성
}

function toDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = ""; //인풋텍스트를 받은 후 비워내기위함, 윗줄의 newTodo와는 별개
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY); // "[]" 의 형태로 get해옴.

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos); // "[]" -> [] = 변환하여 배열로 만듬.
  toDos = parsedToDos; //페이지 리로드 시 덮어쓰기 방지를 위해 리로드 전 배열을 현재배열로 복사함
  parsedToDos.forEach(paintToDo);
}
