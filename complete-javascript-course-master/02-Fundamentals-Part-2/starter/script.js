"use strict"; // must be very first statement to work (comments are allowed)"

/*

("Activating Strict Mode");

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 535;



("Functions");

function logger() {   // code inside curly braces called function body
    console.log('My name is Dario');
}

// invoking, calling or running the function
logger(); 
logger(); 
logger(); 

function fruitProcessor(apples, grapes) { // apples and grapes are the parameters
    console.log(apples, grapes);
    const juice = `Juice with ${apples} apples and ${grapes} grapes`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);  // 5 and 0 are the arguments
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleGrapeJuice = fruitProcessor(2, 4);
console.log(appleGrapeJuice);

const num = Number('23');
console.log(num);



("Function Declerations");

// function decleration

// you can call function declerations in the code before they are defined

const age1 = calcAge1(1996);

function calcAge1(birthYear) {
    return 2021 - birthYear;
}

console.log(age1);

// function expression

// you cannot call function expressions in the code before they are defined

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}
const age2 = calcAge2(1996);
console.log(age2);


// in javascript functions are just values so, you can store them in variables




("Arrow Functions");

// Function expression
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1996, 'Dario'));
console.log(yearsUntilRetirement(1967, 'Claudette'));



("Function Calling Other Functions");

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, grapes) {
  // apples and grapes are the parameters
  const applePieces = cutFruitPieces(apples);
  const grapePieces = cutFruitPieces(grapes);
  const juice = `Juice with ${applePieces} apples pieces and ${grapePieces} grape pieces`;
  return juice;
}

console.log(fruitProcessor(2,3));



("Reviewing Functions");

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  // return retirement;
  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
    // return retirement;
  } else {
    return `${firstName} has been retired for ${Math.abs(retirement)} years`;
    // return retirement;
  }
};

const dario = yearsUntilRetirement(1996, "Dario");
console.log(dario);
const tom = yearsUntilRetirement(1960, "Tom");
console.log(tom);

*/

("Coding Challenge 1");

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoresDolphins = calcAverage(44, 23, 71);
const scoresKoalas = calcAverage(65, 54, 49);
const scoresDolphins2 = calcAverage(85, 54, 41);
const scoresKoalas2 = calcAverage(23, 34, 27);

const checkWinner = function (scoresDolphins, scoresKoalas) {
  if (scoresDolphins >= scoresKoalas * 2) {
    return `Dolphins win (${scoresDolphins} vs ${scoresKoalas})`;
  } else if (scoresKoalas >= scoresDolphins * 2) {
    return `Koalas win (${scoresKoalas} vs ${scoresDolphins})`;
  } else if (scoresDolphins === scoresKoalas){
    return `We have a tie!`;
  } else {
    return `No winner!`;
  }
};
const game1 = checkWinner(scoresDolphins, scoresKoalas);
console.log(game1);
const game2 = checkWinner(scoresDolphins2, scoresKoalas2);
console.log(game2);
