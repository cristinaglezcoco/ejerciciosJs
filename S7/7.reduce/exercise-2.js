const exams = [
    {name: 'Abel Cabeza Román', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const passedExams = exams.reduce(function(acc, exam) {
    if (exam.score >= 5) {
        return acc + exam.score;
    } else {
        return acc; // el else es para el resto de numero y ponemos solo el acc para que no sume más cosas, y se quede con el acc del 1º if
    }
}, 0);

console.log(passedExams);