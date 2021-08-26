const textRGB = document.getElementById('rgb-color');
const arrayBalls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');

function randomColor() {
  const color1 = Math.floor(Math.random() * 256);
  const color2 = Math.floor(Math.random() * 256);
  const color3 = Math.floor(Math.random() * 256);
  return `(${color1}, ${color2}, ${color3})`;
}
const colorGuess = randomColor();
textRGB.innerText = colorGuess;
const theRigthBall = Math.floor(Math.random() * 6);
console.log(`Posição no array da bola correta: ${theRigthBall}`);
console.log(`Cor da bola correta ${colorGuess}`);

function balls(callback) {
  for (let i = 0; i < arrayBalls.length; i += 1) {
    if (i === theRigthBall) {
      arrayBalls[i].style.backgroundColor = `rgb${colorGuess}`;
    } else {
      arrayBalls[i].style.backgroundColor = `rgb${callback()}`;
    }
  }
}
balls(randomColor);

arrayBalls.forEach((element, index) => element.addEventListener('click', () => {
  if (index === theRigthBall) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}));
