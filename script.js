const textRGB = document.getElementById('rgb-color');

function randomColor() {
  const color1 = Math.floor(Math.random() * 256);
  const color2 = Math.floor(Math.random() * 256);
  const color3 = Math.floor(Math.random() * 256);
  return `(${color1}, ${color2}, ${color3})`;
}
const colorGuess = randomColor();
textRGB.innerText = colorGuess;
