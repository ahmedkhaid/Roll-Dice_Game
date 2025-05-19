'use strict';
const player_0 = document.querySelector('.player--0');
const player_1 = document.querySelector('.player--1');
const score_0 = document.querySelector('#score--0');
const score_1 = document.querySelector('#score--1');
const diceImage = document.querySelector('.dice');
const current_0 = document.getElementById('current--0');
let current = 0;
const current_1 = document.querySelector('#current--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let player = 0;
let score = [0, 0];
let playingStatus = true;
const initialzGame = function () {
  current = 0;
  score = [0, 0];
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  player_0.classList.remove('player--winner');
  player_1.classList.remove('player--winner');
  score_0.textContent = 0;
  score_1.textContent = 0;
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.add('player--active');
  playingStatus = true;
  diceImage.classList.add('hidden');
};
const switchPlayer = function () {
  document.getElementById(`current--${player}`).textContent = 0;
  current = 0;
  player == 0 ? (player = 1) : (player = 0);
  player_0.classList.toggle('player--active');
  player_1.classList.toggle('player--active');
};
const btnNewGame = document.querySelector('.btn--new');
// Set initial scores

// Hide the dice image initially
initialzGame();
btnRoll.addEventListener('click', function () {
  if (playingStatus) {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${randomNumber}.png`;
    if (randomNumber != 1) {
      current += randomNumber;
      document.getElementById(`current--${player}`).textContent = current;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  //   document.getElementById(`current--${player}`).textContent = 0;
  if (playingStatus) {
    score[player] += current;
    document.querySelector(`#score--${player}`).textContent = score[player];
    console.log(score);
    current = 0;
    if (score[player] >= 100) {
      //the player won the game
      playingStatus = false;
      document
        .querySelector(`.player--${player}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${player}`)
        .classList.remove('player--active');
      diceImage.classList.add('hidden');
    } else {
      //switch player
      switchPlayer();
    }
  }
});
btnNewGame.addEventListener('click', function () {
  initialzGame();
});
// btnNewGame.addEventListener('click',function()
// {
//     player=0;
//     score_0.textContent=0;
//     score_1.textContent=0;
//     player_0=0;
//     player_1=0;
//     document.getElementById(`current--0`).textContent = 0;
//     document.getElementById(`current--1`).textContent = 0;
// })
// btnHold.addEventListener('click', function () {
//     score_0.textContent = sum;

//     current_0.textContent = 0;
//   });
