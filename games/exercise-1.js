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


const mainDiv$$ = document.querySelector('.b-grid');
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
function showImg() {
   const img$$ = this.querySelector('img');
   img$$.classList.remove('hidden');

   if(firstImg$$ === null) {
    firstImg$$ = img$$;
   }  else {
    const firstImgId = firstImg$$.getAttribute('data-id');
    const secondImgId = img$$.getAttribute('data-id');
    if(firstImgId !== secondImgId)
    checkImages(firstImg$$, img$$);
    firstImg$$ = null;
   }
}

let imgTick = 'public/exercise-1/tick.svg';

function checkImages(firstImg$$, secondImg$$) {
    const firstImg = firstImg$$.getAttribute('data-img');
    const secondImg = secondImg$$.getAttribute('data-img');

    setTimeout(function(){

        if(firstImg$$ === secondImg$$) {
           //que salga la imagen del tick y que no se vuelvan a esconder

            
        } else {
            firstImg$$.classList.add('hidden');
            secondImg$$.classList.add('hidden');
        }
    }, 250)
    
}
