// convert inch to fit,

function inchToFeet(number) {
  const feet = parseInt(number / 12);
  const inch = number % 12;
  const result = `the man is ${feet} feet and ${inch} inches.`;
  return result;
}

console.log(inchToFeet(75));
//
console.log("..........");
//
// leap year

function leapYear(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const leap = leapYear(2012);
console.log(leap);

// 20-4 Calculate the average of the odd numbers in an array

let odd = [];
function oddAvg(number) {
  let sum = 0;
  for (const num of number) {
    if (num % 2 === 1) {
      odd.push(num);
      sum += num;
    }
  }
  const size = odd.length;
  const averageOdd = sum / size;
  console.log(odd);
  return averageOdd;
}

const array = [2, 3, 4, 5, 6, 81];
console.log("average of odd :", oddAvg(array));
console.log("..........");

// 20-5 Remove duplicate items from an array

let newArr = [];
function noDuplicate(array) {
  for (let item of array) {
    if (newArr.includes(item) === false) {
      newArr.push(item);
    }
  }
  return newArr;
}

const Name = ["abul", "babul", "ali", "abul", "babul"];
console.log(noDuplicate(Name));
console.log("..........");

// 20-6 Math, abs, round, ceil, floor, and random number

const number = [2, 65, 7, 98, 64];

// const max = Math.max(...number);
const max = number.reduce((a, b) => (a > b ? a : b));
// const min = Math.min(...number);
const min = number.reduce((a, b) => (a < b ? a : b));
console.log(max);
console.log(min);
console.log("..........");

console.log(Math.PI);
console.log(Math.round(2.55));
console.log(Math.ceil(2.2));
console.log(Math.floor(2.88));
console.log(Math.abs(-21));
console.log(Math.random() * 10);
console.log(Math.round(Math.random() * 10));
console.log("..........");

// 20-7 A Simple introduction to JS Date and time
const date = new Date();
console.log(date);
const british = date.toDateString("en-GB");
console.log(british);
console.log("..........");

// 20-8 Swap variable, swap without temp, destructing

let a = 5;
let b = 6;

const temp = a;
a = b;
b = temp;
console.log(a, b);
//
let x = 10;
let y = 12;
[x, y] = [y, x];
console.log(x, y);
