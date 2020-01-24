import flavors from '../data/flavors.js';
import selectedProducts from '../data/cart.js';
import { findById, calcOrderItem } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const shoppingTable = document.getElementById('shopping-table-body');
const shoppingTableTotal = document.getElementById('shopping-table-total');

const jsonCart = JSON.parse(localStorage.getItem('cart'));
let storedCart;

if (jsonCart) {
    storedCart = jsonCart;
} else {
    storedCart = [];
}

// run through all items in cart
for (let i = 0; i < storedCart.length; i++) {

    // grab item from cart and find the corresponding product
    const selectedProduct = storedCart[i];
    const cartToInventory = findById(selectedProduct.id, flavors);

    // create DOM for the cart item and append it to the table
    const renderCartItem = renderLineItem(cartToInventory, selectedProduct);
    shoppingTable.appendChild(renderCartItem);

    // calculate order total and append it to the table
    const renderItemTotal = calcOrderItem(storedCart, flavors);
    shoppingTableTotal.textContent = `$${renderItemTotal.toFixed(2)}`;
}