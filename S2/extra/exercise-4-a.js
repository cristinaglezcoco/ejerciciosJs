function findArrayIndex(array, text) {
    for(i = 0; i < array.length; i++) {
        if(array[i] === text) {
            return i;
        }
    }
}


let arrayAnimals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
let textAnimal = "Salamandra";

console.log(findArrayIndex(arrayAnimals, textAnimal));
