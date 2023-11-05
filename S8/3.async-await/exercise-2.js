async function getCharacters () {
    await fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(characters => console.log(characters));
}

getCharacters();