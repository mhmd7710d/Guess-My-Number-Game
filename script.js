'use strict';

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let gameOver = false;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  if (gameOver) return;
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('Please Chosse A Number First !!!');
  } else if (guess === randomNum) {
    if (score < 40) {
      displayMessage('Correct Number 💥💥');
      score++;
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = randomNum;
      document.querySelector('body').style.backgroundColor = '#20da3c';
      document.querySelector('.number').style.width = '90rem';
      gameOver = true;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
  } else if (score === 40) {
    displayMessage('You Win The Game 🥳🥳🥳');
  } else if (guess !== randomNum) {
    if (score > 0) {
      displayMessage(guess > randomNum ? 'Too high 👆👆👆' : 'Too low 🤏🤏🤏');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lose The Game 😐😐😐');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  gameOver = false;
  score = 20;
  randomNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
