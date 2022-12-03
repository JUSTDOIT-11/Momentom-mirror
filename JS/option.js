const cog = document.querySelector(".cog"); // 코그 이모티콘
const arrowBox = document.querySelector(".arrow-box"); // 말풍선 모양 박스

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

function openOption() {
  //arrowBox.classList.toggle("hidden");
  cogAnimation();
  clickCount++;
}

cog.addEventListener("click", openOption);
