const imageGrid = document.getElementById('image__grid')

for (let i = 0; i < 49; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    imageGrid.appendChild(square)
} 

const headerGrid = document.getElementById('header__grid')

for (let i = 0; i < 25; i++) {
    const square = document.createElement('div')
    square.classList.add('header__square')
    headerGrid.appendChild(square)
} 
