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
    const roundCalculation = (Math.round(calculateItems * 100) / 100).toFixed(2);
    return roundCalculation;
}