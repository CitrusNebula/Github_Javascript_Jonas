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

*/



"Type Coversion and Coercion";

// type Conversion 
// when you manually convert from one type to another


const inputYear = "1991";
console.log(inputYear);
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
/* NaN = not a number (invalid number) */

console.log(String(23), 23);


// type Cohersion 
// when Javascript automatically converts types behind the scenes for us 
console.log('I am ' + 25 + ' years old')
console.log('23' - '10' - 3);
// minus operator converts string to numbers
console.log("23" + "10" + 3);
// addition operators coverts numbers to strings
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1; // 11
n = n - 1; // 10
console.log(n);

"Truthy and Falsey Values";




// "Coding Challenge 1";

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



// "Coding Challaenge 2";

// if(markBMI2 > johnBMI2){
//     console.log(`Mark's BMI ${markBMI2} is higher than John's BMI ${johnBMI2}`);
// } else {
//     console.log(`John's BMI ${johnBMI2} is higher than Mark's BMI ${markBMI2}`);
// }