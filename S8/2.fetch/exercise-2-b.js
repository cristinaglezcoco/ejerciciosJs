const baseUrl = 'https://api.nationalize.io?name=';

const btn$$ = document.querySelector('button');
btn$$.addEventListener('click', listenApi);

function listenApi() { 
  if(input$$.value !== '') {
    const apiUrl = baseUrl + input$$.value;
    fetchApi(apiUrl)
  } else {
    console.log('Introduzca un nombre')
  }
}

function fetchApi(apiUrl) {
  fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => { // se recorre en este then porque es donde se recoge la informacion de la api y se manda, en este caso, a la funcion listenApi, que es la que se mete en el botón
        console.log(myJson);
        //console.log(myJson.country); se hace un for..of porque la propiedad country es un array
          for(let countryPosibility of myJson.country) {
            const newP = document.createElement('p');
            newP.textContent = `El nombre ${input$$.value} tiene un ${countryPosibility.probability * 100} porciento de ser de ${countryPosibility.country_id}.`
            document.body.appendChild(newP);
          }
    })
    .catch((error) => {
      console.error(error);
    });
}