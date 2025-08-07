// 18_2: Traverse Array using for, while, and for-of loop in JavaScript

const fruits = ["aam", "jam", "kathal", "lichu"];
//for
for (let i = 0; i <= fruits.length; i++) {
  console.log(`index ${i} is: ${fruits[i]}`);
}
console.log(`...........`);
// while
let i = 0;
while (i < fruits.length) {
  console.log(`index ${i} is: ${fruits[i]}`);
  i++;
}
console.log(`...........`);
// for..of
for (let [index, fruit] of fruits.entries()) {
  console.log(`for of index ${index} is: ${fruit}`);
}
console.log(`...........`);
// for..each
fruits.forEach((fruit, index) => {
  console.log(`forEach of index ${index} is: ${fruit}`);
});

// 18_3: Reverse an Array: 3 Techniques Explained (for loop, unshift, reverse method)

const number = [1, 2, 3, 4, 5];
// unshift
const reverse = [];
for (let i = 0; i < number.length; i++) {
  //   reverse.unshift(number[i]);
}
// console.log(reverse);
console.log(`...........`);

// loop
for (let i = number.length - 1; i >= 0; i--) {
  //   reverse.push(number[i]);
}
// console.log(reverse);
console.log(`...........`);

// for..of
for (const num of number) {
  //   reverse.unshift(num);
}
// console.log(reverse);
console.log(`...........`);

// reverse method
number.reverse();
console.log(number);

// 18_4: Sort Array in Ascending & Descending Order (Manual & sort() method)
// sort
const numbers = [2, 5, 3, 1, 7, 6];
numbers.sort();
console.log(numbers);

const Name = ["jian", "amara", "haturi", "doramon"];
Name.sort();
console.log(Name);
console.log(`...........`);

// alternate
const age = [1, 4, 3, 16, 100, 5, 200];
age.sort();
console.log(age);
// ascending
asc_sort_age = age.sort(function (a, b) {
  return a - b;
});
console.log(asc_sort_age);
// descending
desc_sort_age = age.sort(function (b, a) {
  return a - b;
});
console.log(desc_sort_age);
console.log(`...........`);

// 18_5: Array of Objects and Access Object inside an Array

const employees = [
  { name: "alim", position: "data scientist", salaray: 12000 },
  { name: "halim", position: "data engineer", salaray: 20000 },
  { name: "salim", position: "data analyst", salaray: 2000 },
  { name: "sarif", position: "developer", salaray: 1200 },
];

console.log(
  `employee name is ${employees[1].name} and his salary is  ${employees[1].salaray}`
);

for (let emp of employees) {
  let employee = emp.name + " : " + emp.salaray;
  console.log(employee);
}
console.log(`...........`);

// 18_6: [Optional] traverse in a 2D array
const array1 = [1, 2, 3, 45.6, 6];
const array2 = [[], [], []];
const array3 = [
  [100, 21, 34, 22, 55, 67],
  [12, 13, 34, 45, 56, 66],
  [44, 43, 56, 23, 11, 22],
];

console.log(array3[2][0]);

array2[0].push(2, 3, 4, 5);
console.log(array2);

array3[2].pop();
console.log(array3);

array3[1][1] = 0;
console.log(array3[1]);
console.log(`...........`);

// 18_7: Copy array elements to another array

//
const products = [12, 13, 14, 1, 15];
const comp_products = [];

for (let pd of products) {
  comp_products.push(pd);
}
console.log(comp_products);

comp_products[2] = 10;
console.log(comp_products);
//

const number2 = [23, 24, 25, 26, 27];
// const new_number = Array.from(number2);
// const new_number = [].concat(number2);
const new_number = [...array3];

number2.pop();
console.log(number2);
console.log(new_number);
