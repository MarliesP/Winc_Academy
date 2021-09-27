/*const color = ['yellow', 'blue', 'red', 'orange'];

let i = 0;

while (i < color.length) {
    console.log(color[i]);
    i++;
};

for (let i =0; i < color.length; i++) {
    console.log(color[i]);
};

color.forEach(color => console.log(color));*/

// while loop neemt 6 regels code in beslag
// for loop neemt 4 regels code in beslag
// forEach loop neemt 2 regels code in beslag

const panda = {
    food: 'brokjes',
    animal: 'cavia',
    boss: 'Marlies',
    place: 'kooi',
    hobby: 'Eten'
};

const entries = Object.entries(panda);
console.log(entries);

Object.entries(panda).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
});