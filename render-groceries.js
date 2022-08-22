export function renderGroceries(item) {
    const div = document.createElement('div');
    div.textContent = 'Grocery List';
    for (const thing of item) {
        const groceryItemEl = document.createElement('h2');
        groceryItemEl.textContent = thing;
        groceryItemEl.classList.add('grocery-item');
        div.append(groceryItemEl);   
    }
    return div;
}