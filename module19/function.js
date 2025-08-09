// 19.7 check wether a given  parameter of string number is even or not.

function isEven(str) {
  const size = str.length;
  console.log(size);
  if (size % 2 === 0) {
    console.log("size of string is  even");
  }
  console.log("size of string not even");
}

isEven("dhaka");

// 19.8 sum of an given array,

function sumArray(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

const array = [1, 2, 3, 4, 5];
const sum = sumArray(array);
console.log(sum);

// 19.9 finding even from array and sum of even array
function arrayEven(numbers) {
  let even = [];
  let evenSum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      even.push(number);
      evenSum += number;
    }
  }
  return { even, evenSum };
}

const even = [2, 3, 4, 5, 6];
const Even = arrayEven(even);
console.log(Even.even, Even.evenSum);
