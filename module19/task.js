// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function evenOrodd(number) {
  if (number % 2 === 0) {
    return number / 2;
  } else {
    return number * 2;
  }
}

const result = evenOrodd(3);
console.log(result);

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr) {
  const size = arr.length;
  console.log("arr size ", size);
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  console.log("sum of arr ", sum);
  return sum / size;
}

const arrays = [2, 3, 4, 5, 6];
const results = make_avg(arrays);
console.log(results);

// Task - 4;
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binary) {
  let target = "0";
  //   const Bin = binary.match(/0/g).length;
  //   return Bin;
  const count0 = binary.split(target).length - 1;
  return count0;
}

console.log("count of 0 is: ", count_zero("01010101010010"));

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(integer) {
  return integer % 2 === 0 ? "Even" : "Odd";
}
const evenOdd = odd_even(5);
console.log(evenOdd);
