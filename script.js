const createDivsPallet = () => {
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

window.onload = () => {
  createDivsPallet();
};
