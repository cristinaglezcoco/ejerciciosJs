/*Usa un bucle para recorrer el array de peliculas (`movies`) 
y añade al array `goodProducts` los que tengan más de 20 ventas (`sellCount`) 
y al array `badProducts` los que tengan menos. */

const goodProducts = [];
const badProducts = [];
const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}];

for(i = 0; i < products.length; i++) {
    if(products[i].sellCount > 20) {
        goodProducts.push(products[i]);
    } else {
        badProducts.push(products[i]);
    }
};

console.log(goodProducts);
console.log(badProducts);
