const cog = document.querySelector(".cog"); // 코그 이모티콘
const arrowBox = document.querySelector(".arrow-box"); // 말풍선 모양 박스
const quotesSwitch = document.querySelector(".Quotes-switch .switch"); //명언 label checkbox
const quotesBox = document.querySelector(".quote"); //명언 div박스
const clockSwitch = document.querySelector(".Clock-switch .switch"); //시계 label checkbox
//const clock = document.querySelector(".clock"); //시계 h2
const todoSwitch = document.querySelector(".Todo-switch .switch"); //할일 label checkbox
//const toDoForm = document.querySelector(".todo-form"); //할일 form
//const toDoList = document.querySelector(".todo-list"); //할일 리스트
const greedingSwitch = document.querySelector(".Greeting-switch .switch"); //환영인사 label checkbox
//const greeding = document.querySelector("#greeding"); //환영인사 h1
//const loginForm = document.querySelector(".login-form"); //로그인 form

let clickCount = 0;

//설정창이 열릴 때 코그 애니메이션
const cogopenSpinning = [
  { transform: "rotate(0deg) scale(1)" },
  { transform: "rotate(50deg) scale(1.2)" },
];

//설정창이 닫힐 때 코그 애니메이션
const cogcloseSpinning = [
  { transform: "rotate(50deg) scale(1.2)" },
  { transform: "rotate(0deg) scale(1)" },
];

const cogTiming = {
  duration: 200,
  fill: "forwards",
  easing: "ease-in-out",
};

//야매 코그 애니메이션...
function cogAnimation() {
  if (clickCount % 2 === 0) {
    cog.animate(cogopenSpinning, cogTiming);
    arrowBox.removeAttribute("hidden");
  } else if (clickCount % 2 === 1) {
    cog.animate(cogcloseSpinning, cogTiming);
    arrowBox.setAttribute("hidden", "");
  }
}

//flexbox 안쓸때 toggle 사용하는 방법 남겨두려고 남긴 함수
function openOption() {
  //arrowBox.classList.toggle("hidden");
  cogAnimation();
  clickCount++;
}

cog.addEventListener("click", openOption);

//quotes on-of 스위치
function quotesOnOff() {
  if (this.checked) {
    quotesBox.removeAttribute("hidden", "");
  } else {
    quotesBox.setAttribute("hidden", "");
  }
}

quotesSwitch.addEventListener("change", quotesOnOff);

//clock on-of 스위치
function clockOnOff() {
  if (this.checked) {
    clock.removeAttribute("hidden", "");
  } else {
    clock.setAttribute("hidden", "");
  }
}

clockSwitch.addEventListener("change", clockOnOff);

//todo on-of 스위치
function toDoOnOff() {
  if (this.checked) {
    toDoForm.removeAttribute("hidden", "");
    toDoList.removeAttribute("hidden", "");
  } else {
    toDoForm.setAttribute("hidden", "");
    toDoList.setAttribute("hidden", "");
  }
}

todoSwitch.addEventListener("change", toDoOnOff);

//greeding on-of 스위치
function greedingOnOff() {
  if (this.checked) {
    greeding.removeAttribute("hidden", "");
    loginForm.removeAttribute("hidden", "");
  } else {
    greeding.setAttribute("hidden", "");
    loginForm.setAttribute("hidden", "");
  }
}

greedingSwitch.addEventListener("change", greedingOnOff);
