import { flavorGet, flavorSet, flavorReset, addProduct, removeProduct } from '../common/product-api.js';
import { clearCart } from '../common/cart-api.js';
import renderDrink from './render-drink.js';

const drinkList = document.getElementById('drink-list');
const productAddButton = document.getElementById('product-add-button');
const productResetButton = document.getElementById('reset-button');

let jsonFlavorListGET = flavorGet();
flavorSet(jsonFlavorListGET);
clearCart();

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
    removeProduct();
});

productResetButton.addEventListener('click', () => {
    flavorReset();
    location.reload();
});



function addRemoveButton(flavor, renderedFlavor) {
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.name = flavor.id;
    removeButton.className = 'remove-button';
    renderedFlavor.appendChild(removeButton);
}

function checkForm(form) {
    const inputs = form.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === ''){         
            return false;
        }
    }
    return true;
}