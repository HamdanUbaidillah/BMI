const noBtn = document.querySelector(".no");
const yesBtn = document.querySelector(".yes");
const text = document.querySelector("h1");
const container = document.querySelector(".container");

noBtn.addEventListener("click", () => {
  noBtn.style.position = "absolute";

  const random_left = Math.floor(Math.random() * container.clientWidth);
  const random_top = Math.floor(Math.random() * container.clientHeight);
  console.log(random_left);
  console.log(random_top);

  if (random_left >= container.clientWidth / 2) {
    noBtn.style.left = `${random_left - noBtn.clientWidth}px`;
  }
  if (random_top >= container.clientHeight / 2) {
    noBtn.style.top = `${random_top - noBtn.clientHeight}px`;
  }
});

yesBtn.addEventListener("click", () => {
  text.innerHTML = "I knew it";
});
