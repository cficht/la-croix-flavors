import { flavorGet, flavorSet } from '../common/product-api.js';
import renderDrink from './render-drink.js';

let jsonFlavorListGET = flavorGet();
flavorSet(jsonFlavorListGET);

const drinkList = document.getElementById('drink-list');
const proceedButton = document.getElementById('proceed-button');

for (let i = 0; i < jsonFlavorListGET.length; i++) {
    const flavor = jsonFlavorListGET[i];
    const renderedFlavor = renderDrink(flavor);
    drinkList.appendChild(renderedFlavor);
}


proceedButton.addEventListener('click', () => {
    window.location.replace('../shopping-cart');
});

