const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeding = document.querySelector("#greeding");
const logoutBtn = document.querySelector(".logout");

//별로 중요하지 않은 string은 변수선언시 대문자로 하는 관습이 있다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//로그인
function loginSubmit(event) {
  event.preventDefault(); //submit 디폴트값이 적용되지 않게하는 함수
  const userWroteName = loginInput.value; //오류시 알림을 받기 위한 변수선언, 유저인풋값
  localStorage.setItem(USERNAME_KEY, userWroteName); //username을 로컬스토리지에 set
  loginForm.classList.add(HIDDEN_CLASSNAME); //로그인 폼 숨김
  paintGreeding(userWroteName); //환영인사 출력
}

//로그아웃
function logoutOption(event) {
  event.preventDefault();
  localStorage.removeItem(USERNAME_KEY); //로컬스토리지 유저네임 삭제
  logoutBtn.classList.add(HIDDEN_CLASSNAME); //로그아웃 버튼 숨김
  greeding.classList.add(HIDDEN_CLASSNAME); //환영인사 숨김
  loginForm.classList.remove(HIDDEN_CLASSNAME); //로그인폼 다시 출력
  //loginInput.value = ""  : 로그인폼으로 돌아갔을 때 인풋칸에 전 사용자 이름이 그대로 있는것을 지우는
  //window.location.reload();  : 위에 3줄 대신 페이지 리로드하는 방법
}

logoutBtn.addEventListener("click", logoutOption);

//환영문구 출력
function paintGreeding(username) {
  greeding.innerText = `반갑습니다. ${username}님!`;
  greeding.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY); //저장된 유저네임 할당변수

//로컬스토리지가 null이라면 숨겨진 loginform을 보임과 동시에 loginSumit 함수를 실행
//아니라면 loginform을 그대로 숨겨놓고 greeding
if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreeding(saveUsername);
}
