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


function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}