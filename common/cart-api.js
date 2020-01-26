import { findById } from './utils.js';

export function getCart() {
    const jsonCart = localStorage.getItem('cart');
    let browserCart;
    if (jsonCart) {
        browserCart = JSON.parse(jsonCart);
    }
    else {
        browserCart = [];
    }
    return browserCart;
}

export function clearCart() {
    localStorage.removeItem('cart');
}

export function addToCart(theFlavor, browserCart, selectedValue) {
    let matchCheck = findById(theFlavor.id, browserCart);
    if (!matchCheck) {
        matchCheck = {
            id: theFlavor.id,
            quantity: Number(selectedValue)
        };
        browserCart.push(matchCheck);
    }
    else {
        matchCheck.quantity = matchCheck.quantity + Number(selectedValue);
    }
    const jsonLineItem = JSON.stringify(browserCart);
    localStorage.setItem('cart', jsonLineItem);
    return matchCheck.quantity;
}

export function valueOnLoad(theFlavor, browserCart) {
    let matchCheck = findById(theFlavor.id, browserCart);
    if (!matchCheck) {
        return 0;
    }
    const jsonLineItem = JSON.stringify(browserCart);
    localStorage.setItem('cart', jsonLineItem);
    return matchCheck.quantity;
}