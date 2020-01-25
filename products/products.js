import flavors from '../data/flavors.js';
import renderDrink from './render-drink.js';

const drinkList = document.getElementById('drink-list');
const proceedButton = document.getElementById('proceed-button');

for (let i = 0; i < flavors.length; i++) {
    const flavor = flavors[i];
    const renderedFlavor = renderDrink(flavor);
    drinkList.appendChild(renderedFlavor);
}


proceedButton.addEventListener('click', () => {
    window.location.replace('../shopping-cart');


});

