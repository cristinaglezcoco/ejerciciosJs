const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const list = document.createElement('ul');
document.body.appendChild(list);

for(let countrie of countries) {
    let miDiv = document.createElement('div');
    list.appendChild(miDiv);

    let title = document.createElement('h4');
    miDiv.appendChild(title);
    title.textContent = countrie.title;
    let picture = document.createElement('img');
    miDiv.appendChild(picture);
    picture.src = countrie.imgUrl;
};