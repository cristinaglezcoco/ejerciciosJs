const baseUrl = 'https://api.nationalize.io?name=';

const input$$ = document.querySelector('input');
const btn$$ = document.querySelector('button');
btn$$.addEventListener('click', listenApi); //botón hace click y escucha a la función listenApi, la cual ya tiene dentro la funcion donde está el fetch


function listenApi() { // funcion que escucha a la funcion fetchApi
  if(input$$.value !== '') {
    const apiUrl = baseUrl + input$$.value;
    fetchApi(apiUrl)
  } else {
    console.log('Introduzca un nombre')
  }
}

function fetchApi(apiUrl) { // función donde se integra el fetch
fetch(apiUrl)
  .then((response) => {
      return response.json();
  })
  .then((myJson) => {
      console.log(myJson);
  })
  .catch((error) => {
    console.error(error);
  });
}

/*hector
const baseUrl = 'https://api.nationalize.io?name=';
const btn$$ = document.querySelector('button');

async function listenApi() {
  const input$$ = document.querySelector('input');
  const value = input$$.value;
  const response = await fetch(baseUrl + value) es la suma de la api con el valor del input
  consr json = await response.json();
  return json;

} */
