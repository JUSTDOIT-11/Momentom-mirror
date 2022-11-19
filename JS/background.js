const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
];

//배열[소수부분 내림한 정수(0~1미만의 랜덤한 수 * 배열의 길이)]
const backgroundImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `IMG/${backgroundImages}`;

//.append:맨 뒤에 추가하는, .prepend: 맨 앞에 추가하는
document.body.append(bgImage);
