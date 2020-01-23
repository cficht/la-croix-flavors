import { findById, calcLineItem, calcOrderItem } from '../common/utils.js';
import flavors from '../data/flavors.js';
import selectedProducts from '../data/cart.js';

const test = QUnit.test;

test('check if findById function returns coconut from the array', function(assert) {
    const testIdSearch = findById('coconut', flavors);
    const expectedIdSearch = flavors[0];

    assert.equal(testIdSearch, expectedIdSearch);
});

test('check if findById function returns pure from the array', function(assert) {
    const testIdSearch = findById('pure', flavors);
    const expectedIdSearch = flavors[4];

    assert.equal(testIdSearch, expectedIdSearch);
});

test('check if findById function returns null', function(assert) {
    const testIdSearch = findById('apple', flavors);
    const expectedIdSearch = null;

    assert.equal(testIdSearch, expectedIdSearch);
});


test('take quantity of 2 and the price of pure and return the total', function(assert) {
    const inputPrice = flavors[4].price;
    const testCalc = calcLineItem(2, inputPrice);

    const expectedTotal = 1.38;

    assert.equal(testCalc, expectedTotal);
});

test('take quantity of 5 and the price of pamplemousse and return the total', function(assert) {
    const inputPrice = flavors[2].price;
    const testCalc = calcLineItem(5, inputPrice);

    const expectedTotal = 10.00;

    assert.equal(testCalc, expectedTotal);
});

test('take quantity and items from the cart and return the order total', function(assert) {
    const testOrderTotal = calcOrderItem(selectedProducts, flavors);

    const expectedOrderTotal = 35.30;

    assert.equal(testOrderTotal, expectedOrderTotal);
});
