const cog = document.querySelector(".cog"); // 코그 이모티콘
const arrowBox = document.querySelector(".arrow-box"); // 말풍선 모양 박스

function openOption() {
  arrowBox.classList.toggle("hidden");
}

cog.addEventListener("click", openOption);
