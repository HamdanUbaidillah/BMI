const btn = document.querySelector("button");
const clear = document.querySelector(".clear");
const score = document.querySelector(".score");
const height = document.querySelector("#inputHeight");
const weight = document.querySelector("#inputWeight");
const stats = document.querySelector(".stats");
btn.addEventListener("click", function () {
  if (height.value == "" || weight.value == "") {
    alert("Masukan Tinggi dan Berat anda!");
    return;
  } else {
    let bmi = weight.value / (height.value / 100) ** 2;
    bmi = bmi.toFixed(2);
    score.innerHTML = bmi;
    let status = "";
    if (bmi < 18.5) {
      status = "Kekurangan Berat";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      status = "Normal";
    } else if (bmi >= 24.9 && bmi < 30.0) {
      status = "Kelebihan Berat";
    } else {
      status = "Obesitas";
    }
    stats.innerHTML = status;
  }
});

clear.addEventListener("click", function () {
  height.value = "";
  weight.value = "";
  score.innerHTML = "00.00";
  stats.innerHTML = "";
});
