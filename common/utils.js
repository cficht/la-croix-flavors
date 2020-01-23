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