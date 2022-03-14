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



("Coding Challenge 1");

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// game 1
let scoresDolphins = calcAverage(44, 23, 71);
let scoresKoalas = calcAverage(65, 54, 49);
// game 2
let scoresDolphins2 = calcAverage(85, 54, 41);
let scoresKoalas2 = calcAverage(23, 34, 27);

const checkWinner = function (scoresDolphins, scoresKoalas) {
  if (scoresDolphins >= scoresKoalas * 2) {
    console.log(`Dolphins win (${scoresDolphins} vs ${scoresKoalas})`);
  } else if (scoresKoalas >= scoresDolphins * 2) {
    console.log(`Koalas win (${scoresKoalas} vs ${scoresDolphins})`);
  } else {
    console.log(`No winner!`);
  }
};

checkWinner(scoresDolphins, scoresKoalas);
checkWinner(scoresDolphins2, scoresKoalas2);


("Introduction to Arrays");

const friend1 = 'Space';
const friend2 = 'Time';
const friend3 = 'Void';

// common way to make an array
const friends = ['Space', 'Time', 'Void'];
console.log(friends);

// different way of making an array 
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

// .length indicates how many arguments the function expects
console.log(friends.length);
console.log(friends[friends.length - 1]);

// non primative values like arrays can be mutated even when declared with const
friends[2] = 'Abyss'
console.log(friends);
// can not reassign entire array value
// friends = ['Bob', 'Alice']


// can store different variable types in an array
const firstName = 'Dario'
const dario = [firstName, 'Nettleford', 2022 - 1996, 'artist', friends];
console.log(dario);

// Excercise 
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[1]);
const age3 = calcAge2(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge2(years[0]), calcAge2(years[1]), calcAge2(years[years.length - 1])];
console.log(ages);


("Basic Array Opertions (Methods)");

const friends = ["Space", "Time", "Void"];
// .push adds elements to the end of the array
// .push returns the length of the array
const newLength = friends.push('Light');
console.log(friends);
console.log(newLength);

// .unshift adds elements to the beggining of the array
// also returns the length of the array
friends.unshift('Darkness');
console.log(friends);

// .pop removes last element of the arry
friends.pop();
// .pop returns the value that was removed
const popped = friends.pop()
console.log(friends);
console.log(popped);

// .shift removes the first element in an array
friends.shift();
console.log(friends);

// .indexOf gives the position of an element in an array
console.log(friends.indexOf('Time'));

// .includes checks if an element is inside the array
console.log(friends.includes('Space'));
console.log(friends.includes("Darkness"));
friends.push(1155);
// .includes uses strict equality so it does not do type cohersion (integer 1155 not string 1155)
console.log(friends.includes("1155"));
console.log(friends.includes(1155));

if (friends.includes('Time')){
  console.log("Time itself is infinite but yours is fleeting");
}


("Introduction to Objects");

// object called dario, the contents within dario are called properties (property firstname with the value of Dario)
const dario = {
  firstName: 'Dario',
  lastName: 'Nettleford',
  age: 2022-1996,
  job: 'web designer',
  friends: ['Tommy', 'Alberto', 'Ayah']
};



("Dots vs. Bracket Notation");
const dario = {
  firstName: "Dario",
  lastName: "Nettleford",
  age: 2022 - 1996,
  job: "web designer",
  friends: ["Darkness", "Alberto", "Ayah"],
};

console.log(dario);

// dot notation
console.log(dario.lastName);
// bracket notation
console.log(dario['lastName']);

// bracket notation allows you to put any expression
const nameKey = 'Name';
console.log(dario['first' + nameKey]);
console.log(dario['last' + nameKey]);

// when first needing to compute the property names, use bracket notation
// otherwise use dot notation

// const darioInfo = prompt('What do you want to know about Dario? (options: firstName, lastName, age, job, and friends');


// if(dario[darioInfo]) {
//   console.log(dario[darioInfo]);
// } else {
//   console.log(`No info found on that subject (${darioInfo})`)
// }

// adding properties to an object
dario.location = 'Headspace';
dario['twitter'] = '@citrusofnebula'
console.log(dario);

// Unlisted Challenge
// write "Dario has 3 friends and his best friend is called darkness"

const challengeString = `${dario.firstName} has ${dario.friends.length} friends, and his best friend is called ${dario.friends[0]}`;
console.log(challengeString);


("Object Methods");

const dario = {
  firstName: "Dario",
  lastName: "Nettleford",
  birthYear: 1996,
  job: "web designer",
  friends: ["Darkness", "Alberto", "Ayah"],
  hasDriversLicense: true,

  // any function attached to an object is called a method
  // must use expression and not declaration
  // calcAge: function(birthYear){
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   // this points to dario which is calling the method
  //   return 2022 - this.birthYear;
  // },
  calcAge: function () {
    // creates new age property on the dario object
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return this.summaryString = `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has 
    ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    // using ternary operator above
  },
};

// dot notation
console.log(dario.calcAge(1996));
// bracket notation
console.log(dario['calcAge'](1996));
// using the 'this' keyword
console.log(dario.calcAge());
// most efficient way of getting age
console.log(dario.age);

// Unlisted Challenge
// write "Dario is a 25-year web designer, and he has a drivers license"
console.log(dario.getSummary());

("Iteration: The for Loop");

// for loop keeps running while condition (rep <=10) is TRUE
for (let rep = 1; rep <=10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`)
}



("Looping Arrays, Breaking and Continuing");


const dario = [
  'Dario',
  'Nettleford',
  2022 - 1996,
  'web designer',
  ["Tommy", "Alberto", "Ayah"],
];

const types = [];

for (let i = 0; i < dario.length; i++) {
  // reading from dario object
  console.log(dario[i]);

  // filling types array
  // types[i] = typeof dario[i];
  types.push(typeof dario[i]);
}

console.log(types);

const years = [1996, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++){
  ages.push(2022 - years[i]);
}

console.log(ages);

// continue and break

console.log('--- ONLY STRINGS ---')
for (let i = 0; i < dario.length; i++) {
  if(typeof dario[i] != 'string') continue;
  console.log(dario[i]);
}

console.log('--- Break at number ---')
for (let i = 0; i < dario.length; i++) {
  if (typeof dario[i] === 'number') break;
  console.log(dario[i]);
}



("Looping Backwards and Loops in Loops");

const dario = [
  "Dario",
  "Nettleford",
  2022 - 1996,
  "web designer",
  ["Tommy", "Alberto", "Ayah"],
];

for (let i = dario.length - 1; i >= 0; i-- ){
  console.log(dario[i]);
}

for (let exercise = 1; exercise < 4; exercise++){
  console.log(`--- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++){
    console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
}

*/