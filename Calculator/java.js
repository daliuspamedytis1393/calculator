const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");
const g = document.getElementById("clickas");
const screen = document.getElementById("input-window");
const screen2 = document.querySelector(".a1");
const screen3 = document.querySelector(".a2");
const screen4 = document.querySelector(".fa-power-off");
const screen5 = document.querySelector(".a3");
const screen6 = document.querySelector(".a4");
const screen7 = document.querySelector(".a5");
const screen8 = document.querySelector(".a6");
const screen9 = document.querySelector(".a7");
const screen10 = document.querySelector(".a8");
g.addEventListener("click", e => {
  let rezultatas = "";
  switch (e.target.name) {
    case "suma":
      rezultatas = Number(num1.value) + Number(num2.value);
      break;
    case "atimtis":
      rezultatas = Number(num1.value) - Number(num2.value);
      break;
    case "daugyba":
      rezultatas = Number(num1.value) * Number(num2.value);
      break;
    case "dalyba":
      rezultatas = Number(num1.value) / Number(num2.value);
      break;
    case "liekana":
      rezultatas = Number(num1.value) % Number(num2.value);
      break;
    case "trintuvas":
      rezultatas = "";
      n1.value = "";
      n2.value = "";
      break;
  }
  document.getElementById("DEMO").innerHTML = rezultatas;
});

const renderOutput = value => {
  rezultatas.text = value;
};

document.querySelectorAll(".stylebutton").forEach(function(e) {
  e.addEventListener("click", function() {
    screen.style.backgroundColor = "aqua";
    screen2.style.backgroundColor = "aqua";
    screen3.style.backgroundColor = "aqua";
    screen4.style.color = "yellow";
    screen5.style.color = "yellow";
    screen6.style.color = "yellow";
    screen7.style.color = "yellow";
    screen8.style.color = "yellow";
    screen9.style.color = "yellow";
    screen10.style.color = "yellow";
  });
});
document.querySelectorAll(".stylebutton").forEach(function(e) {
  e.addEventListener("dblclick", function() {
    screen.style.backgroundColor = "white";
    screen2.style.backgroundColor = "white";
    screen3.style.backgroundColor = "white";
    screen4.style.color = "white";
    screen5.style.color = "white";
    screen6.style.color = "white";
    screen7.style.color = "white";
    screen8.style.color = "white";
    screen9.style.color = "white";
    screen10.style.color = "white";
    document.getElementById("DEMO").innerHTML = " ";
    n1.value = "";
    n2.value = "";
  });
});
