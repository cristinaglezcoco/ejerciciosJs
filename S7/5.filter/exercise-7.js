const streamers = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let input$$ = document.querySelector('input');
input$$.addEventListener('input', filterStreamers);

function filterStreamers() {
    let valueInput = input$$.value; // si pusieras this.value valdría para todos los inputs que tuvieras

    const filteredStreamers = streamers.filter(function(streamer) {
        return streamer.name.includes(valueInput);
    });


    console.log(filteredStreamers);    
}