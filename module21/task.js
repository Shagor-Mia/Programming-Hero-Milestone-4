// Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

function Lowest(number) {
  let lowest = number[0];
  for (let item of number) {
    if (item < lowest) {
      lowest = item;
    }
  }
  return lowest;
}

console.log(Lowest(heights2));
console.log(".............");

// Find the friend with the smallest name.
const friends = ["rahim", "robin", "rafi", "ron", "rashed"];
function Small(friends) {
  let small = friends[0];
  for (let friend of friends) {
    if (friend.length < small.length) {
      small = friend;
    }
  }
  return small;
}
console.log(Small(friends));
console.log(".............");

// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function avgPhonePrice(phones) {
  let sum = 0;
  let size = phones.length;
  for (let phone of phones) {
    sum += phone.price;
  }
  let avg = sum / size;
  return avg.toFixed(2);
}

console.log("average price of phone", avgPhonePrice(phones));

// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function employeeSalary(employees) {
  let totalSalary = 0;
  for (let employee of employees) {
    let currentSalary =
      employee.starting + employee.experience * employee.increment;
    totalSalary += currentSalary;
  }
  return totalSalary;
}

console.log(employeeSalary(employees));
