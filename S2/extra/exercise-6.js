let players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array, index1, index2) {
    let changePlayers = array[index1];
    array[index1] = array[index2];
    array[index2] = changePlayers;

    return array;
}

console.log(swap(players, 1, 3));