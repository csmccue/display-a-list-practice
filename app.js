// import functions and grab DOM elements
import { renderGroceries } from './render-groceries.js';
import { groceries } from './groceries.js';
// initialize global state
const groceryListEl = document.getElementById('grocery-list-container');
const showGroceryListButton = document.getElementById('grocery-list');

let pastList = [];

// set event listeners 
// showGroceryListButton.addEventListener('click', () => {
//     pastList.textContent = '';
//     pastList.push(groceries);
//     for (let thing of pastList) {
//         console.log(thing);
//         //render list
//         const listEl = renderGroceries(thing);
//         //append list
//         groceryListEl.append(listEl);
//     }
//     pastList = [];
// });

async function displayPosts() {
    const listEls = renderGroceries(groceries);
    groceryListEl.append(listEls);
}

displayPosts();
