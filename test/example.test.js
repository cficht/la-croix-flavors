// IMPORT MODULES under test here:
import renderDrink from '../products/render-drink.js';
import flavors from '../data/flavors.js';

const test = QUnit.test;

test('check static design against product list and render function', function(assert) {

    const inputPure = flavors[4];
    const outputPure = (renderDrink(inputPure)).outerHTML;
    
    const HTMLPure = '<li class=\"flavor-box\"><h3>Pure</h3><img src="../assets/pure.png" alt="As bland as it gets." height="100" width="50"><p>Cost: $0.69</p><button value="pure">Add</button></li>';

    assert.equal(outputPure, HTMLPure);
});
