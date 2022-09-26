const inputSide = document.querySelectorAll(".input-side");
const calcArea = document.querySelector(".check-area");
const output = document.querySelector(".output");

function calculateArea() {
  const base = Number(inputSide[0].value);
  const height = Number(inputSide[1].value);
  const area = (1 / 2) * (base * height);
  output.innerText = `Area of the triangle is ${area} cm²`;
}

calcArea.addEventListener("click", calculateArea);
