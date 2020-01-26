import flavors from '../data/flavors.js';
import renderDrink from '../products/render-drink.js';

export function flavorGet() {
    let jsonFlavorListGET = JSON.parse(localStorage.getItem('flavorlist'));
    if (!jsonFlavorListGET) {
        jsonFlavorListGET = flavors;
    }
    return jsonFlavorListGET;
}

export function flavorSet(jsonFlavorListGET) {
    let jsonFlavorListSET = JSON.stringify(jsonFlavorListGET);
    localStorage.setItem('flavorlist', jsonFlavorListSET);
}

export function flavorReset() {
    localStorage.removeItem('flavorlist');
}

export function addProduct(newProductObject) {
    let jsonFlavorListGET = flavorGet();
    jsonFlavorListGET.push(newProductObject);
    flavorSet(jsonFlavorListGET);
    const renderedFlavor = renderDrink(newProductObject);
    return renderedFlavor;
}

export function removeProduct() {
    let jsonFlavorListGET = flavorGet();
    const removeButtons = document.getElementsByClassName('remove-button');
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', () => {
            jsonFlavorListGET.splice(i, 1);
            flavorSet(jsonFlavorListGET);
            location.reload();
        });
    }
}