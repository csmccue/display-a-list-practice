// import functions and grab DOM elements
import { renderGroceries } from './render-groceries.js';
import { renderShips } from './render-ships.js';
import { renderCars } from './render-cars.js';
import { renderSingers } from './render-singers.js';

import { groceries } from './groceries.js';
import { ships } from './ships.js';
import { cars } from './cars.js';
import { singers } from './singers.js';

const groceryListEl = document.getElementById('grocery-list-container');
const shipListEl = document.getElementById('ship-list-container');
const carsListEl = document.getElementById('car-list-container');
const singersListEl = document.getElementById('singer-list-container');

function displayPosts() {
    const listEls = renderGroceries(groceries);
    groceryListEl.append(listEls);

    const shipEls = renderShips(ships);
    shipListEl.append(shipEls);

    const carsEl = renderCars(cars);
    carsListEl.append(carsEl);

    const singersEl = renderSingers(singers);
    singersListEl.append(singersEl);
}

displayPosts();
