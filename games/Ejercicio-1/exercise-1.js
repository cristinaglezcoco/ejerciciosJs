let cardArray = [
    {
      id: 1,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 2,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 3,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 4,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 5,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 6,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
    {
      id: 7,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 8,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 9,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 10,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 11,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 12,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
  ];

const myTick = 'public/exercise-1/tick.svg';
const mainDiv$$ = document.querySelector('.b-grid');
let score = 0;
let attempts = 0;

for(let card of cardArray) {
    const cardsDiv$$ = document.createElement('div');
    cardsDiv$$.classList.add('cardsDiv');
    //evento al cliclar el div se muestran la imagen
    cardsDiv$$.addEventListener('click', showImg);

    const img$$ = document.createElement('img');
    img$$.src = card.img;
    img$$.alt = card.name;
    img$$.classList.add('hidden');
    img$$.setAttribute('data-img', card.name);
    img$$.setAttribute('data-id', card.id);
    cardsDiv$$.appendChild(img$$);

    mainDiv$$.appendChild(cardsDiv$$);
}


let firstImg$$ = null;
const okImages = [];
function showImg() {
  const img$$ = this.querySelector('img');
  const imgId = img$$.getAttribute('data-id');
  if(!okImages.includes(imgId)) {
    img$$.classList.remove('hidden');

    if(firstImg$$ === null) {
      firstImg$$ = img$$;
    } else {
      const firstImgId = firstImg$$.getAttribute('data-id');
      if(firstImgId !== imgId){
        checkImages(firstImg$$, img$$);
        firstImg$$ = null;
      }   
    }
  } 
}  

function checkImages(firstImg$$, secondImg$$) {
    const firstImg = firstImg$$.getAttribute('data-img');
    const secondImg = secondImg$$.getAttribute('data-img');
    if(firstImg === secondImg) { //fuera del timeout para que se haga instantaneamente (el push al array)
        const firstImgId = firstImg$$.getAttribute('data-id');
        const secondImgId = secondImg$$.getAttribute('data-id');
        okImages.push(firstImgId); 
        okImages.push(secondImgId);

        score++;
        updateScore();
        if(okImages.length === cardArray.length) {
          setTimeout(function() {
            alert('Felicidades, has ganado!!')
          }, 350); 
        }
    }

    attempts++;
    updateAttempts();

    setTimeout(function() {
      if(firstImg === secondImg) {
        firstImg$$.src = myTick;
        secondImg$$.src = myTick;
            
      } else {
        firstImg$$.classList.add('hidden');
        secondImg$$.classList.add('hidden');
      }
    }, 250); 
}

function updateScore ()  {
  const totalScore = document.querySelector('[data-function="score"]');
  totalScore.textContent = score;
}

function updateAttempts ()  {
  const totalAttempts = document.querySelector('[data-function="attempts"]');
  totalAttempts.textContent = attempts;
}


