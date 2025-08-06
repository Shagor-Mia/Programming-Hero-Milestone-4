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
