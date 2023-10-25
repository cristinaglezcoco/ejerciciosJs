/* Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. 
Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante. */

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},
{name: "Salmon", isVegan: false}, 
{name: "Tofu", isVegan: true}, 
{name: "Burger", isVegan: false}, 
{name: "Rice", isVegan: true}, 
{name: "Pasta", isVegan: true}];

let fruitsIndex = 0;

for(let i = 0; i < foodSchedule.length; i++) {
    if(foodSchedule[i].isVegan === false) {
        foodSchedule[i].name = fruits[fruitsIndex];
        foodSchedule[i].isVegan = true;
        fruitsIndex++;
    }
};

console.log(fruits);
console.log(foodSchedule);