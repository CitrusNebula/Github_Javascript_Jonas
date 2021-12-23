/*


"Values and Variables";


const country = "USA";
const continent = "North America";
let usPopulation = 330000000;

console.log(country);
console.log(continent);
console.log(usPopulation);


"Data Types";

//let isIsland = false;
//let language;

//console.log(typeof isIsland);
console.log(typeof usPopulation);
console.log(typeof country);
//console.log(typeof language);


"let, const and var";

const usLanguage = "english";
const isIsland = false;
//isIsland = true;

"Basic Operators";

console.log(usPopulation / 2);
usPopulation++;
console.log(usPopulation);

const finlandPopulation = 6000000;
console.log(usPopulation < finlandPopulation);
const avgPopulation = 33000000;
console.log(usPopulation < avgPopulation);

const description1 = 'The USA is in ' + continent + ' and its ' + usPopulation + ' million people speak ' + usLanguage;
console.log(description1);



"Strings and Template Literals";

const description2 = `The ${country} is in ${continent} and it's ${usPopulation} million people speak ${usLanguage}`;
console.log(description2);

"Taking Decisions: if/else Statements";

if(usPopulation > avgPopulation){
    console.log(`${country} population is above average`)
} else {
    console.log(`${country} population is ${avgPopulation - usPopulation} below average`)
}


*/