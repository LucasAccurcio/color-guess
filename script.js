const textRGB = document.getElementById('rgb-color');
const arrayBalls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const btnReset = document.getElementById('reset-game');
const showScore = document.getElementById('score');
let score = 0;
// const levelHard = document.getElementById('hard');
// criar as div por funcão dianamicamente com padrao de 6

function randomColor() {
  const color1 = Math.floor(Math.random() * 256);
  const color2 = Math.floor(Math.random() * 256);
  const color3 = Math.floor(Math.random() * 256);
  return `(${color1}, ${color2}, ${color3})`;
}

function newColorGuess() {
  const colorGuess = randomColor();
  textRGB.innerText = colorGuess;
  return colorGuess;
}

function randomBall(n = 6) {
  const theRigthBall = Math.floor(Math.random() * n);
  return theRigthBall;
}

function addListener(theRigthBall) {
  let click = 0;
  arrayBalls.forEach((element, index) => element.addEventListener('click', () => {
    if (click === 1) {
      return console.log('Você já jogou!');
    }
    if (index === theRigthBall) {
      answer.innerText = 'Acertou!';
      score += 3;
      showScore.innerText = score;
      arrayBalls[index].classList.add('selected');
      click = 1;
    } else {
      answer.innerText = 'Errou! Tente novamente!';
      arrayBalls[index].classList.add('selected');
      click = 1;
    }
  }));
}

function balls(callback, colorGuess, theRigthBall) {
  for (let i = 0; i < arrayBalls.length; i += 1) {
    if (i === theRigthBall) {
      arrayBalls[i].style.backgroundColor = `rgb${colorGuess}`;
    } else {
      arrayBalls[i].style.backgroundColor = `rgb${callback()}`;
    }
  }
  addListener(theRigthBall);
}

function startGame() {
  const selected = document.querySelector('.selected');
  if (selected !== null) selected.classList.remove('selected');
  answer.innerText = 'Escolha uma cor';
  const colorGuess = newColorGuess();
  const theRigthBall = randomBall();
  balls(randomColor, colorGuess, theRigthBall);
}

btnReset.addEventListener('click', () => {
  startGame();
});

window.onload = () => {
  startGame();
};
