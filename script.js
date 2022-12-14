const createDivsPallete = () => {
  const getPallete = document.getElementById('color-palette');
  for (let index = 0; index < 4; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.className = 'color';
    createDiv.style.border = 'solid 1px black';
    createDiv.style.width = '50px';
    createDiv.style.height = '50px';
    getPallete.appendChild(createDiv);
  }
};

const randomColor = () =>{
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const colorPallete = () => {
  const getColorPallete = document.querySelectorAll('.color');
  getColorPallete[0].style.backgroundColor = 'black';
  for (let i = 1; i < getColorPallete.length; i += 1) {
    getColorPallete[i].style.backgroundColor = randomColor();
    if (randomColor() === 'rgb(0, 0, 0)') {
      getColorPallete[i].style.backgroundColor = randomColor();
    }
  }
};

window.onload = () => {
  createDivsPallete();
  colorPallete();
};
