import flavors from '../data/flavors.js';
import selectedProducts from '../data/cart.js';
import { findById, calcOrderItem } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const shoppingTable = document.getElementById('shopping-table-body');
const shoppingTableTotal = document.getElementById('shopping-table-total');

for (let i = 0; i < selectedProducts.length; i++) {
    const selectedProduct = selectedProducts[i];
    const cartToInventory = findById(selectedProduct.id, flavors);
    const renderCartItem = renderLineItem(cartToInventory, selectedProduct);
    shoppingTable.appendChild(renderCartItem);
    const renderItemTotal = calcOrderItem(selectedProducts, flavors);
    shoppingTableTotal.textContent = `$${renderItemTotal.toFixed(2)}`;
}