'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const dice = document.querySelector('.dice');

const newButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

dice.classList.add('hidden');

let activePlayer = 0;
let counter = 0;
let scores = [0, 0];
let playing = true;

rollButton.addEventListener('click', function () {
  if (playing) {
    const number = Math.trunc(Math.random() * 6) + 1;

    dice.src = `dice-${number}.png`;
    dice.classList.remove('hidden');

    if (number !== 1) {
      counter += number;
      document.getElementById(`current--${activePlayer}`).innerHTML = counter;
    } else {
      document.querySelector(`#score--${activePlayer}`).innerHTML = 0;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--active');
      document.getElementById(`current--${activePlayer}`).innerHTML = 0;
      scores[activePlayer] = 0;
      counter = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--active');
    }
  }
});

holdButton.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += counter;
    document.querySelector(`#score--${activePlayer}`).innerHTML =
      scores[`${activePlayer}`];

    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
      dice.classList.add('hidden');
    } else {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--active');
      document.getElementById(`current--${activePlayer}`).innerHTML = 0;
      counter = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--active');
      console.log(scores);
    }
  }
});

newButton.addEventListener('click', function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');

  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  dice.classList.add('hidden');

  playing = true;

  counter = 0;
  scores = [0, 0];

});
