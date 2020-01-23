import { findById } from '../common/utils.js';
import flavors from '../data/flavors.js';

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


