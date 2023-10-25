let paragraph = document.createElement('p');
paragraph.textContent = 'Voy en medio!';

let secondDiv = document.querySelector('div:nth-child(2)')
document.body.insertBefore(paragraph, secondDiv);