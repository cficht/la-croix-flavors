import { calcLineItem } from '../common/utils.js';

function renderLineItem(cartToInventory, selectedProduct) {
    const productRow = document.createElement('tr');
    productRow.className = 'product-row';

    const productNameTD = document.createElement('td');
    productNameTD.textContent = cartToInventory.name;
    productRow.appendChild(productNameTD); 

    const productQuantityTD = document.createElement('td');
    productQuantityTD.textContent = selectedProduct.quantity;
    productRow.appendChild(productQuantityTD); 

    const productPriceTD = document.createElement('td');
    const productPriceAdjusted = cartToInventory.price.toFixed(2);
    productPriceTD.textContent = `$${productPriceAdjusted}`;
    productRow.appendChild(productPriceTD); 

    const quantityPrice = calcLineItem(selectedProduct.quantity, productPriceAdjusted);

    const productTotalTD = document.createElement('td');
    productTotalTD.textContent = `$${quantityPrice}`;
    productRow.appendChild(productTotalTD); 

    return productRow;
}

export default renderLineItem;

