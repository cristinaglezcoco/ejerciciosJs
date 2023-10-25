let newDiv = document.createElement('div');

for(i = 0; i < 6; i++) {
    let newText = document.createElement('p'); //crear 6 <p> 
    newDiv.appendChild(newText); //todas las <p> vayan dentro del div
}

document.body.appendChild(newDiv); // podría ir dentro del for?
