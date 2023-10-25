const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const list = document.createElement('ul');
document.body.appendChild(list);

for(let country of countries) {
    let miDiv = document.createElement('div');
    list.appendChild(miDiv);

    let title = document.createElement('h4');
    miDiv.appendChild(title);
    title.textContent = country.title;
    let picture = document.createElement('img');
    miDiv.appendChild(picture);
    picture.src = country.imgUrl;
};

const myBtn = document.querySelector('button');
myBtn.addEventListener('click', countryRemove);

function countryRemove() {
    if(countries.length > 0) { //cuando haya más de 0 elementos entonces borra, si hay 0 no.
        countries.pop(); //Borrar el último elemento
        list.removeChild(list.lastChild); // borrar de la lista visual (creada dinamicamente)
    }

    return;
}
