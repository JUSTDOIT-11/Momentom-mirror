const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input"); //위에 이미 form을 grab해뒀기 때문에 그 안에 input은 html전부가 아닌 form에서만 찾을 수 있다.
const toDoList = document.querySelector(".todo-list");

const TODO_KEY = "toDos";

let toDos = []; //배열이 비어있기때문에 페이지 리로드시 새로 입력되는값에 덮여짐. 45번줄 확인.

function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos)); //toDos Array에 들어가는 값음 "값"(text)의 형태로 들어가게 하기위함.
}

//로컬스토리지에서의 삭제코드는 '삭제하고자하는 오브젝트를 제외한 오브젝트로 구성된 배열'을 다시 생성하고 그 배열을 '다시 로드'하는 방식임. = "삭제"가 아닌 "새로운 배열을 로드"
function deleteToDo(event) {
  const deleteList = event.target.parentElement; // 삭제하려는 내용이 담긴 list가 button(and span)의 부모엘리먼트 이므로
  deleteList.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(deleteList.id)); //todos.id와 deleteList의 id가 다른 오브젝트로 배열을 재생성
  saveToDos(); // 윗줄로 재생성된 배열을 로컬스토리지에 다시 set한다.
}

function paintToDo(newTodo) {
  const doList = document.createElement("li");
  doList.id = newTodo.id;
  const doListSpan = document.createElement("span");
  doListSpan.innerText = newTodo.Text; // 39번줄에서 오브젝트를 함수로 push했기 때문에 newTodo = newTodoObj 이다.(대신 함수인자도 newTodoObj로 바꿔줘야함!)
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
  const newTodoObj = {
    Text: newTodo,
    id: Date.now(), //랜덤한 수를 뽑아내기 위함
  };
  toDos.push(newTodoObj); //배열에 오브젝트를 push함.
  paintToDo(newTodoObj); //함수에 오브젝트를 push함.
  saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY); // "[]" 의 형태로 get해옴.

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos); // "[]" -> [] = 변환하여 배열로 만듬.
  toDos = parsedToDos; //페이지 리로드 시 덮어쓰기 방지를 위해 리로드 전 배열을 현재배열로 복사함
  parsedToDos.forEach(paintToDo);
}
