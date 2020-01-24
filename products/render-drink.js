import { findById } from '../common/utils.js';
//import flavors from '../data/flavors.js';

function renderDrink(theFlavor) {
    const flavorLi = document.createElement('li');
    flavorLi.className = 'flavor-box';

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

    flavorButton.addEventListener('click', () => {

        const jsonCart = localStorage.getItem('cart');
        let browserCart;

        if (jsonCart) {
            browserCart = JSON.parse(jsonCart);
        } else {
            browserCart = [];
        }

        const matchCheck = findById(theFlavor.id, browserCart);

        if (!matchCheck) {
            let matchCheck = {
                id: theFlavor.id,
                quantity: 1
            };
            browserCart.push(matchCheck);
        } else {
            matchCheck.quantity++;
        }

        const jsonLineItem = JSON.stringify(browserCart);
        localStorage.setItem('cart', jsonLineItem);

    });

    return flavorLi;
}

export default renderDrink;





