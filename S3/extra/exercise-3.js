const cars = ['Mazda 6', 'Ford fiesta', 
'Audi A4', 'Toyota corola'];

const miDiv = document.querySelector('[data-function = printHere]');
const list = document.createElement('ul');
miDiv.appendChild(list);

for(let car of cars) {
    let itemsList = document.createElement('li');
    list.appendChild(itemsList);
    itemsList.textContent = car;
};