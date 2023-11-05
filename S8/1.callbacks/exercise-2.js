const userAnwsers = [];

function confirmExample(description){
    return confirm(description);
}

function promptExample(description){
    return prompt(description);
}

function father(description, callback){
    const result = callback(description);
    userAnwsers.push(result);
}

father('Soy nuevo', confirmExample);
father('Dime tu nombre', promptExample);


console.log(userAnwsers);