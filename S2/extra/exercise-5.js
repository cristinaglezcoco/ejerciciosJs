function rollDice (sides) {
    return Math.floor(Math.random() * sides) + 1;
}

console.log(rollDice(6));