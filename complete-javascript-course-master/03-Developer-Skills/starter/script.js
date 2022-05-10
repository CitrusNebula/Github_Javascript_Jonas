// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - How to mere 2 arrays?




// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  // Fix Bug (0 is set as min and no array values entered are less than 0)
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [7, 4, 9]);

// A) Identify bug
console.log(amplitudeBug);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) Fix bug
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // B) Find bug
  console.log(measurement);
  console.table(measurement);

  // console.log(measurement.value);
  // console.error(measurement.value);
  // console.warn(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify bug
console.log(measureKelvin());


*/

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, -4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    const day = i + 1;
    str = str + `... ${arr[i]} °C in ${day} days `;
  }
  console.log(str);
};

printForecast(arr1);
printForecast(arr2);
