// PANAL 돌리기
const frame = document.querySelector("section");
const articleArr = frame.querySelectorAll("article");
const len = articleArr.length;
const deg = 360 / len;

for (let i = 0; i < len; i++) {
  articleArr[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
}

// Prev, Next 버튼 액션 처리
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

let num = 0; // 회전 각도 조절율
let active = 0; // 활성화 패널 위치 기억용

prev.addEventListener("click", function () {
  frame.style.transform = `rotate(${deg * ++num}deg)`;

  if (active === 0) {
    active = len - 1;
  } else {
    active--;
  }

  for (let el of articleArr) {
    el.classList.remove("on");
  }

  articleArr[active].classList.add("on");
});

next.addEventListener("click", function () {
  frame.style.transform = `rotate(${deg * --num}deg)`;

  if (active === len - 1) {
    active = 0;
  } else {
    active++;
  }

  for (let el of articleArr) {
    el.classList.remove("on");
  }

  articleArr[active].classList.add("on");
});
