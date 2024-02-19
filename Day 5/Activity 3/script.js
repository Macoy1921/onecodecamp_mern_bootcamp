let currentColor = '#1abc9c'; // Initial color

function changeColor(newColor) {
  currentColor = newColor;
}

function getRandomColorClass() {
  return currentColor;
}

function createCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.backgroundColor = getRandomColorClass();

  const size = Math.floor(Math.random() * 100) + 50;
  const x = Math.random() * (window.innerWidth - size);
  const y = Math.random() * (window.innerHeight - size);

  circle.style.width = `${size}px`; 
  circle.style.height = `${size}px`; 
  circle.style.left = `${x}px`; 
  circle.style.top = `${y}px`; 

  document.body.appendChild(circle);
}

document.addEventListener('click', createCircle);

// Color Palette Logic
const colorPalette = document.createElement('div');
colorPalette.classList.add('color-palette');

const colors = ['#1abc9c', '#3498db', '#e74c3c', '#f39c12', '#9b59b6'];

colors.forEach((color) => {
  const colorDiv = document.createElement('div');
  colorDiv.classList.add('color');
  colorDiv.style.backgroundColor = color;
  colorDiv.addEventListener('click', () => changeColor(color));
  colorPalette.appendChild(colorDiv);
});

document.body.appendChild(colorPalette);
