let newDiv = document.createElement('div');
let newText = document.createElement('p');
newDiv.appendChild(newText);
document.body.appendChild(newDiv);

console.log(document.body.appendChild(newDiv));