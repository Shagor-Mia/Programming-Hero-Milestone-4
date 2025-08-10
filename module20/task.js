// Write a function to convert temperature from Celsius to Fahrenheit.
let celsius = 20;

function farenheit(cel) {
  let faren = cel * 1.8 + 32;
  return faren;
}

console.log(farenheit(celsius), "farenheit");

// You are given an array of numbers. Count how many times the a number is repeated in the array.

const numbers = [5, 6, 11, 12, 98, 5];
let findTo = 25;
let find = numbers.filter((target) => target === findTo).length;
console.log("targeted value found in", find, "times");
console.log("................");

// Write a function to count the number of vowels in a string
// const vowel = ["a", "e", "i", "o", "u"];
function isVowel(str) {
  const chars = str.toLowerCase().split("");
  console.log(chars);
  // const countVowel = chars.filter((char) => vowel.includes(char)).length;
  const countVowel = chars.filter((c) => "aeiou".includes(c)).length;
  return countVowel;
}

const str = "weuytqidsoqwrenajshdk";
console.log(isVowel(str));
console.log("................");

// Write a function to find the longest word in a given string.

function largeWord(sentence) {
  const array = sentence.toLowerCase().split(" ");
  const word = array.reduce((current, longest) =>
    current.length > longest.length ? current : longest
  );
  return word;
}

const sentence = "I am learning Programming to become a programmer";
console.log(largeWord(sentence));

// Generate a random number between 10 to 20.

console.log(Math.random() * (20 - 10) + 10);
