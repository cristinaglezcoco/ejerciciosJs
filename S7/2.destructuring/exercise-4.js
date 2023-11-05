const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name: carName, itv} = car;
console.log(carName);
console.log(itv);

const [year1, year2, year3] = itv;
console.log(year1);
console.log(year2);
console.log(year3);
