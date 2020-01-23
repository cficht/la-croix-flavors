import flavors from '../data/flavors.js';
import selectedProducts from '../data/cart.js';
import { findById } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const shoppingTable = document.getElementById('shopping-table-body');

for (let i = 0; i < selectedProducts.length; i++) {
    const selectedProduct = selectedProducts[i];
    const cartToInventory = findById(selectedProduct.id, flavors);
    const renderCartItem = renderLineItem(cartToInventory, selectedProduct);
    shoppingTable.appendChild(renderCartItem);


}