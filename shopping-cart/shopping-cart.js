import { flavorGet, flavorSet } from '../common/utils.js';
import { findById, calcOrderItem } from '../common/utils.js';
import renderLineItem from './render-line-item.js';
import { getCart, clearCart } from '../common/cart-api.js';

const shoppingTable = document.getElementById('shopping-table-body');
const shoppingTableTotal = document.getElementById('shopping-table-total');
const orderButton = document.getElementById('order-button');

let jsonFlavorListGET = flavorGet();
flavorSet(jsonFlavorListGET);

let storedCart = getCart();

if (storedCart.length === 0) {
    orderButton.disabled = true;
}

// run through all items in cart
for (let i = 0; i < storedCart.length; i++) {

    // grab item from cart and find the corresponding product
    const selectedProduct = storedCart[i];
    const cartToInventory = findById(selectedProduct.id, jsonFlavorListGET);

    // create DOM for the cart item and append it to the table
    const renderCartItem = renderLineItem(cartToInventory, selectedProduct);
    shoppingTable.appendChild(renderCartItem);

    // calculate order total and append it to the table
    const renderItemTotal = calcOrderItem(storedCart, jsonFlavorListGET);
    shoppingTableTotal.textContent = `$${renderItemTotal.toFixed(2)}`;
}

orderButton.addEventListener('click', () => {
    const stringCart = JSON.stringify(storedCart, true, 2);
    alert(stringCart);
    clearCart();
    window.location.replace('../');
});