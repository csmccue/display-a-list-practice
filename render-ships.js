export function renderShips(item) {
    const div = document.createElement('div');
    div.textContent = 'List Of Ships';
    for (const thing of item) {
        const NameEl = document.createElement('h2');
        NameEl.textContent = thing.name;

        const typeEl = document.createElement('h2');
        typeEl.textContent = thing.type;

        const sizeEl = document.createElement('h2');
        sizeEl.textContent = thing.size;

        const speedEl = document.createElement('h2');
        speedEl.textContent = thing.speed;  

        div.classList.add('ship-item');
        div.append(NameEl, typeEl, sizeEl, speedEl);   
    }
    return div;
}