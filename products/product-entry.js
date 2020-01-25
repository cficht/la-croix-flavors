import { flavorGet, flavorSet, addProduct, removeProduct } from '../common/utils.js';
import renderDrink from './render-drink.js';

const drinkList = document.getElementById('drink-list');
const productAddButton = document.getElementById('product-add-button');

let jsonFlavorListGET = flavorGet();
flavorSet(jsonFlavorListGET);

for (let i = 0; i < jsonFlavorListGET.length; i++) {
    const flavor = jsonFlavorListGET[i];
    const renderedFlavor = renderDrink(flavor);
    addRemoveButton(flavor, renderedFlavor);
    drinkList.appendChild(renderedFlavor);
}

removeProduct();

productAddButton.addEventListener('click', (e) => {
    e.preventDefault();

    const formEntry = document.querySelector('form');
    const formData = new FormData(formEntry);
    formEntry.reset();

    const newProductObject = {
        id: formData.get('id'),
        name: formData.get('name'),
        image: formData.get('image'),
        description: formData.get('description'),
        category: formData.get('category'),
        price: Number(formData.get('price'))
    };

    const processedProduct = addProduct(newProductObject);
    addRemoveButton(newProductObject, processedProduct);
    drinkList.appendChild(processedProduct); 
});

function addRemoveButton(flavor, renderedFlavor) {
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.name = flavor.id;
    removeButton.className = 'remove-button';
    renderedFlavor.appendChild(removeButton);
}

