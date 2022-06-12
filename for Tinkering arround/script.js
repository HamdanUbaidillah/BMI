const display = document.querySelector(".display");
const btnIncrease = document.querySelector(".increase");
const increaseDbl = document.querySelector(".increaseDbl");
const btnDecrease = document.querySelector(".decrease");
const btnDecreaseDbl = document.querySelector(".decreaseDbl");
const clear = document.querySelector(".clear");
let count = 0;

btnIncrease.addEventListener("click", () => {
  count++;
  display.innerHTML = count;
});

btnDecrease.addEventListener("click", () => {
  count--;
  display.innerHTML = count;
});

increaseDbl.addEventListener("click", () => {
  count = count + 10;
  display.innerHTML = count;
});

btnDecreaseDbl.addEventListener("click", () => {
  count = count - 10;
  display.innerHTML = count;
});

clear.addEventListener("click", () => {
  count = 0;
  display.innerHTML = count;
});


