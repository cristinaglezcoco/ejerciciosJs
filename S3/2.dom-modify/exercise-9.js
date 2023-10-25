let selectedDivs = document.querySelectorAll('.fn-insert-here');

for(let div of selectedDivs) {
    let text = document.createElement('p');
    text.textContent = 'Voy en medio!';
    div.appendChild(text);
}