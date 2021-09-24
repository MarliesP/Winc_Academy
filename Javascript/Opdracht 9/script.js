function one(number1, number2) {
    let squared1 = number1 * number1;
    let squared2 = number2 * number2;
    let sum = squared1 + squared2;
    return sum * sum;
}

let two = function(number1, number2) {
    let squared1 = number1 * number1;
    let squared2 = number2 * number2;
    let sum = squared1 + squared2;
    return sum * sum;
};

let three = (number1, number2) => {
    let squared1 = number1 * number1;
    let squared2 = number2 * number2;
    let sum = squared1 + squared2;
    return sum * sum;
};


console.log(one(10,2));
console.log(two(10,2));
console.log(three(10,2));
