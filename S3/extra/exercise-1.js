const list = document.createElement('ul');
console.log(document.body.appendChild(list));

const countries = ['Japón', 'Nicaragua', 
'Suiza', 'Australia', 'Venezuela'];

for(let countrie of countries) {
    let itemsList = document.createElement('li');
    list.appendChild(itemsList);

    itemsList.textContent = countrie;

    console.log(itemsList);
};