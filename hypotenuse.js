const inputSides = document.querySelectorAll(".input-side");
const calcHypotenuse = document.querySelector(".calculate-hypotenuse");
const output = document.querySelector(".output");

function calculateSumOfSquares(side1, side2) {
  return side1 * side1 + side2 * side2;
}

function calculateHypotenuse() {
  const side1 = Number(inputSides[0].value);
  const side2 = Number(inputSides[1].value);

  if (side1 <= 0 || side2 <= 0) {
    output.innerText = "Please enter valid values 😑";
    return;
  }

  if (!side1 || !side2) {
    output.innerText = "Please enter all the values 😡";
    return;
  }

  const sumOfSquares = calculateSumOfSquares(side1, side2);

  const hypotenuseLength = Math.sqrt(sumOfSquares).toFixed(2);
  output.innerText = `The length of Hypotenuse is ${hypotenuseLength} cm`;
}

calcHypotenuse.addEventListener("click", calculateHypotenuse);
