/*

("Values and Variables");

const country = "USA";
const continent = "North America";
let usPopulation = 330000000;

console.log(country);
console.log(continent);
console.log(usPopulation);

("Data Types");

//let isIsland = false;
//let language;

//console.log(typeof isIsland);
console.log(typeof usPopulation);
console.log(typeof country);
//console.log(typeof language);

("let, const and var");

const usLanguage = "english";
const isIsland = false;
//isIsland = true;

("Basic Operators");

console.log(usPopulation / 2);
usPopulation++;
console.log(usPopulation);

const finlandPopulation = 6000000;
console.log(usPopulation < finlandPopulation);
const avgPopulation = 33000000;
console.log(usPopulation < avgPopulation);

const description1 =
  "The USA is in " +
  continent +
  " and its " +
  usPopulation +
  " million people speak " +
  usLanguage;
console.log(description1);

("Strings and Template Literals");

const description2 = `The ${country} is in ${continent} and it's ${usPopulation} million people speak ${usLanguage}`;
console.log(description2);

("Taking Decisions: if/else Statements");

if (usPopulation > avgPopulation) {
  console.log(`${country} population is above average`);
} else {
  console.log(
    `${country} population is ${avgPopulation - usPopulation} below average`
  );
}

("Type Conversion and Coercion");

"9" - "5"; // 4
"19" - "13" + "17"; // 617
"19" - "13" + 17; // 23
"123" < 57; // false
5 + 6 + "4" + 9 - 4 - 2; // 1143

("Equality Operators: == vs. ===");

// makes the input of 1 execute no borders when using === operator
// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );

// converting to number prevents bugs
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

("Logical Operators");

if (usLanguage === 'english' && usPopulation < 50000000 && isIsland === false) {
  console.log(
    `You should live in the ${country} `
  )
} else {
  console.log(
    `The ${country} does not meet your requirements, sorry.`
  )
}

("The Switch Statement");

const language = 'english'

switch (language) {
  case "chinese":
    console.log("MOST number of native speakers!")
    break;
  case "spanish":
    console.log('2nd place in number of native speakers');
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

("The Conditional (Ternary) Operator");

console.log(`${country} population is ${usPopulation > 33000000 ? 'above' : 'below'} average`);

*/