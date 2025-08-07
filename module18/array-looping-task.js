//1. Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ["red", "blue", "green", "yellow", "orange"];
const reverse = [];
for (let i = colors.length - 1; i >= 0; i--) {
  //   reverse.push(colors[i]);
}
// console.log(reverse);

for (let item of colors) {
  reverse.unshift(item);
}
// console.log(reverse);
console.log("...............");

//2. Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];
const even = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even.push(numbers[i]);
  }
}
// console.log(even);
console.log("...............");

// 3.Use a for...of loop to concatenate all the elements of an array into a single string.

var numbers2 = ["Tom", "Tim", "Tin", "Tik"];
var strings = "";
for (let item of numbers2) {
  strings = strings.concat(item);
}
let str = `'${strings}'`;
// console.log(str);
console.log("...............");

//4. Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = "I am a hard working person";
let rev = statement.split(" ").reverse().join(" ");
// console.log(rev);

output: "person working hard a am I";
console.log("...............");

//5. Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

let array = [1, 2, 3];
// console.log(array);
// let cpyArray = [].concat(array);
// let cpyArray = Array.from(array);
let cpyArray = [...array];

cpyArray[0] = 99;
// console.log(cpyArray);
console.log("...............");

//6. Given an array of student objects, print each student’s name and marks.
const student = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];

// console.log(`${student[0].name} scored ${student[0].marks}`);
// console.log(`${student[1].name} scored ${student[1].marks}`);
console.log("...............");

//7. Given a 2D array, update the value at second row first item to 99 and print the updated array.

const D2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

D2[1][0] = 99;
console.log(D2);
