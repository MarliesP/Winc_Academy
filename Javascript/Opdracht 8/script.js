function biggerThan(number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
};

console.log(biggerThan(150));

function bouncerBrenda(maxPeople, currentPeople, agePeople) {
    if (maxPeople > currentPeople && agePeople >= 18) {
        return "Come in";
    } else if (maxPeople < currentPeople && agePeople >= 18){
        return "It's to bussy come back later";
    }
    else {
        return "you are to young";
    }
};

console.log(bouncerBrenda(50, 25, 19));
console.log(bouncerBrenda(50, 55, 19));
console.log(bouncerBrenda(50, 25, 17));
console.log(bouncerBrenda(50, 55, 17));

function calculateAverage(number1, number2, number3, number4, number5) {
   let numbers = number1 + number2 + number3 + number4 + number5;
   let average = numbers / calculateAverage.length;

   return Math.round(average);
}

console.log(calculateAverage(891,228,3.5,4,6));