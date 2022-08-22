export function renderCars(item) {
    const div = document.createElement('div');
    div.textContent = 'List Of Cars';
    for (const thing of item) {
        const NameEl = document.createElement('h2');
        NameEl.textContent = thing.name;
        const yearEl = document.createElement('h2');
        yearEl.textContent = thing.stats.year;
        const makeEl = document.createElement('h2');
        makeEl.textContent = thing.stats.make;
        const modelEl = document.createElement('h2');
        modelEl.textContent = thing.stats.model;



        const milesEl = document.createElement('h2');
        milesEl.textContent = thing.miles;

        const colorEl = document.createElement('h2');
        colorEl.textContent = thing.color;

        const typeEl = document.createElement('h2');
        typeEl.textContent = thing.type;  

        div.classList.add('cars-item');
        div.append(NameEl, yearEl, makeEl, modelEl, milesEl, colorEl, typeEl);   
    }
    return div;
}