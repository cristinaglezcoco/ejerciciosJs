const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let soundsCounter = {};

for(let user of users) {
    for(sound in user.favoritesSounds) {
        if(!soundsCounter.hasOwnProperty(sound)) {
            soundsCounter[sound] = 0;
        }
        soundsCounter[sound] += 1;
     }
}

console.log(soundsCounter);

// let countOfWaves = 0;
// let countOfRain = 0;
// let countOfFirecamp = 0;
// let countOfShower = 0;
// let countOfTrain = 0;
// let countOfWind = 0;

// for(let user of users) {
//     for(nameOfSounds in user.favoritesSounds) {
//         if(nameOfSounds.includes("waves")) {
//             countOfWaves++;
//         } else if(nameOfSounds.includes("train")) {
//             countOfTrain++;
//         } else if(nameOfSounds.includes("firecamp")) {
//             countOfFirecamp++;
//         } else if(nameOfSounds.includes("shower")) {
//             countOfShower++;
//         } else if(nameOfSounds.includes("rain")) {
//             countOfRain++;
//         } else if(nameOfSounds.includes("wind")) {
//             countOfWind++;
//         }
//     }
// }

// console.log(countOfWaves);
// console.log(countOfRain);
// console.log(countOfFirecamp);
// console.log(countOfShower);
// console.log(countOfTrain);
// console.log(countOfWind);