function increment(value) {
  value++;
}

const i = 10;
console.log(`Value of i before increment is :  ${i}`);
increment(i);
console.log(`Value of i before increment is :  ${i}`);

class MyInt {
  constructor() {
    this.value = 0;
  }
}

function increment2(data) {
  if (data != null && data instanceof MyInt) {
    data.value++;
  } else throw new Error("invalid overload");
}

const data = new MyInt();
data.value = 10;
console.log(`Value of data before increment is :  ${data.value}`);
increment2(data);
console.log(`Value of data before increment is :  ${data.value}`);

function printArray(arr) {
  console.log("\n Values stored in array are : ");
  console.log(arr[i].toString());
}

function swap(arr, x, y) {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function permutation(arr, i, length) {
  if (length === i) {
    console.log(arr);
    return;
  }
  let j = i;
  for (j = i; j < length; j++) {
    swap(arr, i, j);
    permutation(arr, i + 1, length);
    swap(arr, i, j);
  }
}

//Testing code
const arr = new Array(5);
for (let i = 0; i < 5; i++) {
  arr[i] = i;
}
console.log(arr)
return;
permutation(arr, 0, 5);

function GCD(m, n) {
  if (m < n) {
    return GCD(n, m);
  }
  if (m % n === 0) {
    return n;
  }
  return GCD(n, m % n);
}
// Testing code
let gcdVal = GCD(7, 3)
console.log(`GCD : ${gcdVal}`)

function towerOfHanoi(num, src, dst, temp) {
  if (num < 1) {
    return;
  }
  towerOfHanoi(num - 1, src, temp, dst);
  console.log(`Move ${num} disk  from peg ${src} to peg ${dst}`);
  towerOfHanoi(num - 1, temp, dst, src);
}

const num = 4;
console.log("The sequence of moves involved in the Tower of Hanoi are :\n");
towerOfHanoi(num, "A", "C", "B");

function function2() {
  console.log("fun2 line 1");
}
function function1() {
  console.log("fun1 line 1");
  function2();
  console.log("fun1 line 2");
}

console.log("main line 1");
function1();
console.log("main line 2");

function maxSubArraySum(a) {
  const size = a.length;
  let maxSoFar = 0;
  let maxEndingHere = 0;
  for (let i = 0; i < size; i++) {
    maxEndingHere = maxEndingHere + a[i];
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }
  }
  return maxSoFar;
}

const arr1 = [1, -2, 3, 4, -4, 6, -4, 8, 2];
console.log(maxSubArraySum(arr1));

const var1 = 100;
const var2 = 200;
const var3 = var1 + var2;
console.log(`Adding ${var1} and ${var2} will give ${var3}`);

const arr2 = new Array(10);
for (let i = 0; i < 10; i++) {
  arr2[i] = i;
}
console.log(arr2);

function printArray1(arr) {
  console.log("Values stored in array are : ");
  console.log(arr);
}

function twoDArrayExample() {
  const rows = 10;
  const columns = 10;
  const arr = new Array(rows);
  let count = 0;
  for (let i = 0; i < rows; i++) {
    arr[i] = new Array(columns);
    for (let j = 0; j < columns; j++) {
      arr[i][j] = count++;
    }
  }
  print2DArray(arr, 4, 2);
}

function print2DArray(arr, row, col) {
  for (let i = 0; i < row; i++) {
    console.log(arr[i]);
  }
}

twoDArrayExample();

function SumArray(arr) {
  const size = arr.length;
  let total = 0;
  let index = 0;
  for (index = 0; index < size; index++) {
    total = total + arr[index];
  }
  return total;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
sum = SumArray(numbers);
console.log(`Sum is :: ${sum}`);

function SequentialSearch(arr, value) {
  size = arr.length;
  for (let i = 0; i < size; i++) {
    if (value === arr[i]) {
      {
        return true;
      }
    }
  }
  return false;
}

function BinarySearch(arr, value) {
  const size = arr.length;
  let mid;
  let low = 0;
  let high = size - 1;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === value) {
      return true;
    } else {
      if (arr[mid] < value) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return false;
}

// Testing code
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(SequentialSearch(nums, 7));
console.log(BinarySearch(nums, 7));
console.log(BinarySearchRecursive(nums, 7));
console.log(SequentialSearch(nums, 11));
console.log(BinarySearch(nums, 11));
console.log(BinarySearchRecursive(nums, 11));

function rotateArray(a, n, k) {
  reverseArray(a, 0, k - 1);
  reverseArray(a, k, n - 1);
  reverseArray(a, 0, n - 1);
}

function reverseArray(a, start, end) {
  if (
    a != null &&
    a instanceof Array &&
    typeof start === "number" &&
    typeof end === "number"
  ) {
    for (let i = start, j = end; i < j; i++, j--) {
      const temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  } else throw new Error("invalid overload");
}

var val2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
rotateArray(val2, 10, 7);
console.log(val2);

function reverseArray2(a) {
  const start = 0;
  const end = a.length - 1;
  for (let i = start, j = end; i < j; i++, j--) {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
}

class Coord {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
}

const point = new Coord(this);
point.x = 10;
point.y = 10;
console.log(`X axis coord value is  ${point.x}`);
console.log(`Y axis coord value is  ${point.y}`);

class Student {
  constructor() {
    this.rollNo = 0;
    this.lastName = "";
    this.firstName = "";
  }
}

const stud = new Student(this);
let refStud;
refStud = stud;
refStud.rollNo = 1;
refStud.firstName = "john";
refStud.lastName = "smith";
console.log(
  `Roll No:   Student Name:  ${refStud.rollNo}${refStud.firstName}${
    refStud.lastName
  }`
);

const x = 10;
const y = 20;
let result;
result = sumValue(x, y);
console.log(`Sum is : ${result}`);

function sumValue(num1, num2) {
  let result;
  result = num1 + num2;
  return result;
}

function factorial(i) {
  if (i <= 1) {
    return 1;
  }
  return i * factorial(i - 1);
}

// Testing code
console.log(factorial(10));

function printInt1(number) {
  const digit = String.fromCharCode(number % 10 + "0".charCodeAt(0));
  number = Math.floor(number / 10);
  if (number !== 0) {
    printInt1(number);
  }
  console.log(digit);
}

printInt1(50);

function printHaxInt(number, base) {
  const arr = new Array();
  printHaxIntUtil(number, base, arr);
  return arr.join("");
}

function printHaxIntUtil(number, base, arr) {
  const conversion = "0123456789ABCDEF";
  const digit = number % base;
  number = Math.floor(number / base);
  if (number !== 0) {
    printHaxIntUtil(number, base, arr);
  }
  arr.push(conversion[digit]);
}

for (var V = 1; V <= 500;V++) {
  console.log(printHaxInt(V, 16));
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Testing code
console.log(fibonacci(6));


function fibonacci2(n) {
  let first = 0;
  let second = 1;
  let temp;
  let i;

  if (n === 0) return first;
  else if (n === 1) return second;

  for (i = 2; i <= n; i++) {
    temp = first + second;
    first = second;
    second = temp;
  }
  return temp;
}

// Testing code
console.log(fibonacci2(6));

function BinarySearchRecursive(arr, value) {
  return BinarySearchRecursiveUtil(arr, 0, arr.length - 1, value);
}

function BinarySearchRecursiveUtil(arr, low, high, value) {
  if (low > high) return false;

  const mid = low + Math.floor((high - low) / 2);
  if (arr[mid] === value) {
    return true;
  } else if (arr[mid] < value) {
    return BinarySearchRecursiveUtil(arr, mid + 1, high, value);
  } else {
    return BinarySearchRecursiveUtil(arr, low, mid - 1, value);
  }
}

const temp = Number(100);
let temp2 = temp;
console.log(temp);
console.log(temp2);
temp2 = "Hello, World!";
temp2 = true;
