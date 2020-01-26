import { getCart, addToCart, valueOnLoad } from '../common/cart-api.js';

let browserCart = getCart();
const productAddButton = document.getElementById('product-add-button');

function renderDrink(theFlavor) {
    const flavorLi = document.createElement('li');
    flavorLi.className = 'flavor-box';

    const flavorName = document.createElement('h3');
    flavorName.textContent = theFlavor.name;
    flavorLi.appendChild(flavorName);

    const flavorImg = document.createElement('img');
    flavorImg.src = `${theFlavor.image}`;
    flavorImg.alt = theFlavor.description;
    flavorImg.height = '100';
    flavorImg.width = '50';
    flavorLi.appendChild(flavorImg);

    const flavorCost = document.createElement('p');
    flavorCost.textContent = `Cost: $${theFlavor.price.toFixed(2)}`;
    flavorLi.appendChild(flavorCost);

    if (!productAddButton) {
        const flavorButton = document.createElement('button');
        flavorButton.classList.add('add-button');
        flavorButton.value = theFlavor.id;
        flavorButton.textContent = 'Add';
        flavorLi.appendChild(flavorButton);
    
        let flavorQuantity = document.createElement('select');
        flavorQuantity.name = `${theFlavor.id}-quantity`;
        flavorLi.appendChild(flavorQuantity);
    
        const initialFlavorValue = valueOnLoad(theFlavor, browserCart);
        let currentFlavorValue = document.createElement('p');
        currentFlavorValue.textContent = initialFlavorValue;
        flavorLi.appendChild(currentFlavorValue);
    
        for (let i = 0; i < 5; i++) {
            const quantityOption = document.createElement('option');
            quantityOption.value = i + 1;
            quantityOption.textContent = i + 1;
            flavorQuantity.appendChild(quantityOption);
        }

        flavorButton.addEventListener('click', () => {
            const selectedValue = flavorQuantity.value;
            const flavorUpdate = addToCart(theFlavor, browserCart, selectedValue);
            currentFlavorValue.textContent = flavorUpdate;
        });
    }
    return flavorLi;
}

export default renderDrink;


