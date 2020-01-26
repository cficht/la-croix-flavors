import { addProduct, flavorGet } from '../common/product-api.js';

const test = QUnit.test;

test('add a product, then retrieve all the products and assert equal the last item in the array and the supplied new product', function(assert) {
    const productToAdd = {
        id: 'superlemon',
        name: 'Super Lemon',
        image: 'http://placekitten.com/200/300',
        description: 'Sourest.',
        category: 'drink',
        price: 1.00
    };
    
    addProduct(productToAdd);
    const arrayWithNewProduct = flavorGet();
    const lastItemInArray = arrayWithNewProduct[arrayWithNewProduct.length - 1];

    assert.deepEqual(lastItemInArray, productToAdd);
});
