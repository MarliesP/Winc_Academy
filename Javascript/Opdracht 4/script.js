const age = 25;
const isFemale = true;
const driverStatus = 'Bob';
const firstName = 'Bram';
const totalAmount = 25;

if (age >= 18) {
    console.log("Je bent welkom");
} else {
    console.log("Je bent te jong!")
};


if (isFemale == true) {
    console.log("You're welcome")
} else {
    console.log("No party for you tonight")
};


if (driverStatus == 'Bob') {
    console.log('You are Bob and are allowed to take your friends save home, good job!')
} else {
    console.log('You are not Bob and are not allowed to drive. Seek your Bob, to drive you home.')
};

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!")
} else {
    console.log("Je krijgt geen korting.")
};

if (firstName === 'Sarah' || firstName === 'Bram') {
    console.log("Gefeliciteerd, jij krijgt een biertje.")
};

if (totalAmount >= 100) {
    console.log("Gefeliciteerd, een gratis fles champagne voor jou!")
} else if (totalAmount >= 50) {
    console.log("Gefeliciteerd, je krijgt gratis een portie nachos")
} else if (totalAmount >=  25) {
    console.log("Gefeliciteerd, je krijgt gratis bitterballen!")
} else {
    console.log("helaas bestel meer voor een extraatje")
};