const submitQuiz = document.querySelector(".submit-form");
const correctAnswers = ["90°", "right-angled"];
const quizForm = document.querySelector(".quiz-form");
const output = document.querySelector(".output");

function calculateScore() {
  const data = new FormData(quizForm);
  var score = 0;
  var index = 0;

  for (const val of data.values()) {
    if (val == correctAnswers[index]) {
      score++;
    }
    index++;
  }
  output.innerText = `Yay, your score is ${score}`;
}

submitQuiz.addEventListener("click", calculateScore);
