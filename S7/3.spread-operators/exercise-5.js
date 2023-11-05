const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

let colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)]; // de esta manera creas la copia directamente sin el elemento 2

console.log(colorsCopy);


/* Otra manera para eliminar el elemento que te piden, te creas la copia y después eliminas: Héctor
let colors2 = [...colors];
colors2.splice(2, 1);
console.log(colors2);
*/