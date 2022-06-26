const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = 500;

//FUNCTIONS
const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const setColor = (e) => {
  const color = getRandomColor();
  e.style.background = color;
  e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (e) => {
  e.style.background = '#1d1d1d';
  e.style.boxShadow = `0 0 2px #000`;
};

//LOOPS

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  });
  square.addEventListener('mouseout', () => {
    removeColor(square);
  });

  container.appendChild(square);
}
