'use strict';

function lecture33() {
    let hasDriversLicense = false;
    const passTest = true;

    if (passTest) hasDriverLicense = true;
    if (hasDriversLicense) console.log('I can drive!');
}

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// Function declaration.
function calcAgeOne(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

// Function expression.
const calcAgeTwo = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function.
const calcAgeThree = birthYear => 2037 - birthYear;

const yearsUntilRetirement = (birthYear, name) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    
    return `${name} retires in ${retirement} years`;
}

// Functions calling other functions.
const cutFruitPieces = fruit => fruit * 4;

function newFruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
}

function main() {
    // const appleJuice = fruitProcessor(5, 0);
    // console.log(appleJuice)

    // console.log(calcAgeOne(1972));
    // console.log(calcAgeTwo(2000));
    // console.log(calcAgeThree(2006));
    // console.log(yearsUntilRetirement(2000, 'Matheus'))

    console.log(newFruitProcessor(2,3));
}
main()