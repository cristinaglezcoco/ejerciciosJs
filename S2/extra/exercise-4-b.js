function findArrayIndex(array, text) {
    for(i = 0; i < array.length; i++) {
        if(array[i] === text) {
            return i;
        }
    }
    return "There is no coincidences";
}

let arrayAnimals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
let textAnimal = "Mosquito";

console.log(findArrayIndex(arrayAnimals, textAnimal));

function removeItem(array, text) {
    const index = findArrayIndex(array, text)
    if(index !== "There is no coincidences") {
        array.splice(index, 1);
    }
    return array;
}

console.log(removeItem(arrayAnimals, textAnimal));