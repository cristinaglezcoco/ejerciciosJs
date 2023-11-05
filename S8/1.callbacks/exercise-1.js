const numbersList = [];

function sum(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function father(a, b, callback){ 
    const result = callback(a, b);
    numbersList.push(result); //porque result es la variable donde metemos el callback con los parametros a y b
}

father(2, 7, sum); //en los console.log sum o substract es el parametro de callback puesto en la funcion father y los numeros las letas a y b
father(8, 4, substract);
father(4, 9, sum);
father(12, 3, substract);

console.log(numbersList);
