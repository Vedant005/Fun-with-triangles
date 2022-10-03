const quizform = document.querySelector(".quiz-form");

const submitAnswerBtn = document.querySelector("#submit-answer-btn");

const outputEl = document.querySelector("#output");

const correctAnswers = ["90", "right angled"];


function calculateScore() {
    let score = 0;
    let index = 0;
  
    const formResults = new FormData(quizform);
  
    for (let value of formResults.values()) {
      if (correctAnswers.includes(value) ) {
        score = score + 1;
      }
      index = index + 1;
    }
    outputEl.innerText = `Your Score is : ${score}`;
  }
  
  submitAnswerBtn.addEventListener("click", calculateScore);