import { flavorGet, flavorSet, flavorReset, addProduct, removeProduct, addRemoveButton } from '../common/product-api.js';
import { clearCart } from '../common/cart-api.js';
import { checkForm } from '../common/utils.js';
import renderDrink from './render-drink.js';

const drinkList = document.getElementById('drink-list');
const productAddButton = document.getElementById('product-add-button');
const productResetButton = document.getElementById('reset-button');

let jsonFlavorListGET = flavorGet();
flavorSet(jsonFlavorListGET);
clearCart();

jsonFlavorListGET.forEach(flavor => {
    const renderedFlavor = renderDrink(flavor);
    addRemoveButton(flavor, renderedFlavor);
    drinkList.appendChild(renderedFlavor);
});

// adds event listener to the remove product buttons on load
removeProduct();

// add new product if the form is filled out correctly
productAddButton.addEventListener('click', (e) => {
    e.preventDefault();

    const formEntry = document.querySelector('form');

    checkForm(formEntry);
    if (!checkForm(formEntry)) {
        alert('Form is missing data');
        return;
    }

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

    // adds event listener to the new product's remove buttons
    removeProduct();
});

// restore the products to the original list
productResetButton.addEventListener('click', () => {
    flavorReset();
    location.reload();
});