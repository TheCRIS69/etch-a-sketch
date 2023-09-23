const container = document.querySelector('.sketch-container');
const slider = document.querySelector('#dimension-selection');
const sliderValue = document.querySelector('#dimension');

function grid(dimension) {
    for (let i = 1; i <= dimension; i++) {
        const flexGroup = document.createElement('div');
        container.appendChild(flexGroup);
        flexGroup.classList.add('flex-group');
        
        for (let j = 1; j <= dimension; j++) {
            const flexElement = document.createElement('div');
            flexGroup.appendChild(flexElement);
            flexElement.style.height = 501 / dimension + 'px';
            flexElement.style.width = 501 / dimension + 'px';
            flexElement.classList.add('flex-element');
        }
    }
}
grid(slider.value);

slider.addEventListener('input', () => {
    let dimension = slider.value;
    sliderValue.textContent = `${dimension}x${dimension}`;

    resetGridElements()
});

function resetGridElements() {
    if (container.lastChild.classList.contains('flex-group')) {
        while (container.hasChildNodes())
            container.removeChild(container.firstChild);
            grid(slider.value);
    }
}

let isMouseDown = false;
container.addEventListener('mousedown', () => {
    isMouseDown = true;
});
document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

const color = document.querySelector('#color-selection');
container.addEventListener('mousemove', drawColor);
container.addEventListener('click', drawColorClick);

function drawColor(e) {
    if (isMouseDown && e.target.classList.contains('flex-element')) {
        e.target.style.backgroundColor = color.value;
    }
}

function drawColorClick(e) {
    if (e.target.classList.contains('flex-element')) {
        e.target.style.backgroundColor = color.value;
    }
}

const clearBtn = document.querySelector('#clear-grid');
clearBtn.addEventListener('click', resetGridElements);



