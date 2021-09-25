let isAdult = function(isAge) {
    if (isAge >= 18) {
        return true
    } else {
        return false
    }
}

let isKiddo = function(isAge) {
    const age = isAdult(isAge);
    if (age == true) {
        return "Hey There"
    } else {
        return "Hey Kiddo"
    }
}

console.log(isKiddo(18));

let vat = function(baceprice, vat1) {
    let vatPrice = baceprice * vat1;
    return vatPrice
};

let includingVat = function(baceprice, vat1){
    let inclVatPrice = vat(baceprice, vat1) + baceprice;
    return inclVatPrice
}

console.log(includingVat(10, 0.21));