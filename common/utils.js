export function findById(inputId, inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        const individualArray = inputArray[i];
        if (inputId === individualArray.id) {
            return individualArray;
        }
    }
}

export function calcLineItem(quantity, itemPrice) {
    const calculateItems = quantity * itemPrice;
    const roundCalculation = Math.round(calculateItems * 100) / 100;
    return roundCalculation;
}