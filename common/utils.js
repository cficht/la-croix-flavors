// import flavors from '../data/flavors.js';
// import renderDrink from '../products/render-drink.js';

export function findById(inputId, inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        const individualFromArray = inputArray[i];
        if (inputId === individualFromArray.id) {
            return individualFromArray;
        }
    }
}

export function calcLineItem(quantity, itemPrice) {
    const calculateItems = quantity * itemPrice;
    const roundCalculation = (Math.round(calculateItems * 100) / 100);
    return roundCalculation;
}

export function calcOrderItem(cartArray, productArray) {
    let itemTotal = 0;
    for (let i = 0; i < cartArray.length; i++) {
        const currentCart = cartArray[i];
        const matchId = findById(currentCart.id, productArray);
        itemTotal = itemTotal + calcLineItem(currentCart.quantity, matchId.price);
    }
    return (Math.round(itemTotal * 100) / 100);
}


// export function flavorGet() {
//     let jsonFlavorListGET = JSON.parse(localStorage.getItem('flavorlist'));
//     if (!jsonFlavorListGET) {
//         jsonFlavorListGET = flavors;
//     }
//     return jsonFlavorListGET;
// }

// export function flavorSet(jsonFlavorListGET) {
//     let jsonFlavorListSET = JSON.stringify(jsonFlavorListGET);
//     localStorage.setItem('flavorlist', jsonFlavorListSET);
// }



// export function addProduct(newProductObject) {
//     let jsonFlavorListGET = flavorGet();
//     jsonFlavorListGET.push(newProductObject);
//     flavorSet(jsonFlavorListGET);
//     const renderedFlavor = renderDrink(newProductObject);
//     return renderedFlavor;
// }

// export function removeProduct() {
//     let jsonFlavorListGET = flavorGet();
//     const removeButtons = document.getElementsByClassName('remove-button');
//     for (let i = 0; i < removeButtons.length; i++) {
//         removeButtons[i].addEventListener('click', () => {
//             jsonFlavorListGET.splice(i, 1);
//             flavorSet(jsonFlavorListGET);
//             location.reload();
//         });
//     }
// }
