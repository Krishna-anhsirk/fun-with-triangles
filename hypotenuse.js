const inputAngles = document.querySelectorAll(".input-angle");
const calcHypotenuse = document.querySelector(".calculate-hypotenuse");
const output = document.querySelector(".output");

function calculateSumOfSquares(angle1, angle2) {
  return angle1 * angle1 + angle2 * angle2;
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(inputAngles[0].value),
    Number(inputAngles[1].value)
  );

  const hypotenuseLength = Math.sqrt(sumOfSquares);
  output.innerText = `The length of Hypotenuse is ${hypotenuseLength} cm`;
}

calcHypotenuse.addEventListener("click", calculateHypotenuse);
