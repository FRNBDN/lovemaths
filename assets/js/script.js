document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        alert("Clicked Submit!");
      } else {
        let operatorType = this.getAttribute("data-type");
        runApp(operatorType);
      }
    });
  }

  runApp("addition");
});

/**
 * The main application "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runApp() {
  // Creates two random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if (operatorType === "addition") {
    displayAdditionQuestion(num1, num2);
  } else {
    alert(`Unknown operator type: ${operatorType}`);
    throw `Unknown operator type: ${operatorType}. Aborting!`;
  }
}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer(operand1, operand2) {}

function displayAdditionQuestion() {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}
