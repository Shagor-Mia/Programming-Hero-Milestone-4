// 21-1 Can you find out who will get the Strawberry?

function getMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

const max1 = getMax(20, 30);
const max2 = getMax(10, 70);
const ultraMax = getMax(max1, max2);

console.log(`max1 is: `, max1);
console.log(`max2 is: `, max2);
console.log(`ULTRAMAX is: `, ultraMax);
console.log("......................");

// 21-2 Who is the tallest? Find the max number in an array

function maxNumber(number) {
  let max = number[0];
  for (let item of number) {
    if (item > max) {
      max = item;
    }
  }
  return max;
  // or
  // return Math.max(...number);
}

const height = [12, 54, 66, 77, 11, 22];
console.log(maxNumber(height));
console.log("......................");

// 21-3 Use add and multiplication to calculate wood requirements

function totalWood(chairs, tables, beds) {
  const chair = 3; //feet
  const table = 4;
  const bed = 8;

  const totalChairWood = chairs * chair;
  const totalTableWood = tables * table;
  const totalBedWood = beds * bed;
  return (totalWood = totalChairWood + totalTableWood + totalBedWood);
}

console.log(totalWood(2, 1, 1));
console.log("......................");

// 21-4 Find the cheapest phone from an array of phone objects
function cheapestPhone(mobiles) {
  let min = mobiles[0];
  for (let mobile of mobiles) {
    if (mobile.price < min.price) {
      min = mobile;
    }
  }
  return min;
}

const mobile = [
  {
    name: "iphone",
    price: 1200,
    camera: "12px",
    color: "black",
  },
  {
    name: "xaomi",
    price: 600,
    camera: "12px",
    color: "black",
  },
  {
    name: "sony",
    price: 400,
    camera: "12px",
    color: "black",
  },
];
console.log(" the cheapest phone", cheapestPhone(mobile));
console.log("......................");

// 21-5 Calculate the total cost of the products in a shopping cart
const products = [
  { name: "shirt", price: 35, quantity: 3 },
  { name: "pant", price: 30, quantity: 2 },
  { name: "belt", price: 10, quantity: 1 },
  { name: "shoes", price: 40, quantity: 2 },
];

function totalPrice(products) {
  let sum = 0;
  for (let product of products) {
    sum += product.price * product.quantity;
  }
  return sum;
}

console.log("total price of shopping:", totalPrice(products) + "$");
console.log("......................");

// 21-6 (advanced) Multi-layer discount price calculation

const productCart = [
  { name: "shirt", price: 35, quantity: 3 },
  { name: "pant", price: 30, quantity: 2 },
  { name: "belt", price: 10, quantity: 1 },
  { name: "shoes", price: 40, quantity: 2 },
];

function discountTotalPrice(products) {
  let sum = 0;
  for (let product of products) {
    // 10% discount
    if (product.quantity > 5) {
      let discountPrice = product.price - (product.price * 10) / 100;
      sum += discountPrice * product.quantity;
    } else {
      sum += product.price * product.quantity;
    }
  }
  return sum;
}

console.log("total price of shopping:", discountTotalPrice(productCart) + "$");
console.log("......................");

// 21-7 Simple calculator to call function inside a function

function add(num1, num2) {
  return num1 + num2;
}
function substr(num1, num2) {
  return num1 - num2;
}
function mul(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}

function calculator(a, b, operation) {
  if (operation === "add") {
    return add(a, b);
  } else if (operation === "sub") {
    return substr(a, b);
  } else if (operation === "mul") {
    return mul(a, b);
  } else if (operation === "div") {
    return div(a, b);
  } else {
    return "only add, sub, mul, div operation";
  }
}

console.log(calculator(23, 22, "div"));
console.log("......................");

// 21-8 Handle unexpected function input parameter error

function getproduct(product) {
  if (typeof product !== "string") {
    return "please enter string";
  }
  return product;
}

console.log(getproduct([]));
// array
function getarray(array) {
  if (Array.isArray(array) === false) {
    return "please enter array";
  }
  return array;
}

console.log(getarray({}));
//obj
function getobj(objects) {
  if (
    typeof objects !== "object" ||
    objects === null ||
    Array.isArray(objects)
  ) {
    return "please enter object";
  }
  return objects;
}

console.log(getobj([]));
