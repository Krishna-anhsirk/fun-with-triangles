const angles = document.querySelectorAll(".angle-input");
const checkTriangle = document.querySelector(".istriangle");
const output = document.querySelector(".output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(angles[0].value),
    Number(angles[1].value),
    Number(angles[2].value)
  );
  if (sumOfAngles === 180) {
    output.innerText = "Yay, the given angles can form a triangle 😁";
  } else {
    output.innerText = "The given angles can't form a triangle :(";
  }
}

checkTriangle.addEventListener("click", isTriangle);
