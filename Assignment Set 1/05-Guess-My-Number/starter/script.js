'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Woo hoo! You got it!";

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = (Math.trunc(Math.random()*20) + 1);

let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // 0 or no number
    if(!guess) {
        displayMessage("No number!");
    }

    //Guess is correct!
    else if (guess === secretNumber) {
        displayMessage("Woo hoo! You got it!");
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';

        if (score >= highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }

    // Guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {

            displayMessage (guess > secretNumber ? "Too high!" : "Too low!");
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage("GAME OVER");
            score = 0;
            document.querySelector('.score').textContent = score;
        }    
    }

});

document.querySelector('.again').addEventListener('click', function() {

    score = 20;
    secretNumber = (Math.trunc(Math.random()*20) + 1);

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = "";
    document.querySelector('.message').textContent = "Start guessing...";

});
