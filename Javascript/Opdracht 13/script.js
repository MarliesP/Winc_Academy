const name = prompt('Hallo gast, welkom we gaan een spelletje spelen, maar eerst: wat is jou naam?', 'Hans');

alert(`Hi ${name}, klaar om een spelletje te spelen?`);

let minGetal = prompt(`Ok, ${name}, kies nu de range van getallen, eerst het minimum getal.`);
const MIN = parseFloat(minGetal);

let maxGetal = prompt(`Goede keus ${name}, en dan nu het max getal.`);
const MAX = parseFloat(maxGetal);

let randomNummer = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let guesses = 0;
let hint = ''; 
let nummer = 0;
do {
    let input = prompt(`Raad een getal tussen ${MIN} en ${MAX}` + hint);
    nummer = parseInt(input);
    guesses++;
    if (nummer > randomNummer) {
        hint = ', en kleiner dan ' + nummer;
    } else if (nummer < randomNummer) {
        hint = ', en groter dan ' + nummer;
    } else if(nummer == randomNummer) {
        alert(`Woehoe na ${guesses} keer raden is het gelukt! Gefeliciteerd!`);
    } 
} while (nummer != randomNummer);

alert(`Dag ${name}, het spelletje is afgelopen. Tot de volgende keer.`);






  

