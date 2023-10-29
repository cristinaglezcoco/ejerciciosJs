const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const evenNumber = ages.filter (function(age) {
    return (age % 2 === 0);
});

console.log(evenNumber);

// arrow function const evenNumber = ages.filter(age => age % 2 === 0);