import { flavorGet, flavorSet, addProduct } from '../common/utils.js';
import renderDrink from './render-drink.js';

const drinkList = document.getElementById('drink-list');
const productAddButton = document.getElementById('product-add-button');

let jsonFlavorListGET = flavorGet();
flavorSet(jsonFlavorListGET);


for (let i = 0; i < jsonFlavorListGET.length; i++) {
    const flavor = jsonFlavorListGET[i];
    const renderedFlavor = renderDrink(flavor);
    drinkList.appendChild(renderedFlavor);
}

productAddButton.addEventListener('click', (e) => {
    e.preventDefault();

    const formEntry = document.querySelector('form');
    const formData = new FormData(formEntry);

    const newProductObject = {
        id: formData.get('id'),
        name: formData.get('name'),
        image: formData.get('image'),
        description: formData.get('description'),
        category: formData.get('category'),
        price: Number(formData.get('price'))
    };

    const processedProduct = addProduct(newProductObject);
    drinkList.appendChild(processedProduct);
    
});

