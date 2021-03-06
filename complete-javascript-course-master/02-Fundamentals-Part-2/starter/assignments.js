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



("Introduction to Arrays");

const populations = [333, 38, 83, 67];

console.log(populations.length === 4)
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [
  percentageOfWorld1(populations[0]), 
  percentageOfWorld1(populations[1]), 
  percentageOfWorld1(populations[2]), 
  percentageOfWorld1(populations[3])
];

console.log(percentages);


("Basic Array Opertions (Methods)");

const ukNeighbours = ['Belgium', 'Denmark', 'France', 'Germany', 'Norway'];
console.log(ukNeighbours);
ukNeighbours.push('Utopia')
console.log(ukNeighbours);
ukNeighbours.pop();
console.log(ukNeighbours);

if (!ukNeighbours.includes('Germany')){
  console.log('Probably not a central European country :D')
} else {
  console.log('Probably a central European country :D')
}
console.log(ukNeighbours);
// my way of changing norway to netherlands
console.log(ukNeighbours.indexOf('Norway'));
ukNeighbours[4] = 'Netherlands';
console.log(ukNeighbours);

// his way of changing 
ukNeighbours[ukNeighbours.indexOf('Netherlands')] = 'Faroe Islands';
console.log(ukNeighbours);



("Coding Challenge 2");

const calcTip = function(cost) {
  if (cost >= 50 && cost <= 300) {
    tip = cost * 0.15;
    return tip;
  } else {
    tip = cost * 0.2;
    return tip;
  }
};

// above function but using ternary operator
// const calcTip = function(cost){
//   return cost >= 50 && cost <= 300 ? cost * .15 : 
//   cost *.20
// }

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);


("Introduction to Objects");


const myCountry = {
  country: "Japan",
  capital: "Tokyo",
  language: "Japanese",
  population: 125,
  neighbours: ['Korea', 'Russia', 'China'],
  describe: function(){
    return `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
  },
  checkIsland: function(){
    return this.isIsland = this.neighbours.length === 0 ? true : false; 
  }
};

("Dots vs. Bracket Notation");

console.log(`${myCountry.country} has 
${myCountry.population} million 
${myCountry.language} people, 
${myCountry.neighbours.length} neighbouring countries and a capital called 
${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

("Object Methods");

console.log(myCountry.describe());
console.log(myCountry.checkIsland());




("Coding Challenge 3");

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi){
  console.log(`${mark.fullName}'s BMI ${john.bmi} is higher than ${john.fullName}'s ${mark.bmi}!`);
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI ${mark.bmi} is higher than ${mark.fullName}'s ${john.bmi}!`);
} else {
  console.log(`Mark and John's BMI are the same!`)
}



("Iteration: The for Loop");

// for loop keeps running while condition (rep <=10) is TRUE
for (let rep = 1; rep <=50; rep++) {
  console.log(`Voter number ${rep} is currently voting ????????????????`);
}




("Looping Arrays, Breaking and Continuing");

const populations = [333, 38, 83, 67];
const percentages2 = [];

 function percentageOfWorld1(population) {
   return (population / 7900) * 100;
 }

for (let i = 0; i < populations.length; i++){
  // runs the percofworld function using the current position of i
  const perc = percentageOfWorld1(populations[i]);
  // pushes the current value of perc into the percentages 2 array
  percentages2.push(perc);
}

console.log(percentages2);


('Looping Backwards and Loops in Loops');

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   // the y loop goes into the individual components of the grouped arrays
//     for (let y = 0; y < listOfNeighbours[i].length; y++) {
//       // canada and mexico are 0 and 1 at this point making the code output it singularly instead of together
//       console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
//     }
// }


for (let i = 0; i < listOfNeighbours.length; i++) {
  console.log(listOfNeighbours[i]);
  // the y loop goes into the individual components of the grouped arrays
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    // the y goes through the length of the i array
    // canada and mexico are 0 and 1 at this point 
    // the specific location of mexico would be the first iteration of i (i = 0) and y at 1
    // sweden would be third iteration of i (i = 2) and y at 1
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}



("Coding Challenge 4");

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (cost) {
  if (cost >= 50 && cost <= 300) {
    tip = cost * 0.15;
    return tip;
  } else {
    tip = cost * 0.2;
    return tip;
  }
};

console.log(calcTip(1100));

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
  
}

console.log(tips);
console.log(totals);

const calcAverage = function(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    // sum = sum + arr[i];
    sum += arr[i]
  }
  return sum / arr.length;
   
}

console.log(calcAverage(totals));

*/