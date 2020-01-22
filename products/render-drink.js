//import flavors from '../data/flavors.js';

function renderDrink(theFlavor) {
    const flavorLi = document.createElement('li');

    const flavorName = document.createElement('h3');
    flavorName.textContent = theFlavor.name;
    flavorLi.appendChild(flavorName);

    const flavorImg = document.createElement('img');
    flavorImg.src = `../assets/${theFlavor.image}`;
    flavorImg.alt = theFlavor.description;
    flavorImg.height = '100';
    flavorImg.width = '50';
    flavorLi.appendChild(flavorImg);

    const flavorCost = document.createElement('p');
    flavorCost.textContent = `Cost: $${theFlavor.price.toFixed(2)}`;
    flavorLi.appendChild(flavorCost);

    const flavorButton = document.createElement('button');
    flavorButton.value = theFlavor.id;
    flavorButton.textContent = 'Add';
    flavorLi.appendChild(flavorButton);

    return flavorLi;
}

export default renderDrink;





