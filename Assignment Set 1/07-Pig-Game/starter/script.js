'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Roll!
btnRoll.addEventListener('click',function() {
    if (playing) {
        // Generate random roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        // Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // Check if rolled 1; if so, pass to next player
        if (dice !== 1) {
            // Add to score
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        }
        else {
            //Switch players
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function() {
    if (playing) {
        // Add current score to player score
        scores[activePlayer] += currentScore;

        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        // Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else {
            // Switch players
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', function() {
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;

    for (let i = 0; i < 2; i++) {
        scores[i] = 0;
        document.querySelector(`.player--${i}`).classList.remove('player--active');
        document.querySelector(`.player--${i}`).classList.remove('player--winner');
        document.querySelector(`#current--${i}`).textContent = 0;
    }

    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
});



