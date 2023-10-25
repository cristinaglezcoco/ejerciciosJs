let list = document.createElement('ul');
document.body.appendChild(list);


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
for(i = 0; i < apps.length; i++) {
    let itemsList = document.createElement('li');
    list.appendChild(itemsList);

    let textItemsList = document.createTextNode(apps[i]);
    itemsList.appendChild(textItemsList);
}

