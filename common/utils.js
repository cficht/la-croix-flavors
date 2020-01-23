export function findById(inputId, inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        const individualArray = inputArray[i];
        if (inputId === individualArray.id) {
            return individualArray;
        }
    }
}
