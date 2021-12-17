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

const firstName = 'Dario';
const job = 'Sales Associate'
const birthYear = 1991;
const year = 2021;

const dario = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job;
console.log(dario);

const darioNew = `I'm ${firstName}, a ${year -birthYear} year old ${job}`;
console.log(darioNew);

const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license 👍🚗`)
}  else {
    const yearsLeft = 18 - age;
    console.log(`Sarah has ${yearsLeft} left`)
}

*/ 

"Coding Challenge 1";

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);

const markHigherBMI = (markBMI >= johnBMI);
console.log(markHigherBMI);

const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markMass2 / markHeight2 ** 2;
const johnBMI2 = johnMass2 / johnHeight2 ** 2;
console.log(markBMI2, johnBMI2);

const markHigherBMI2 = markBMI2 >= johnBMI2;
console.log(markHigherBMI2)



"Coding Challaenge 2";

if(markBMI2 > johnBMI2){
    console.log(`Mark's BMI ${markBMI2} is higher than John's BMI ${johnBMI2}`);
} else {
    console.log(`John's BMI ${johnBMI2} is higher than Mark's BMI ${markBMI2}`);
}