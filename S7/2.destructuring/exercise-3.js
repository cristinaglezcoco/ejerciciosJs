const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const {name: animalName, race} = animalFunction(); // con los dos puntos agregas una varibale

console.log(animalName);
console.log(race);
