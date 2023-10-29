const streamers = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let myInput = document.querySelector('input');
let myBtn = document.querySelector('button');

myBtn.addEventListener('click', filterStreamers);

function filterStreamers() {
    let valueInput = myInput.value;
    const filteredStreamers = streamers.filter(function(streamer) {
        return streamer.name.includes(valueInput); 
    });


    console.log(filteredStreamers);    
}