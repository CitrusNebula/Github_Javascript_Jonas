/*

let js = "amazing";
console.log(40 + 5 + 11 - 10);

let firstName = "Jonas";
console.log(firstName);

*/

/*

let javascriptISFun = true;
console.log(javascriptISFun);

console.log(typeof true);
console.log(typeof javascriptISFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptISFun = 'YES!';

let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;
*/

/*

"Strings and Template Literals";

const firstName = 'Dario';
const job = 'Sales Associate'
const birthYear = 1991;
const year = 2021;

const dario = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job;
console.log(dario);

const darioNew = `I'm ${firstName}, a ${year -birthYear} year old ${job}`;
console.log(darioNew);

"Taking Decisions: if / else Statements";

const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license 👍🚗`)
}  else {
    const yearsLeft = 18 - age;
    console.log(`Sarah has ${yearsLeft} left`)
}


"Type Coversion and Coercion";

// type Conversion
// when you manually convert from one type to another

const inputYear = "1991";
console.log(inputYear);
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
// NaN = not a number (invalid number) 

console.log(String(23), 23);

// type coercion
// when Javascript automatically converts types behind the scenes for us
console.log("I am " + 25 + " years old");
console.log("23" - "10" - 3);
// minus operator converts string to numbers
console.log("23" + "10" + 3);
// addition operators coverts numbers to strings
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; // 11
n = n - 1; // 10
console.log(n);



"Truthy and Falsey Values";
// 5 falsey values: 0, '', undefined, null, NaN
// Will be converted to false when attempting to convert to a boolean
// Everything else is a truthy value

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0; // money is 0, a falsey value
if(money){ 
    console.log("Don't spend it all");
} else {  // executed
    console.log('You should get a job!');
}

let height; // height is undefined, a falsey value
if(height) { 
    console.log('YAY! Height is defined');
} else {  // executed
    console.log('NAY! Height is undefined');
}

let definedHeight = 10; // height is defined, a truthy value
if (definedHeight) { // executed
  console.log("YAY! Height is defined");
} else {
  console.log("NAY! Height is undefined");
}



("Equality Operators: == vs. ===");
// === strict equality operator 
// == loose equality operator, does type coercion 
// !== strict difference operator
// != loose difference operator

const age = 21;

console.log('21' == 21);
console.log('21' === 21);

if (age == 21) console.log('You can now drink! (loose)') // executed
if (age == '21') console.log("You can now drink! (loose)"); // executed
if (age === 21) console.log('You can drink now! (strict)');  // executed
if (age === '21') console.log("You can drink now! (strict)");  // not executed

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 11) {
    console.log('Cool! 11 is a magic number!')
} else if(favorite === 5) {
    console.log('5 is also a cool number!')
} else {
    console.log('Number not 5 or 11')
}

if (favorite !== 11 && favorite !== 5) console.log("Why not 5 or 11");



("Boolean Logic");

// ! is the not operator, falsifys or truthifys a value

let apple = 'apple'; 
console.log(Boolean(apple)); // true
console.log(!apple); // becomes false

let isOneGreater = (1 > 5); // false
console.log(isOneGreater);
console.log(!isOneGreater); // becomes true



("Logical Operators");

// && is the and operator, allows you to combine logical operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // both need to be true, so value is false
console.log(hasDriversLicense || hasGoodVision); // only one needs to be true, so value is true
console.log(!hasDriversLicense); // inverts current Booolean value, so true becomes false


// if(hasDriversLicense && hasGoodVision) {
//     console.log(
//         'Sarah is able to drive!'
//         )
// } else {
//     console.log(
//         'Someone else should drive...'
//     )
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}


("The Switch Statement");

const day = "friday";

switch (day) {
    case "monday": // basically equates to day === 'monday'
    case "tuesday":
        console.log("Web development day");
        console.log("Practice piano");
        break;
    case "wednesday":
    case "thursday":
        console.log("Coding day");
        console.log("More piano");
        break;
    case "friday":
        console.log("Music day");
        console.log("We're still keyboarding!")
        break;
    case "saturday":
        console.log("Blender day")
        console.log("Mari's theme in the distance...")
        break;
    case "sunday":
        console.log("Game development day")
        console.log("The piano can not be sated")
        break;
    default: // basically an else block
        console.log('Not a valid day!')
    
}



("The Conditional (Ternary) Operator");

// the ? is the ternary or conditional operator, it has 3 parts to it (condition, if, else). alternative to if...else statement 

const age = 23;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';  // ternary operator
console.log(drink);

let drink2;  // doing the above using if...else statement
if (age >= 18) {
    drink2 = ("wine 🍷");
} else {
    drink2 = ("water 💧");
}
console.log(drink2);

console.log(`I like to drink ${age >=18 ? 'wine 🍷' : 'water 💧'}`); // can use ternary operator in template literals

*/

// "(Coding Challenge 1)";

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;
// console.log(markBMI, johnBMI);

// const markHigherBMI = (markBMI >= johnBMI);
// console.log(markHigherBMI);

// const markMass2 = 95;
// const markHeight2 = 1.88;
// const johnMass2 = 85;
// const johnHeight2 = 1.76;

// const markBMI2 = markMass2 / markHeight2 ** 2;
// const johnBMI2 = johnMass2 / johnHeight2 ** 2;
// console.log(markBMI2, johnBMI2);

// const markHigherBMI2 = markBMI2 >= johnBMI2;
// console.log(markHigherBMI2)

// "(Coding Challaenge 2)";

// if(markBMI2 > johnBMI2){
//     console.log(`Mark's BMI ${markBMI2} is higher than John's BMI ${johnBMI2}`);
// } else {
//     console.log(`John's BMI ${johnBMI2} is higher than Mark's BMI ${markBMI2}`);
// }

// ("Coding Challenge 3");

// console.log("Round 1!");

// const averageDolphinsScore1 = (96 + 108 + 89) / 3;
// const averageKoalasScore1 = (88 + 91 + 110) / 3;
// const winCondition = 100;

// console.log(`Dolphins score ${averageDolphinsScore1}`);
// console.log(`Koalas score ${averageKoalasScore1}`);

// if (
//   averageDolphinsScore1 > averageKoalasScore1 &&
//   averageDolphinsScore1 >= winCondition
// ) {
//   console.log("Dolphins Win!");
// } else if (
//   averageKoalasScore1 > averageDolphinsScore1 &&
//   averageKoalasScore1 >= winCondition
// ) {
//   console.log("Koalas Win!");
// } else if (
//   (averageDolphinsScore1 === averageKoalasScore1 && averageDolphinsScore1,
//   averageKoalasScore1 >= winCondition)
// ) {
//   console.log("It's a Draw!");
// } else {
//   console.log(
//     "Looks like both teams were unable to reach 100 points so we have no winner"
//   );
// }

// console.log("\n");
// console.log("Round 2!");

// const averageDolphinsScore2 = (97 + 112 + 101) / 3;
// const averageKoalasScore2 = (109 + 95 + 123) / 3;

// console.log(`Dolphins score ${averageDolphinsScore2}`);
// console.log(`Koalas score ${averageKoalasScore2}`);

// if (
//   averageDolphinsScore2 > averageKoalasScore2 &&
//   averageDolphinsScore2 >= winCondition
// ) {
//   console.log("Dolphins Win!");
// } else if (
//   averageKoalasScore2 > averageDolphinsScore2 &&
//   averageKoalasScore2 >= winCondition
// ) {
//   console.log("Koalas Win!");
// } else if (
//   (averageDolphinsScore2 === averageKoalasScore2 && averageDolphinsScore2,
//   averageKoalasScore2 >= winCondition)
// ) {
//   console.log("It's a Draw!");
// } else {
//   console.log(
//     "Looks like both teams were unable to reach 100 points so we have no winner"
//   );
// }

// console.log("\n");
// console.log("Round 3!");

// const averageDolphinsScore3 = (97 + 112 + 101) / 3;
// const averageKoalasScore3 = (109 + 95 + 106) / 3;

// console.log(`Dolphins score ${averageDolphinsScore3}`);
// console.log(`Koalas score ${averageKoalasScore3}`);

// if (
//   averageDolphinsScore3 > averageKoalasScore3 &&
//   averageDolphinsScore3 >= winCondition
// ) {
//   console.log("Dolphins Win!");
// } else if (
//   averageKoalasScore3 > averageDolphinsScore3 &&
//   averageKoalasScore3 >= winCondition
// ) {
//   console.log("Koalas Win!");
// } else if (
//   (averageDolphinsScore3 === averageKoalasScore3 && averageDolphinsScore3,
//   averageKoalasScore3 >= winCondition)
// ) {
//   console.log("It's a Draw!");
// } else {
//   console.log(
//     "Looks like both teams were unable to reach 100 points so we have no winner"
//   );
// }

("Coding Challenge 4");

const bill = 430;
const tip =  // declaring tip
  bill >= 50 && bill <= 300  // tip value condition, if in the range of 30-500 
  ? bill * .15  // if tip is within range of 30-500
  : bill * .20;  // if tip is not in range of 30-500
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);