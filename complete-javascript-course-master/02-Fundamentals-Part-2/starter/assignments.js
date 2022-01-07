/*

("Functions");

// my version of Functions

function describeCountry(country, population, capitalCity) {
    const desciption = `${country} has ${population} people and its capital city is ${capitalCity}`
    return desciption;
}
const theUSA = (describeCountry("USA", "330 million", "Washington D.C."));
console.log(theUSA);
const imaginaryCountry = (describeCountry("Petunia", "5 million", "The Stem"));
console.log(imaginaryCountry);
const theCzechRepublic = describeCountry("Czech Republic", "10.7 million", "Prague");
console.log(theCzechRepublic);

// his version of Functions

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and
 its capital city is ${capitalCity}`;
}
const descPortugal = describeCountry("Portugal", 10, "Lisbon");
const descGermany = describeCountry("Germany", 83, "Berlin");
const descFinland = describeCountry("Finland", 6, "Helsinki");
console.log(descPortugal, descGermany, descFinland);
console.log("", descPortugal, "\n", descGermany, "\n", descFinland);  // better readability in log  



("Declarations vs Expression");

function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}

const percentageUSA = percentageOfWorld1(330000000);
const percentageCanada = percentageOfWorld1(38000000);
const percentageFrance = percentageOfWorld1(67000000);
console.log("", percentageUSA, "\n", percentageCanada, "\n", percentageFrance);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percentageUSA2 = percentageOfWorld2(330);
const percentageCanada2 = percentageOfWorld2(38);
const percentageFrance2 = percentageOfWorld2(67);
console.log("", percentageUSA2, "\n", percentageCanada2, "\n", percentageFrance2);



("Arrow Functions");

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percentageUSA = console.log(percentageOfWorld3(330));
const percentageCanada = console.log(percentageOfWorld3(38));
const percentageFrance = console.log(percentageOfWorld3(67));

("Functions Calling Other Functions");

// my way
const describePopulation = function (country, population) {
  return `${country} has ${population} million people which is about ${percentageOfWorld3(
    population
  )} of the world `;
};

console.log(describePopulation("China", 1441));
console.log(describePopulation("USA", 330));
console.log(describePopulation("France", 67));

// his way
const describePopulationJonas = function (country, population) {
  const percentage = percentageOfWorld3(population);
  const description = `${country} has ${population} million
 people, which is about ${percentage}% of the world.`;
  console.log(description);
};
describePopulationJonas("Portugal", 10);
describePopulationJonas("China", 1441);
describePopulationJonas("USA", 332);

*/