function increment(value) {
	value++;
};

function main1() {
	const i = 10;
	console.log(`Value of i before increment is :  ${i}`);
	increment(i);
	console.log(`Value of i before increment is :  ${i}`);
}
main1()

function MyInt() {
	this.value = 0;
}

function increment2(data) {
	if (data != null && data instanceof MyInt) {
		(data.value)++;
	} else
		throw new Error('invalid overload');
};

function main878() {
	const i = new MyInt;
	i.value = 10;
	console.log(`Value of i before increment is :  ${i.value}`);
	increment2(i);
	console.log(`Value of i before increment is :  ${i.value}`);
}
main878()

function printArray(arr) {
	console.log("\n Values stored in array are : ");
	console.log(arr[i].toString());
};

function swap(arr, x, y) {
	const temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp;
};

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
};

function main7979() {
	const arr = new Array(5);
	for (let i = 0; i < 5; i++) {
		arr[i] = i;
	}
	permutation(arr, 0, 5);
};
main7979()

function GCD(m, n) {
	if (m < n) {
		return (GCD(n, m));
	}
	if (m % n === 0) {
		return (n);
	}
	return (GCD(n, m % n));
};

function towerOfHanoi(num, src, dst, temp) {
	if (num < 1) {
		return;
	}
	towerOfHanoi(num - 1, src, temp, dst);
	console.log(`Move ${num} disk  from peg ${src} to peg ${dst}`);
	towerOfHanoi(num - 1, temp, dst, src);
};

function main8768() {
	const num = 4;
	console
			.log("The sequence of moves involved in the Tower of Hanoi are :\n");
	towerOfHanoi(num, 'A', 'C', 'B');
	return 0;
};
main8768()

function function2() {
	console.log("fun2 line 1");
};
function function1() {
	console.log("fun1 line 1");
	function2();
	console.log("fun1 line 2");
};
function mainrwe() {
	console.log("main line 1");
	function1();
	console.log("main line 2");
};
mainrwe()

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
};

function main989() {
	const arr = [ 1, -2, 3, 4, -4, 6, -4, 8, 2 ];
	console.log(maxSubArraySum(arr));
}
main989()

function variableExample() {
	const var1 = 100;
	const var2 = 200;
	const var3 = var1 + var2;
	console.log(`Adding ${var1} and ${var2} will give ${var3}`);
};
variableExample()

function main433() {
	arrayExample();
}

function arrayExample() {
	const arr = new Array(10);
	for (let i = 0; i < 10; i++) {
		arr[i] = i;
	}
	console.log(arr);
};
main433()

function printArray1(arr) {
	console.log("Values stored in array are : ");
	console.log(arr);
};

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
};

function print2DArray(arr, row, col) {
	for (let i = 0; i < row; i++) {
		console.log(arr[i]);

	}
};

function main545() {
	twoDArrayExample();
}
main545()


function SumArray(arr) {
	const size = arr.length;
	let total = 0;
	let index = 0;
	for (index = 0; index < size; index++) {
		total = total + arr[index];
	}
	return total;
};

function main898() {
	const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	let sum = 0;
	sum = SumArray(numbers);
	console.log(`Sum is :: ${sum}`);
}
main898()

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
};

function BinarySearch(arr, value) {
	const size = arr.length;
	let mid;
	let low = 0;
	let high = size - 1;
	while ((low <= high)) {
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
	;
	return false;
};

function main9999() {
	const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	console.log(SequentialSearch(numbers, 7));
	console.log(BinarySearch(numbers, 7));
	console.log(BinarySearchRecursive(numbers, 7));
	console.log(SequentialSearch(numbers, 11));
	console.log(BinarySearch(numbers, 11));
	console.log(BinarySearchRecursive(numbers, 11));
}
main9999()
function rotateArray(a, n, k) {
	reverseArray(a, 0, k - 1);
	reverseArray(a, k, n - 1);
	reverseArray(a, 0, n - 1);
};

function reverseArray(a, start, end) {
	if ((a != null && a instanceof Array) && (typeof start === 'number')
			&& (typeof end === 'number')) {
		for (let i = start, j = end; i < j; i++, j--) {
			const temp = a[i];
			a[i] = a[j];
			a[j] = temp;
		}
	} else
		throw new Error('invalid overload');
};

function reverseArray2(a) {
	const start = 0;
	const end = a.length - 1;
	for (let i = start, j = end; i < j; i++, j--) {
		const temp = a[i];
		a[i] = a[j];
		a[j] = temp;
	}
};

function main2() {
	const point = new coord(this);
	point.x = 10;
	point.y = 10;
	console.log(`X axis coord value is  ${point.x}`);
	console.log(`Y axis coord value is  ${point.y}`);
	return 0;
};

function main3() {
	const stud = new student(this);
	let refStud;
	refStud = stud;
	refStud.rollNo = 1;
	refStud.firstName = "john";
	refStud.lastName = "smith";
	console.log(`Roll No:   Student Name:  ${refStud.rollNo}${refStud.firstName}${refStud.lastName}`);
	return 0;
};

function main4() {
	const x = 10;
	const y = 20;
	let result;
	result = this.sum(x, y);
	console.log(`Sum is : ${result}`);
	return 0;
};

function sum(num1, num2) {
	let result;
	result = num1 + num2;
	return result;
};

function factorial(i) {
	if (i <= 1) {
		return 1;
	}
	return i * factorial(i - 1);
};

function printInt1(number) {
	const digit = String.fromCharCode((number % 10 + ('0').charCodeAt(0)));
	number = Math.floor(number / 10);
	if (number !== 0) {
		printInt1(number);
	}
	console.log(digit);
};

function main4322() {
	printInt1(50);
	console.log(printHaxInt(121, 16));
}

function printHaxInt(number, base) {
	const arr = new Array();
	printHaxIntUtil(number, base, arr);
	return arr.join("");
};

function printHaxIntUtil(number, base, arr) {
	const conversion = "0123456789ABCDEF";
	const digit = (number % base);
	number = Math.floor(number / base);
	if (number !== 0) {
		printHaxIntUtil(number, base, arr);
	}
	arr.push(conversion[digit]);
};

function fibonacci(n) {
	if (n <= 1) {
		return n;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
};

function fibonacci2 (n) {
    let first = 0;
    let second = 1;
    let temp;
    let i;

    if (n === 0)
		return first;
	else if (n === 1)
		return second;

    for (i = 2; i <= n; i++)
	{
		temp = first + second;
		first = second;
		second = temp;
	}
    return temp;
}

console.log(fibonacci(6));
console.log(fibonacci2(6));

function BinarySearchRecursive(arr, value) {
	return BinarySearchRecursiveUtil(arr,0, arr.length -1, value);
}

function BinarySearchRecursiveUtil(arr, low, high, value) {
	if(low > high)
		return false;
	
	const mid = low + Math.floor((high - low) / 2);
	if (arr[mid] === value) {
		return true;
	} else if (arr[mid] < value) {
		return BinarySearchRecursiveUtil(arr, mid + 1, high, value);
	} else {
		return BinarySearchRecursiveUtil(arr, low, mid - 1, value);
	}
};

class Coord {
	constructor(){
		this.x = 0;
		this.y = 0;
	}
	
}

class Student {
	constructor(){
		this.rollNo = 0;
	}
}



function main10() {
	const temp = Number(100);
	let temp2 = temp;
	console.log(temp);
	console.log(temp2);
	temp2 = "Hello, World!";
	temp2 = true;
}

main10();