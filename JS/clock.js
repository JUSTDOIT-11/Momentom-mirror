const clock = document.querySelector(".clock");

function getClock() {
  const date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  //const hours minutes seconds = ("0" + date.getSeconds().toString()).slice(-2);    ->  문자열로 바꾸고 앞에 "0"을 추가하여 뒤에서 2개의 문자열을 불러옴 ex) 01=01, 056=56
  //clock.innerText = new Date().toLocaleTimeString();  -> 각 문화권의 운영체제에 맞는 날짜 표기법을 보여줌
  //if문을 쓰는 방법도 있음.
  clock.innerText = `${hours}:${minutes}`;
}

getClock(); // 아래 코드만 적으면 새로고침시 1초 뒤에 값이 출력되므로 즉시 출력되는 코드 한줄
setInterval(getClock, 1000);
