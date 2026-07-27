'use strict';

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      'Please Chosse A Number First !!!';
  } else if (guess === randomNum) {
    if (score < 40) {
      document.querySelector('.message').textContent = 'Correct Number 💥💥';
      score++;
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = randomNum;
      document.querySelector('body').style.backgroundColor = '#20da3c';
      document.querySelector('.number').style.width = '90rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
    if (score === 40) {
      document.querySelector('.message').textContent =
        'You Win The Game 🥳🥳🥳';
    }
  } else if (guess > randomNum) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high 👆👆👆';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You Lose The Game 😐😐😐';
    }
  } else if (guess < randomNum) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low 🤏🤏🤏';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You Lose The Game 😐😐😐';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.number').textContent = randomNum =
    Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
