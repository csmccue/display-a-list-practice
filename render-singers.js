export function renderSingers(item) {
    const div = document.createElement('div');
    div.textContent = 'Great Singers';
    for (const thing of item) {
        const NameEl = document.createElement('h2');
        NameEl.textContent = thing.name;

        const songsEl = document.createElement('h2');
        songsEl.textContent = thing.songs[1];

        const yearEl = document.createElement('h2');
        yearEl.textContent = thing.born;

        const countryEl = document.createElement('h2');
        countryEl.textContent = thing.country;  

        const recordsEl = document.createElement('h2');
        recordsEl.textContent = thing.records;  

        div.classList.add('singer-item');
        div.append(NameEl, songsEl, yearEl, countryEl, recordsEl);   
    }
    return div;
}