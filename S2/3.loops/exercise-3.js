const placesToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}]

for(let i = 0; i < placesToTravel.length; i++) {
        console.log(placesToTravel[i].name); //para ver en que elementos reitira, y no lo hace sobre Murcia, por eso el i--; para que el indice vuelva a la anterior posicion
    if(placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
        placesToTravel.splice(i, 1);
        i--;
    }
    
}

console.log(placesToTravel);
