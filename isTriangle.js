const angles = document.querySelectorAll(".angle-input");
const checkTriangle = document.querySelector(".istriangle");
const output = document.querySelector(".output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3;
}

function isTriangle() {
  const angle1 = Number(angles[0].value);
  const angle2 = Number(angles[1].value);
  const angle3 = Number(angles[2].value);

  if (!angle1 || !angle2 || !angle3) {
    output.innerText = "Please enter all the values 😡";
    return;
  }
  if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
    output.innerText = "Please enter valid values 😑";
    return;
  }
  const sumOfAngles = calculateSumOfAngles(angle1, angle2, angle3);
  if (sumOfAngles === 180) {
    output.innerText = "Yay, the given angles can form a triangle 😁";
  } else {
    output.innerText = "The given angles can't form a triangle :(";
  }
}

checkTriangle.addEventListener("click", isTriangle);
