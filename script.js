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

const createGrid = () => {
  const getPixel = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    for (let index1 = 0; index1 < 5; index1 += 1) {
      const cell = document.createElement('div');
      cell.className = 'pixel';
      line.appendChild(cell);
      cell.style.border = 'solid 1px black';
      cell.style.width = '39px';
      cell.style.height = '39px';
      cell.style.display = 'inline-block';
      cell.style.verticalAlign = 'middle';
    }
    getPixel.appendChild(line);
  }
};

const blankVerify = () => {
  const getPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < getPixel.length; index += 1) {
    if (getPixel[index].style.backgroundColor === null) {
    } else {
      getPixel[index].style.backgroundColor = 'white';
    }
    if (getPixel[index].style.width === '40px' && getPixel[index].style.height === '40px') {
    } else {
      getPixel[index].style.height = '40px';
      getPixel[index].style.width = '40px';
    }
  }
};

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const localstorageColors = () => {
  const getCollor = document.querySelectorAll('.color');
  const storageColors = [];
  for (let index = 0; index < getCollor.length; index += 1) {
    storageColors.push(getCollor[index].style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(storageColors));
    colorSelected();
};

const colorPalletePaint = () => {
  const getColorPallete = document.querySelectorAll('.color');
  getColorPallete[0].style.backgroundColor = 'black';
  for (let i = 1; i < getColorPallete.length; i += 1) {
    getColorPallete[i].style.backgroundColor = randomColor();
    if (randomColor() === 'rgb(0, 0, 0)') {
      getColorPallete[i].style.backgroundColor = randomColor();
    }
  }
  localstorageColors();

};

const colorSelected = () => {
  const getColorPallete = document.querySelectorAll('.color');
  for (let i = 0; i < getColorPallete.length; i += 1) {
    getColorPallete[0].addEventListener('click', () => {
        getColorPallete[i].classList.remove('selected');
        getColorPallete[0].classList.add('selected');
        whenCliked();
      });
    getColorPallete[1].addEventListener('click', () => {
      getColorPallete[i].classList.remove('selected');
      getColorPallete[1].classList.add('selected');
      whenCliked();
    });
    getColorPallete[2].addEventListener('click', () => {
      getColorPallete[i].classList.remove('selected');
      getColorPallete[2].classList.add('selected');
      whenCliked();
    });
    getColorPallete[3].addEventListener('click', () => {
      getColorPallete[i].classList.remove('selected');
      getColorPallete[3].classList.add('selected');
      whenCliked();
    });
  }
};

const colorPalletePaintStorage = () => {
  const getColorPallete = document.querySelectorAll('.color');
  getColorPallete[0].className += ' selected';
  const getStorageColorPallet = JSON.parse(localStorage.getItem('colorPalette'));
  for (let i = 0; i < getColorPallete.length; i += 1) {
    getColorPallete[i].style.backgroundColor = getStorageColorPallet[i];
  }
};

const verifyClassColor = () =>{
  const getColorPallete = document.querySelectorAll('.color');
  const classVerify = getColorPallete[0].classList.contains('selected');
  if (classVerify === false) {
    getColorPallete[0].className += ' selected';
  }
};

const storagePixels = () => {
  const getPixels = document.querySelectorAll('.pixel');
  let paintPixels = [];
  for (let index = 0; index < getPixels.length; index += 1) {
    if (getPixels[index].style.backgroundColor === null || getPixels[index].style.backgroundColor === 'white') {
      paintPixels.push(getPixels[index].style.backgroundColor = 'white');
    } else {
      paintPixels.push(getPixels[index].style.backgroundColor)
    }
  }
  localStorage.setItem('pixelBoard', JSON.stringify(paintPixels));
};

const colorPixelsPaintStorage = () => {
  const getPixel = document.querySelectorAll('.pixel');
  const getStoragePixel = JSON.parse(localStorage.getItem('pixelBoard'));
  if (getStoragePixel !== null) {
    for (let i = 0; i < getPixel.length; i += 1) {
      getPixel[i].style.backgroundColor = getStoragePixel[i];
    }
  }
};

const whenCliked = () => {
  const getColorSelected = document.querySelectorAll('.selected');
  const getPixels = document.querySelectorAll('.pixel');
  let selectedColors = [];
  selectedColors.push(getColorSelected[0].style.backgroundColor);
  for (let index = 0; index < getPixels.length; index += 1) {
    getPixels[index].addEventListener('click', () => {
      getPixels[index].style.backgroundColor = selectedColors[0];
      storagePixels();
    });
  }
};



const generateNewColor = () => {
  const capButton = document.querySelector('#button-random-color');
  capButton.addEventListener('click', colorPalletePaint);
};

const clearAllButton = () => {
  const getClearButton= document.querySelector('#clear-board');
  const getPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < getPixels.length; index += 1) {
    getClearButton.addEventListener('click', () => {
      getPixels[index].style.backgroundColor = 'white';
      storagePixels();
    });
  }
};

window.onload = () => {
  createDivsPallete();
  if (localStorage.getItem('colorPalette') === null) {
    colorPalletePaint();
  } else {
    colorPalletePaintStorage();
  }
  generateNewColor();
  createGrid();
  blankVerify();
  verifyClassColor();
  colorSelected();
  whenCliked();
  clearAllButton();
  colorPixelsPaintStorage();
};
