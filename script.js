const container = document.querySelector('.sketch-container');


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


grid(16);


