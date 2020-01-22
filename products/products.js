import flavors from '../data/flavors.js';

import renderDrink from './render-drink.js';

for (let i = 0; i < flavors.length; i++) {
    renderDrink(flavors[i]);
}
