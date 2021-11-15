class Searching
{
function linearSearchUnsorted(arr, size, value)
{
	for (let i = 0; i < size; i++)
	{
		if (value == arr[i])
		{
			return true;
		}
	}
	return false;
}

function linearSearchSorted(arr, size, value)
{
	for (let i = 0; i < size; i++)
	{
		if (value == arr[i])
		{
			return true;
		}
		else if (value < arr[i])
		{
			return false;
		}
	}
	return false;
}
// Binary Search Algorithm - Iterative Way
function binarySearch(arr, size, value)
{
	let low = 0;
	let high = size - 1;
	let mid = 0;
	while (low <= high)
	{
		mid = parseInt((low + high) / 2);
		if (arr[mid] == value)
		{
			return true;
		}
		else if (arr[mid] < value)
		{
			low = mid + 1;
		}
		else
		{
			high = mid - 1;
		}
	}
	return false;
}

//Binary Search Algorithm - Recursive Way
function binarySearchRec(arr, size, value)
{
	let low = 0;
	let high = size - 1;
	return binarySearchRecUtil(arr, low, high, value);
}

function binarySearchRecUtil(arr, low, high, value)
{
	if (low > high)
	{
		return false;
	}
	let mid = parseInt((low + high) / 2);
	if (arr[mid] == value)
	{
		return true;
	}
	else if (arr[mid] < value)
	{
		return binarySearchRecUtil(arr, mid + 1, high, value);
	}
	else
	{
		return binarySearchRecUtil(arr, low, mid - 1, value);
	}
}
function binarySearch(arr, start, end, key, isInc)
{
	let mid = 0;
	if (end < start)
	{
		return -1;
	}
	mid = parseInt((start + end) / 2);
	if (key == arr[mid])
	{
		return mid;
	}
	if (isInc != false && key < arr[mid] || isInc == false && key > arr[mid])
	{
		return binarySearch(arr, start, mid - 1, key, isInc);
	}
	else
	{
		return binarySearch(arr, mid + 1, end, key, isInc);
	}
}
function fibonacciSearch(arr, size, value)
{
/* Initialize fibonacci numbers */
let fibNMn2 = 0;
let fibNMn1 = 1;
let fibN = fibNMn2 + fibNMn1;
while (fibN < size)
{
	fibNMn2 = fibNMn1;
	fibNMn1 = fibN;
	fibN = fibNMn2 + fibNMn1;
}
let low = 0;
while (fibN > 1)
{
	// fibonacci series start with 0, 1, 1, 2
	let i = Math.min(low + fibNMn2, size - 1);
	if (arr[i] == value)
	{
		return true;
	}
	else if (arr[i] < value)
	{
		fibN = fibNMn1;
		fibNMn1 = fibNMn2;
		fibNMn2 = fibN - fibNMn1;
		low = i;
	}
	else
	{
		// for feb2 <= 1, these will be invalid.
		fibN = fibNMn2;
		fibNMn1 = fibNMn1 - fibNMn2;
		fibNMn2 = fibN - fibNMn1;
	}
}
if (arr[low + fibNMn2] == value)
{
	// above loop does not check when fibNMn2 = 0
	return true;
}
return false;
}
function main1()
{
	let first = [1, 3, 5, 7, 9, 25, 30];
	for (let i = 0; i < 32; i++)
	{
		console.log(i + " : " + fibonacciSearch(first, 7, i));
	}
}
/*
	false
	false
	false
	false
	
	true
	true
	true
	true
	*/
function swap(arr, first, second)
{
	let temp = arr[first];
	arr[first] = arr[second];
	arr[second] = temp;
}
function firstRepeated(arr, size)
{
	for (let i = 0; i < size; i++)
	{
		for (let j = i + 1; j < size; j++)
		{
			if (arr[i] == arr[j])
			{
				return arr[i];
			}
		}
	}
	return 0;
}
function firstRepeated2(arr, size)
{
	let hm = new Map();
	for (let i = 0; i < size; i++)
	{
		if (hm.has(arr[i]))
		{
			hm.set(arr[i], 2);
		}
		else
		{
			hm.set(arr[i], 1);
		}
	}
	for (let i = 0; i < size; i++)
	{
		if (hm.get(arr[i]) == 2)
		{
			return arr[i];
		}
	}
	return 0;
}
function main2()
{
	let first = [1, 3, 5, 3, 9, 1, 30];
	console.log(firstRepeated(first, first.length));
	console.log(firstRepeated2(first, first.length));
}
/*
	1
	*/
function printRepeating(arr, size)
{
	console.log("Repeating elements are ");
	for (let i = 0; i < size; i++)
	{
		for (let j = i + 1; j < size; j++)
		{
			if (arr[i] == arr[j])
			{
				console.log(" " + arr[i]);
			}
		}
	}
	console.log();
}
function printRepeating2(arr, size)
{
	arr.sort(function(a, b)
	{
		return a - b;
	});
	console.log("Repeating elements are ");
	for (let i = 1; i < size; i++)
	{
		if (arr[i] == arr[i - 1])
		{
			console.log(" " + arr[i]);
		}
	}
	console.log();
}
function printRepeating3(arr, size)
{
	let hs = new Set();
	console.log("Repeating elements are ");
	for (let i = 0; i < size; i++)
	{
		if (hs.has(arr[i]))
		{
			console.log(" " + arr[i]);
		}
		else
		{
			hs.add(arr[i]);
		}
	}
	console.log();
}
function printRepeating4(arr, size, range)
{
	let count = Array(range).fill(0);
	let i = 0;
	for (i = 0; i < size; i++)
	{
		count[i] = 0;
	}
	console.log("Repeating elements are ");
	for (i = 0; i < size; i++)
	{
		if (count[arr[i]] == 1)
		{
			console.log(" " + arr[i]);
		}
		else
		{
			count[arr[i]]++;
		}
	}
	console.log();
}
function main3()
{
	let first = [1, 3, 5, 3, 9, 1, 30];
	printRepeating(first, first.length);
	printRepeating2(first, first.length);
	printRepeating3(first, first.length);
	printRepeating4(first, first.length, 50);
}
/*
	Repeating elements are  1 3
	Repeating elements are  1 3
	Repeating elements are  1 3
	Repeating elements are  1 3
	*/
function removeDuplicates(array, size)
{
	let j = 0;
	array.sort(function(a, b)
	{
		return a - b;
	});
	for (let i = 1; i < size; i++)
	{
		if (array[i] != array[j])
		{
			j++;
			array[j] = array[i];
		}
	}
	let ret = Arrays.copyOf(array, j + 1);
	return ret;
}
function removeDuplicates2(arr, size)
{
	let hm = new Map();
	let j = 0;
	for (let i = 0; i < size; i++)
	{
		if (!hm.has(arr[i]))
		{
			arr[j] = arr[i];
			j++;
			hm.set(arr[i], 1);
		}
	}
	let ret = Arrays.copyOf(arr, j);
	return ret;
}
function main4()
{
	let first = [1, 3, 5, 3, 9, 1, 30];
	let ret = removeDuplicates(first, first.length);
	for (let i = 0; i < ret.length; i++)
	{
		console.log(ret[i] + " ");
	}
	console.log();
	let first2 = [1, 3, 5, 3, 9, 1, 30];
	let ret2 = removeDuplicates2(first2, first2.length);
	for (let i = 0; i < ret2.length; i++)
	{
		console.log(ret2[i] + " ");
	}
	console.log();
}
/*
	1 3 5 9 30 
	*/
function findMissingNumber(arr, size)
{
	let i = 0;
	let j = 0;
	let found = 0;
	for (i = 1; i <= size; i++)
	{
		found = 0;
		for (j = 0; j < size; j++)
		{
			if (arr[j] == i)
			{
				found = 1;
				break;
			}
		}
		if (found == 0)
		{
			return i;
		}
	}
	return Number.MAX_VALUE;
}
function findMissingNumber2(arr, size)
{
	arr.sort(function(a, b)
	{
		return a - b;
	});
	for (let i = 0; i < size; i++)
	{
		if (arr[i] != i + 1)
		{
			return i + 1;
		}
	}
	return size;
}
function findMissingNumber3(arr, size)
{
	let hm = new Map();
	for (let i = 0; i < size; i++)
	{
		hm.set(arr[i], 1);
	}
	for (let i = 1; i <= size; i++)
	{
		if (!hm.has(i))
		{
			return i;
		}
	}
	return Number.MAX_VALUE;
}
function findMissingNumber4(arr, size)
{
	let count = Array(size + 1).fill(0);
	Arrays.fill(count, -1);
	for (let i = 0; i < size; i++)
	{
		count[arr[i] - 1] = 1;
	}
	for (let i = 0; i <= size; i++)
	{
		if (count[i] == -1)
		{
			return i + 1;
		}
	}
	return Number.MAX_VALUE;
}
function findMissingNumber5(arr, size)
{
	let sum = 0;
	// Element value range is from 1 to size+1.
	for (let i = 1; i < (size + 2); i++)
	{
		sum += i;
	}
	for (let i = 0; i < size; i++)
	{
		sum -= arr[i];
	}
	return sum;
}
function findMissingNumber6(arr, size)
{
	for (let i = 0; i < size; i++)
	{
		arr[(arr[i]) % (size) - 1] += size + 1;
	}
	for (let i = 0; i < size; i++)
	{
		if (arr[i] < size + 1)
		{
			return i + 1;
		}
	}
	return Number.MAX_VALUE;
}
function findMissingNumber7(arr, size)
{
	let i = 0;
	let xorSum = 0;
	// Element value range is from 1 to size+1.
	for (i = 1; i < (size + 2); i++)
	{
		xorSum ^= i;
	}
	// loop through the array and get the XOR of elements
	for (i = 0; i < size; i++)
	{
		xorSum ^= arr[i];
	}
	return xorSum;
}
function findMissingNumber8(arr, size)
{
	let st = new Set();
	let i = 0;
	while (i < size)
	{
		st.add(arr[i]);
		i += 1;
	}
	i = 1;
	while (i <= size)
	{
		if (st.has(i) == false)
		{
			return i;
		}
		i += 1;
	}
	console.log("NoNumberMissing");
	return -1;
}
function main5()
{
	let first = [1, 5, 4, 3, 2, 7, 8, 9];
	console.log(findMissingNumber(first, first.length));
	console.log(findMissingNumber2(first, first.length));
	console.log(findMissingNumber3(first, first.length));
	console.log(findMissingNumber4(first, first.length));
	console.log(findMissingNumber5(first, first.length));
	console.log(findMissingNumber7(first, first.length));
	console.log(findMissingNumber8(first, first.length));
	console.log(findMissingNumber6(first, first.length));
}
/*
	6
	6
	6
	*/
function missingValues(arr, size)
{
	let max = arr[0];
	let min = arr[0];
	for (let i = 1; i < size; i++)
	{
		if (max < arr[i])
		{
			max = arr[i];
		}
		if (min > arr[i])
		{
			min = arr[i];
		}
	}
	let found = false;
	for (let i = min + 1; i < max; i++)
	{
		found = false;
		for (let j = 0; j < size; j++)
		{
			if (arr[j] == i)
			{
				found = true;
				break;
			}
		}
		if (!found)
		{
			console.log(i + " ");
		}
	}
	console.log();
}
function missingValues2(arr, size)
{
	arr.sort(function(a, b)
	{
		return a - b;
	});
	let value = arr[0];
	let i = 0;
	while (i < size)
	{
		if (value == arr[i])
		{
			value += 1;
			i += 1;
		}
		else
		{
			console.log(value + " ");
			value += 1;
		}
	}
	console.log();
}
function missingValues3(arr, size)
{
	let ht = new Set();
	let minVal = 999999;
	let maxVal = -999999;
	for (let i = 0; i < size; i++)
	{
		ht.add(arr[i]);
		if (minVal > arr[i])
		{
			minVal = arr[i];
		}
		if (maxVal < arr[i])
		{
			maxVal = arr[i];
		}
	}
	for (let i = minVal; i < maxVal + 1; i++)
	{
		if (ht.has(i) == false)
		{
			console.log(i + " ");
		}
	}
	console.log();
}
function main6()
{
	let arr = [11, 14, 13, 17, 21, 18, 19, 23, 24];
	let size = arr.length;
	missingValues(arr, size);
	missingValues2(arr, size);
	missingValues3(arr, size);
}
/*
	12 15 16 20 22 
	12 15 16 20 22 
	*/
function oddCount(arr, size)
{
	let xorSum = 0;
	for (let i = 0; i < size; i++)
	{
		xorSum ^= arr[i];
	}
	console.log("Odd values: " + xorSum);
}
function oddCount2(arr, size)
{
	let hm = new Map();
	for (let i = 0; i < size; i++)
	{
		if (hm.has(arr[i]))
		{
			hm.delete(arr[i]);
		}
		else
		{
			hm.set(arr[i], 1);
		}
	}
	console.log("Odd values: ");
	for (const key of hm.keys())
	{
		console.log(key + " ");
	}
	console.log();
	console.log("Odd count is :: " + hm.size);
}
function oddCount3(arr, size)
{
	let xorSum = 0;
	let first = 0;
	let second = 0;
	let setBit = 0;
	/*
		* xor of all elements in arr[] even occurrence will cancel each other. sum will
		* contain sum of two odd elements.
		*/
	for (let i = 0; i < size; i++)
	{
		xorSum = xorSum ^ arr[i];
	}
	/* Rightmost set bit. */
	setBit = xorSum & ~(xorSum - 1);
	/*
		* Dividing elements in two group: Elements having setBit bit as 1. Elements
		* having setBit bit as 0. Even elements cancelled themselves if group and we
		* get our numbers.
		*/
	for (let i = 0; i < size; i++)
	{
		if ((arr[i] & setBit) != 0)
		{
			first ^= arr[i];
		}
		else
		{
			second ^= arr[i];
		}
	}
	console.log("Odd values: " + first + " " + second);
}
function main7()
{
	let arr = [10, 25, 30, 10, 15, 25, 15];
	let size = arr.length;
	oddCount(arr, size);
	oddCount2(arr, size);
	let arr2 = [10, 25, 30, 10, 15, 25, 15, 40];
	let size2 = arr2.length;
	oddCount3(arr2, size2);
}
/*
	30 40 
	Odd count is :: 2
	30 40
	*/
function sumDistinct(arr, size)
{
	let sum = 0;
	arr.sort(function(a, b)
	{
		return a - b;
	});
	for (let i = 0; i < (size - 1); i++)
	{
		if (arr[i] != arr[i + 1])
		{
			sum += arr[i];
		}
	}
	sum += arr[size - 1];
	console.log("sum : " + sum);
}
function main8()
{
	let arr = [1, 2, 3, 1, 1, 4, 5, 6];
	let size = arr.length;
	sumDistinct(arr, size);
}
/*
	sum : 21
	*/
function minAbsSumPair(arr, size)
{
	let l = 0;
	let r = 0;
	let minSum = 0;
	let sum = 0;
	let minFirst = 0;
	let minSecond = 0;
	// Array should have at least two elements
	if (size < 2)
	{
		console.log("Invalid Input");
		return;
	}
	// Initialization of values
	minFirst = 0;
	minSecond = 1;
	minSum = Math.abs(arr[0] + arr[1]);
	for (l = 0; l < size - 1; l++)
	{
		for (r = l + 1; r < size; r++)
		{
			sum = Math.abs(arr[l] + arr[r]);
			if (sum < minSum)
			{
				minSum = sum;
				minFirst = l;
				minSecond = r;
			}
		}
	}
	console.log("Minimum sum elements are : " + arr[minFirst] + " , " + arr[minSecond]);
}
function minAbsSumPair2(arr, size)
{
	let l = 0;
	let r = 0;
	let minSum = 0;
	let sum = 0;
	let minFirst = 0;
	let minSecond = 0;
	// Array should have at least two elements
	if (size < 2)
	{
		console.log("Invalid Input");
		return;
	}
	arr.sort(function(a, b)
	{
		return a - b;
	});
	// Initialization of values
	minFirst = 0;
	minSecond = size - 1;
	minSum = Math.abs(arr[minFirst] + arr[minSecond]);
	for (l = 0, r = size - 1; l < r;)
	{
		sum = (arr[l] + arr[r]);
		if (Math.abs(sum) < minSum)
		{
			minSum = Math.abs(sum);
			minFirst = l;
			minSecond = r;
		}
		if (sum < 0)
		{
			l++;
		}
		else if (sum > 0)
		{
			r--;
		}
		else
		{
			break;
		}
	}
	console.log("Minimum sum elements are : " + arr[minFirst] + " , " + arr[minSecond]);
}
function main9()
{
	let first = [1, 5, -10, 3, 2, -6, 8, 9, 6];
	minAbsSumPair2(first, first.length);
	minAbsSumPair(first, first.length);
}
/*
	Minimum sum elements are : -6 , 6
	Minimum sum elements are : -6 , 6
	*/
function findPair(arr, size, value)
{
	for (let i = 0; i < size; i++)
	{
		for (let j = i + 1; j < size; j++)
		{
			if ((arr[i] + arr[j]) == value)
			{
				console.log("The pair is : " + arr[i] + ", " + arr[j]);
				return true;
			}
		}
	}
	return false;
}
function findPair2(arr, size, value)
{
	let first = 0;
	let second = size - 1;
	let curr = 0;
	arr.sort(function(a, b)
	{
		return a - b;
	});
	while (first < second)
	{
		curr = arr[first] + arr[second];
		if (curr == value)
		{
			console.log("The pair is " + arr[first] + ", " + arr[second]);
			return true;
		}
		else if (curr < value)
		{
			first++;
		}
		else
		{
			second--;
		}
	}
	return false;
}
function findPair3(arr, size, value)
{
	let hs = new Set();
	for (let i = 0; i < size; i++)
	{
		if (hs.has(value - arr[i]))
		{
			console.log("The pair is : " + arr[i] + ", " + (value - arr[i]));
			return true;
		}
		hs.add(arr[i]);
	}
	return false;
}
function findPair4(arr, size, range, value)
{
	let count = Array(range + 1).fill(0);
	Arrays.fill(count, 0);
	for (let i = 0; i < size; i++)
	{
		if (count[value - arr[i]] > 0)
		{
			console.log("The pair is : " + arr[i] + ", " + (value - arr[i]));
			return true;
		}
		count[arr[i]] += 1;
	}
	return false;
}
function main10()
{
	let first = [1, 5, 4, 3, 2, 7, 8, 9, 6];
	console.log(findPair(first, first.length, 8));
	console.log(findPair2(first, first.length, 8));
	console.log(findPair3(first, first.length, 8));
	console.log(findPair4(first, first.length, 9, 8));
}
/*
	The pair is : 1, 7
	true
	The pair is 1, 7
	true
	The pair is : 5, 3
	true
	The pair is : 5, 3
	true
	*/
function findPairTwoLists(arr1, size1, arr2, size2, value)
{
	for (let i = 0; i < size1; i++)
	{
		for (let j = 0; j < size2; j++)
		{
			if ((arr1[i] + arr2[j]) == value)
			{
				console.log("The pair is : " + arr1[i] + ", " + arr2[j]);
				return true;
			}
		}
	}
	return false;
}
function findPairTwoLists2(arr1, size1, arr2, size2, value)
{
	arr2.sort(function(a, b)
	{
		return a - b;
	});
	for (let i = 0; i < size1; i++)
	{
		if (binarySearch(arr2, size2, value - arr1[i]))
		{
			console.log("The pair is " + arr1[i] + ", " + (value - arr1[i]));
		}
		return true;
	}
	return false;
}
function findPairTwoLists3(arr1, size1, arr2, size2, value)
{
	let first = 0;
	let second = size2 - 1;
	let curr = 0;
	arr1.sort(function(a, b)
	{
		return a - b;
	});
	arr2.sort(function(a, b)
	{
		return a - b;
	});
	while (first < size1 && second >= 0)
	{
		curr = arr1[first] + arr2[second];
		if (curr == value)
		{
			console.log("The pair is " + arr1[first] + ", " + arr2[second]);
			return true;
		}
		else if (curr < value)
		{
			first++;
		}
		else
		{
			second--;
		}
	}
	return false;
}
function findPairTwoLists4(arr1, size1, arr2, size2, value)
{
	let hs = new Set();
	for (let i = 0; i < size2; i++)
	{
		hs.add(arr2[i]);
	}
	for (let i = 0; i < size1; i++)
	{
		if (hs.has(value - arr1[i]))
		{
			console.log("The pair is : " + arr1[i] + ", " + (value - arr1[i]));
			return true;
		}
	}
	return false;
}
function findPairTwoLists5(arr1, size1, arr2, size2, range, value)
{
	let count = Array(range + 1).fill(0);
	Arrays.fill(count, 0);
	for (let i = 0; i < size2; i++)
	{
		count[arr2[i]] = 1;
	}
	for (let i = 0; i < size1; i++)
	{
		if (count[value - arr1[i]] != 0)
		{
			console.log("The pair is : " + arr1[i] + ", " + (value - arr1[i]));
			return true;
		}
	}
	return false;
}
function main10A()
{
	let first = [1, 5, 4, 3, 2, 7, 8, 9, 6];
	let second = [1, 5, 4, 3, 2, 7, 8, 9, 6];
	console.log(findPairTwoLists(first, first.length, second, second.length, 8));
	console.log(findPairTwoLists2(first, first.length, second, second.length, 8));
	console.log(findPairTwoLists3(first, first.length, second, second.length, 8));
	console.log(findPairTwoLists4(first, first.length, second, second.length, 8));
	console.log(findPairTwoLists5(first, first.length, second, second.length, 9, 8));
}
/*
The pair is : 1, 7
true
The pair is 1, 7
true
The pair is 1, 7
true
The pair is : 1, 7
true
The pair is : 1, 7
true    */
function findDifference(arr, size, value)
{
	for (let i = 0; i < size; i++)
	{
		for (let j = i + 1; j < size; j++)
		{
			if (Math.abs(arr[i] - arr[j]) == value)
			{
				console.log("The pair is:: " + arr[i] + " & " + arr[j]);
				return true;
			}
		}
	}
	return false;
}
function findDifference2(arr, size, value)
{
	let first = 0;
	let second = 0;
	let diff = 0;
	arr.sort(function(a, b)
	{
		return a - b;
	});
	while (first < size && second < size)
	{
		diff = Math.abs(arr[first] - arr[second]);
		if (diff == value)
		{
			console.log("The pair is::" + arr[first] + " & " + arr[second]);
			return true;
		}
		else if (diff > value)
		{
			first += 1;
		}
		else
		{
			second += 1;
		}
	}
	return false;
}
function main11()
{
	let first = [1, 5, 4, 3, 2, 7, 8, 9, 6];
	console.log(findDifference(first, first.length, 6));
	console.log(findDifference2(first, first.length, 6));
}
/*
	The pair is:: 1 & 7
	true
	The pair is::1 & 7
	true
	*/
function findMinDiff(arr, size)
{
	let diff = Number.MAX_VALUE;
	for (let i = 0; i < size; i++)
	{
		for (let j = i + 1; j < size; j++)
		{
			let value = Math.abs(arr[i] - arr[j]);
			if (diff > value)
			{
				diff = value;
			}
		}
	}
	return diff;
}
function findMinDiff2(arr, size)
{
	arr.sort(function(a, b)
	{
		return a - b;
	});
	let diff = Number.MAX_VALUE;
	for (let i = 0; i < (size - 1); i++)
	{
		if ((arr[i + 1] - arr[i]) < diff)
		{
			diff = arr[i + 1] - arr[i];
		}
	}
	return diff;
}
function main12()
{
	let second = [1, 6, 4, 19, 17, 20];
	console.log("findMinDiff : " + findMinDiff(second, second.length));
	console.log("findMinDiff : " + findMinDiff2(second, second.length));
}
/*
	findMinDiff : 1
	*/
function minDiffPair(arr1, size1, arr2, size2)
{
	let diff = Number.MAX_VALUE;
	let first = 0;
	let second = 0;
	for (let i = 0; i < size1; i++)
	{
		for (let j = 0; j < size2; j++)
		{
			let value = Math.abs(arr1[i] - arr2[j]);
			if (diff > value)
			{
				diff = value;
				first = arr1[i];
				second = arr2[j];
			}
		}
	}
	console.log("The pair is :: " + first + " & " + second);
	console.log("Minimum difference is :: " + diff);
	return diff;
}
function minDiffPair2(arr1, size1, arr2, size2)
{
	let minDiff = Number.MAX_VALUE;
	let i = 0;
	let j = 0;
	let first = 0;
	let second = 0;
	let diff = 0;
	arr1.sort(function(a, b)
	{
		return a - b;
	});
	arr2.sort(function(a, b)
	{
		return a - b;
	});
	while (i < size1 && j < size2)
	{
		diff = Math.abs(arr1[i] - arr2[j]);
		if (minDiff > diff)
		{
			minDiff = diff;
			first = arr1[i];
			second = arr2[j];
		}
		if (arr1[i] < arr2[j])
		{
			i += 1;
		}
		else
		{
			j += 1;
		}
	}
	console.log("The pair is :: " + first + " & " + second);
	console.log("Minimum difference is :: " + minDiff);
	return minDiff;
}
function main13()
{
	let first = [1, 5, 4, 3, 2, 7, 8, 9, 6];
	let second = [6, 4, 19, 17, 20];
	minDiffPair(first, first.length, second, second.length);
	minDiffPair(first, first.length, second, second.length);
}
/*
	The pair is :: 4 4
	Minimum difference is :: 0
	*/


function closestPair(arr, size, value)
{
	let diff = 999999;
	let first = -1;
	let second = -1;
	let curr = 0;
	for (let i = 0; i < size; i++)
	{
		for (let j = i + 1; j < size; j++)
		{
			curr = Math.abs(value - (arr[i] + arr[j]));
			if (curr < diff)
			{
				diff = curr;
				first = arr[i];
				second = arr[j];
			}
		}
	}
	console.log("closest pair is :: " + first + " " + second);
}
function closestPair2(arr, size, value)
{
	let first = 0;
	let second = 0;
	let start = 0;
	let stop = size - 1;
	let diff = 0;
	let curr = 0;
	arr.sort(function(a, b)
	{
		return a - b;
	});
	diff = 9999999;
	while (start < stop)
	{
		curr = (value - (arr[start] + arr[stop]));
		if (Math.abs(curr) < diff)
		{
			diff = Math.abs(curr);
			first = arr[start];
			second = arr[stop];
		}
		if (curr == 0)
		{
			break;
		}
		else if (curr > 0)
		{
			start += 1;
		}
		else
		{
			stop -= 1;
		}
	}
	console.log("closest pair is :: " + first + " " + second);
}
function main14()
{
	let first = [10, 20, 3, 4, 50, 80];
	closestPair(first, first.length, 47);
	closestPair2(first, first.length, 47);
}
/*
	closest pair is :: 3 50
	closest pair is :: 3 50
	*/
function sumPairRestArray(arr, size)
{
	let total = 0;
	let low = 0;
	let high = 0;
	let curr = 0;
	let value = 0;
	arr.sort(function(a, b)
	{
		return a - b;
	});
	total = 0;
	for (let i = 0; i < size; i++)
	{
		total += arr[i];
	}
	value = parseInt(total / 2);
	low = 0;
	high = size - 1;
	while (low < high)
	{
		curr = arr[low] + arr[high];
		if (curr == value)
		{
			console.log("Pair is :: " + arr[low] + " " + arr[high]);
			return true;
		}
		else if (curr < value)
		{
			low += 1;
		}
		else
		{
			high -= 1;
		}
	}
	return false;
}
function main15()
{
	let first = [1, 2, 4, 8, 16, 15];
	console.log(sumPairRestArray(first, first.length));
}
/*
	Pair is :: 8 15
	true
	*/
function zeroSumTriplets(arr, size)
{
	for (let i = 0; i < (size - 2); i++)
	{
		for (let j = i + 1; j < (size - 1); j++)
		{
			for (let k = j + 1; k < size; k++)
			{
				if (arr[i] + arr[j] + arr[k] == 0)
				{
					console.log("Triplet:: " + arr[i] + " " + arr[j] + " " + arr[k]);
				}
			}
		}
	}
}
function zeroSumTriplets2(arr, size)
{
	let start = 0;
	let stop = 0;
	arr.sort(function(a, b)
	{
		return a - b;
	});
	for (let i = 0; i < (size - 2); i++)
	{
		start = i + 1;
		stop = size - 1;
		while (start < stop)
		{
			if (arr[i] + arr[start] + arr[stop] == 0)
			{
				console.log("Triplet :: " + arr[i] + " " + arr[start] + " " + arr[stop]);
				start += 1;
				stop -= 1;
			}
			else if (arr[i] + arr[start] + arr[stop] > 0)
			{
				stop -= 1;
			}
			else
			{
				start += 1;
			}
		}
	}
}
function main16()
{
	let first = [0, -1, 2, -3, 1];
	zeroSumTriplets(first, first.length);
	zeroSumTriplets2(first, first.length);
}
/*
	Triplet:: 0 -1 1
	Triplet:: 2 -3 1
	Triplet :: -3 1 2
	Triplet :: -1 0 1
	*/
function findTriplet(arr, size, value)
{
	for (let i = 0; i < (size - 2); i++)
	{
		for (let j = i + 1; j < (size - 1); j++)
		{
			for (let k = j + 1; k < size; k++)
			{
				if ((arr[i] + arr[j] + arr[k]) == value)
				{
					console.log("Triplet :: " + arr[i] + " " + arr[j] + " " + arr[k]);
				}
			}
		}
	}
}
function findTriplet2(arr, size, value)
{
	let start = 0;
	let stop = 0;
	arr.sort(function(a, b)
	{
		return a - b;
	});
	for (let i = 0; i < size - 2; i++)
	{
		start = i + 1;
		stop = size - 1;
		while (start < stop)
		{
			if (arr[i] + arr[start] + arr[stop] == value)
			{
				console.log("Triplet ::" + arr[i] + " " + arr[start] + " " + arr[stop]);
				start += 1;
				stop -= 1;
			}
			else if (arr[i] + arr[start] + arr[stop] > value)
			{
				stop -= 1;
			}
			else
			{
				start += 1;
			}
		}
	}
}
function main17()
{
	let first = [1, 5, 15, 6, 9, 8];
	findTriplet(first, first.length, 22);
	findTriplet2(first, first.length, 22);
}
/*
	Triplet :: 1 15 6
	Triplet :: 5 9 8
	Triplet ::1 6 15
	Triplet ::5 8 9
	*/
function abcTriplet(arr, size)
{
	for (let i = 0; i < size - 1; i++)
	{
		for (let j = i + 1; j < size; j++)
		{
			for (let k = 0; k < size; k++)
			{
				if (k != i && k != j && arr[i] + arr[j] == arr[k])
				{
					console.log("abcTriplet:: " + arr[i] + " " + arr[j] + " " + arr[k]);
				}
			}
		}
	}
}
function abcTriplet2(arr, size)
{
	let start = 0;
	let stop = 0;
	arr.sort(function(a, b)
	{
		return a - b;
	});
	for (let i = 0; i < size; i++)
	{
		start = 0;
		stop = size - 1;
		while (start < stop)
		{
			if (arr[i] == arr[start] + arr[stop])
			{
				console.log("abcTriplet:: " + arr[start] + " " + arr[stop] + " " + arr[i]);
				start += 1;
				stop -= 1;
			}
			else if (arr[i] < arr[start] + arr[stop])
			{
				stop -= 1;
			}
			else
			{
				start += 1;
			}
		}
	}
}
function main18()
{
	let first = [1, 5, 15, 6, 9, 8];
	abcTriplet(first, first.length);
	abcTriplet2(first, first.length);
}
/*
	abcTriplet:: 1 5 6
	abcTriplet:: 1 8 9
	abcTriplet:: 6 9 15
	*/
function smallerThenTripletCount(arr, size, value)
{
	let count = 0;
	for (let i = 0; i < size - 1; i++)
	{
		for (let j = i + 1; j < size; j++)
		{
			for (let k = j + 1; k < size; k++)
			{
				if (arr[i] + arr[j] + arr[k] < value)
				{
					count += 1;
				}
			}
		}
	}
	console.log("smallerThenTripletCount:: " + count);
}
function smallerThenTripletCount2(arr, size, value)
{
	let start = 0;
	let stop = 0;
	let count = 0;
	arr.sort(function(a, b)
	{
		return a - b;
	});
	for (let i = 0; i < (size - 2); i++)
	{
		start = i + 1;
		stop = size - 1;
		while (start < stop)
		{
			if (arr[i] + arr[start] + arr[stop] >= value)
			{
				stop -= 1;
			}
			else
			{
				count += stop - start;
				start += 1;
			}
		}
	}
	console.log("smallerThenTripletCount:: " + count);
}
function main19()
{
	let first = [-2, -1, 0, 1];
	smallerThenTripletCount(first, first.length, 2);
	smallerThenTripletCount(first, first.length, 2);
}
/*
	4
	4
	*/
function apTriplets(arr, size)
{
	let i = 0;
	let j = 0;
	let k = 0;
	for (i = 1; i < size - 1; i++)
	{
		j = i - 1;
		k = i + 1;
		while (j >= 0 && k < size)
		{
			if (arr[j] + arr[k] == 2 * arr[i])
			{
				console.log("AP Triplet:: " + arr[j] + " " + arr[i] + " " + arr[k]);
				k += 1;
				j -= 1;
			}
			else if (arr[j] + arr[k] < 2 * arr[i])
			{
				k += 1;
			}
			else
			{
				j -= 1;
			}
		}
	}
}
function main20()
{
	let arr = [2, 4, 10, 12, 14, 18, 36];
	apTriplets(arr, arr.length);
}
/*
	AP Triplet:: 2 10 18
	AP Triplet:: 10 12 14
	AP Triplet:: 10 14 18
	*/
function gpTriplets(arr, size)
{
	let i = 0;
	let j = 0;
	let k = 0;
	for (i = 1; i < size - 1; i++)
	{
		j = i - 1;
		k = i + 1;
		while (j >= 0 && k < size)
		{
			if (arr[j] * arr[k] == arr[i] * arr[i])
			{
				console.log("GP Triplet:: " + arr[j] + " " + arr[i] + " " + arr[k]);
				k += 1;
				j -= 1;
			}
			else if (arr[j] + arr[k] < 2 * arr[i])
			{
				k += 1;
			}
			else
			{
				j -= 1;
			}
		}
	}
}
function main21()
{
	let arr = [1, 2, 4, 8, 16];
	gpTriplets(arr, arr.length);
}
/*
	GP Triplet:: 1 2 4
	GP Triplet:: 2 4 8
	GP Triplet:: 1 4 16
	GP Triplet:: 4 8 16
	*/
function numberOfTriangles(arr, size)
{
	let i = 0;
	let j = 0;
	let k = 0;
	let count = 0;
	for (i = 0; i < (size - 2); i++)
	{
		for (j = i + 1; j < (size - 1); j++)
		{
			for (k = j + 1; k < size; k++)
			{
				if (arr[i] + arr[j] > arr[k])
				{
					count += 1;
				}
			}
		}
	}
	return count;
}
function numberOfTriangles2(arr, size)
{
	let i = 0;
	let j = 0;
	let k = 0;
	let count = 0;
	arr.sort(function(a, b)
	{
		return a - b;
	});
	for (i = 0; i < (size - 2); i++)
	{
		k = i + 2;
		for (j = i + 1; j < (size - 1); j++)
		{
			/*
				* if sum of arr[i] & arr[j] is greater arr[k] then sum of arr[i] & arr[j + 1]
				* is also greater than arr[k] this improvement make algo O(n2)
				*/
			while (k < size && arr[i] + arr[j] > arr[k])
			{
				k += 1;
			}
			count += k - j - 1;
		}
	}
	return count;
}
function main22()
{
	let arr = [1, 2, 3, 4, 5];
	console.log(numberOfTriangles(arr, arr.length));
	console.log(numberOfTriangles2(arr, arr.length));
}
/*
	3
	3
	*/
function getMax(arr, size)
{
	let max = arr[0];
	let count = 1;
	let maxCount = 1;
	for (let i = 0; i < size; i++)
	{
		count = 1;
		for (let j = i + 1; j < size; j++)
		{
			if (arr[i] == arr[j])
			{
				count++;
			}
		}
		if (count > maxCount)
		{
			max = arr[i];
			maxCount = count;
		}
	}
	return max;
}
function getMax2(arr, size)
{
	let max = arr[0];
	let maxCount = 1;
	let curr = arr[0];
	let currCount = 1;
	arr.sort(function(a, b)
	{
		return a - b;
	});
	// Sort(arr,size);
	for (let i = 1; i < size; i++)
	{
		if (arr[i] == arr[i - 1])
		{
			currCount++;
		}
		else
		{
			currCount = 1;
			curr = arr[i];
		}
		if (currCount > maxCount)
		{
			maxCount = currCount;
			max = curr;
		}
	}
	return max;
}
function getMax3(arr, size, range)
{
	let max = arr[0];
	let maxCount = 1;
	let count = Array(range).fill(0);
	for (let i = 0; i < size; i++)
	{
		count[arr[i]]++;
		if (count[arr[i]] > maxCount)
		{
			maxCount = count[arr[i]];
			max = arr[i];
		}
	}
	return max;
}
function main23()
{
	let first = [1, 30, 5, 13, 9, 31, 5];
	console.log(getMax(first, first.length));
	console.log(getMax2(first, first.length));
	console.log(getMax3(first, first.length, 50));
}
/*
5
5
5
*/
function getMajority(arr, size)
{
	let max = 0;
	let count = 0;
	let maxCount = 0;
	for (let i = 0; i < size; i++)
	{
		for (let j = i + 1; j < size; j++)
		{
			if (arr[i] == arr[j])
			{
				count++;
			}
		}
		if (count > maxCount)
		{
			max = arr[i];
			maxCount = count;
		}
	}
	if (maxCount > parseInt(size / 2))
	{
		return max;
	}
	else
	{
		return 0;
	}
}
function getMajority2(arr, size)
{
	let majIndex = parseInt(size / 2);
	let count = 1;
	let candidate = 0;
	arr.sort(function(a, b)
	{
		return a - b;
	});
	candidate = arr[majIndex];
	count = 0;
	for (let i = 0; i < size; i++)
	{
		if (arr[i] == candidate)
		{
			count++;
		}
	}
	if (count > parseInt(size / 2))
	{
		return arr[majIndex];
	}
	else
	{
		return Number.MIN_VALUE;
	}
}
function getMajority3(arr, size)
{
	let majIndex = 0;
	let count = 1;
	let i = 0;
	let candidate = 0;
	for (i = 1; i < size; i++)
	{
		if (arr[majIndex] == arr[i])
		{
			count++;
		}
		else
		{
			count--;
		}
		if (count == 0)
		{
			majIndex = i;
			count = 1;
		}
	}
	candidate = arr[majIndex];
	count = 0;
	for (i = 0; i < size; i++)
	{
		if (arr[i] == candidate)
		{
			count++;
		}
	}
	if (count > parseInt(size / 2))
	{
		return arr[majIndex];
	}
	else
	{
		return 0;
	}
}
function main24()
{
	let first = [1, 5, 5, 13, 5, 31, 5];
	console.log(getMajority(first, first.length));
	console.log(getMajority2(first, first.length));
	console.log(getMajority3(first, first.length));
}
/*
5
5
5
*/
function getMedian(arr, size)
{
	arr.sort(function(a, b)
	{
		return a - b;
	});
	return arr[parseInt(size / 2)];
}
function getMedian2(arr, size)
{
	quickSelectUtil(arr, 0, size - 1, parseInt(size / 2));
	return arr[parseInt(size / 2)];
}
function main25()
{
	let first = [1, 5, 6, 6, 6, 6, 6, 6, 7, 8, 10, 13, 20, 30];
	console.log(getMedian(first, first.length));
	console.log(getMedian(first, first.length));
}
/*
	6
	*/
function searchBitonicArrayMax(arr, size)
{
	for (let i = 0; i < size - 2; i++)
	{
		if (arr[i] > arr[i + 1])
		{
			return arr[i];
		}
	}
	console.log("error not a bitonic array");
	return 0;
}
function searchBitonicArrayMax2(arr, size)
{
	let start = 0;
	let end = size - 1;
	let mid = parseInt((start + end) / 2);
	let maximaFound = 0;
	if (size < 3)
	{
		console.log("error");
		return 0;
	}
	while (start <= end)
	{
		mid = parseInt((start + end) / 2);
		if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid])
		{
			// maxima
			maximaFound = 1;
			break;
		}
		else if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1])
		{
			// increasing
			start = mid + 1;
		}
		else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1])
		{
			// decreasing
			end = mid - 1;
		}
		else
		{
			break;
		}
	}
	if (maximaFound == 0)
	{
		console.log("error not a bitonic array");
		return 0;
	}
	return arr[mid];
}
function searchBitonicArray(arr, size, key)
{
	let max = findMaxBitonicArray(arr, size);
	let k = binarySearch(arr, 0, max, key, true);
	if (k != -1)
	{
		return k;
	}
	else
	{
		return binarySearch(arr, max + 1, size - 1, key, false);
	}
}
function findMaxBitonicArray(arr, size)
{
	let start = 0;
	let end = size - 1;
	let mid = 0;
	if (size < 3)
	{
		console.log("error");
		return -1;
	}
	while (start <= end)
	{
		mid = parseInt((start + end) / 2);
		if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid])
		{
			// maxima
			return mid;
		}
		else if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1])
		{
			// increasing
			start = mid + 1;
		}
		else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1])
		{
			// increasing
			end = mid - 1;
		}
		else
		{
			break;
		}
	}
	console.log("error");
	return -1;
}
function main26()
{
	let first = [1, 5, 10, 13, 20, 30, 8, 7, 6];
	console.log(searchBitonicArrayMax(first, first.length));
	console.log(searchBitonicArrayMax2(first, first.length));
	console.log(searchBitonicArray(first, first.length, 7));
}
/*
		30
		7
		*/
function findKeyCount(arr, size, key)
{
	let count = 0;
	for (let i = 0; i < size; i++)
	{
		if (arr[i] == key)
		{
			count++;
		}
	}
	return count;
}
function findFirstIndex(arr, start, end, key)
{
	let mid = 0;
	if (end < start)
	{
		return -1;
	}
	mid = parseInt((start + end) / 2);
	if (key == arr[mid] && (mid == start || arr[mid - 1] != key))
	{
		return mid;
	}
	if (key <= arr[mid])
	{
		return findFirstIndex(arr, start, mid - 1, key);
	}
	else
	{
		return findFirstIndex(arr, mid + 1, end, key);
	}
}
function findLastIndex(arr, start, end, key)
{
	if (end < start)
	{
		return -1;
	}
	let mid = parseInt((start + end) / 2);
	if (key == arr[mid] && (mid == end || arr[mid + 1] != key))
	{
		return mid;
	}
	if (key < arr[mid])
	{
		return findLastIndex(arr, start, mid - 1, key);
	}
	else
	{
		return findLastIndex(arr, mid + 1, end, key);
	}
}
function findKeyCount2(arr, size, key)
{
	let firstIndex = 0;
	let lastIndex = 0;
	firstIndex = findFirstIndex(arr, 0, size - 1, key);
	lastIndex = findLastIndex(arr, 0, size - 1, key);
	return (lastIndex - firstIndex + 1);
}
function main27()
{
	let first = [1, 5, 10, 13, 20, 30, 8, 7, 6];
	console.log(findKeyCount(first, first.length, 6));
	console.log(findKeyCount2(first, first.length, 6));
}
/*
		1
		1
		*/
/* Using binary search method. */
function firstIndex(arr, size, low, high, value)
{
	let mid = 0;
	if (high >= low)
	{
		mid = parseInt((low + high) / 2);
	}
	/*
		* Find first occurrence of value, either it should be the first element of the
		* array or the value before it is smaller than it.
		*/
	if ((mid == 0 || arr[mid - 1] < value) && (arr[mid] == value))
	{
		return mid;
	}
	else if (arr[mid] < value)
	{
		return firstIndex(arr, size, mid + 1, high, value);
	}
	else
	{
		return firstIndex(arr, size, low, mid - 1, value);
	}
}
function isMajority2(arr, size)
{
	let majority = arr[parseInt(size / 2)];
	let i = firstIndex(arr, size, 0, size - 1, majority);
	/*
		* we are using majority element form array so we will get some valid index
		* always.
		*/
	if (((i + parseInt(size / 2)) <= (size - 1)) && arr[i + parseInt(size / 2)] == majority)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function isMajority(arr, size)
{
	let count = 0;
	let mid = arr[parseInt(size / 2)];
	for (let i = 0; i < size; i++)
	{
		if (arr[i] == mid)
		{
			count += 1;
		}
	}
	if (count > parseInt(size / 2))
	{
		return true;
	}
	return false;
}
function main28()
{
	let arr = [3, 3, 3, 3, 4, 5, 10];
	console.log(isMajority(arr, arr.length));
	console.log(isMajority2(arr, arr.length));
}
/*
		true
		*/
function maxProfit(stocks, size)
{
	let maxProfit = 0;
	let buy = 0;
	let sell = 0;
	for (let i = 0; i < size - 1; i++)
	{
		for (let j = i + 1; j < size; j++)
		{
			if (maxProfit < stocks[j] - stocks[i])
			{
				maxProfit = stocks[j] - stocks[i];
				buy = i;
				sell = j;
			}
		}
	}
	console.log("Purchase day is " + buy + " at price " + stocks[buy]);
	console.log("Sell day is " + sell + " at price " + stocks[sell]);
	return maxProfit;
}
function maxProfit2(stocks, size)
{
	let buy = 0;
	let sell = 0;
	let curMin = 0;
	let currProfit = 0;
	let maxProfit = 0;
	for (let i = 0; i < size; i++)
	{
		if (stocks[i] < stocks[curMin])
		{
			curMin = i;
		}
		currProfit = stocks[i] - stocks[curMin];
		if (currProfit > maxProfit)
		{
			buy = curMin;
			sell = i;
			maxProfit = currProfit;
		}
	}
	console.log("Purchase day is " + buy + " at price " + stocks[buy]);
	console.log("Sell day is " + sell + " at price " + stocks[sell]);
	return maxProfit;
}
function main29()
{
	let first = [10, 150, 6, 67, 61, 16, 86, 6, 67, 78, 150, 3, 28, 143];
	console.log(maxProfit(first, first.length));
	console.log(maxProfit2(first, first.length));
}
/*
		Purchase day is- 2 at price 6
		Sell day is- 10 at price 150
		144
		*/
function quickSelectUtil(arr, lower, upper, k)
{
	if (upper <= lower)
	{
		return;
	}
	let pivot = arr[lower];
	let start = lower;
	let stop = upper;
	while (lower < upper)
	{
		while (arr[lower] <= pivot && lower < upper)
		{
			lower++;
		}
		while (arr[upper] > pivot && lower <= upper)
		{
			upper--;
		}
		if (lower < upper)
		{
			swap(arr, upper, lower);
		}
	}
	swap(arr, upper, start);
	// upper is the pivot position
	if (k < upper)
	{
		quickSelectUtil(arr, start, upper - 1, k);
	}
	// pivot -1 is the upper for left sub array.
	if (k > upper)
	{
		quickSelectUtil(arr, upper + 1, stop, k);
	}
}

	function quickSelectUtil(arr, lower, upper, k)
{
	if (upper <= lower)
	{
		return;
	}
	let pivot = arr[lower];
	let start = lower;
	let stop = upper;
	while (lower < upper)
	{
		while (arr[lower] <= pivot && lower < upper)
		{
			lower++;
		}
		while (arr[upper] > pivot && lower <= upper)
		{
			upper--;
		}
		if (lower < upper)
		{
			swap(arr, upper, lower);
		}
	}
	swap(arr, upper, start);
	// upper is the pivot position
	if (k < upper)
	{
		quickSelectUtil(arr, start, upper - 1, k);
	}
	// pivot -1 is the upper for left sub array.
	if (k > upper)
	{
		quickSelectUtil(arr, upper + 1, stop, k);
	}
}
function findMedian(arrFirst, sizeFirst, arrSecond, sizeSecond)
{
	let medianIndex = parseInt(((sizeFirst + sizeSecond) + (sizeFirst + sizeSecond) % 2) / 2);
	// ceiling
	// function.
	let i = 0;
	let j = 0;
	let count = 0;
	while (count < medianIndex - 1)
	{
		if (i < sizeFirst - 1 && arrFirst[i] < arrSecond[j])
		{
			i++;
		}
		else
		{
			j++;
		}
		count++;
	}
	if (arrFirst[i] < arrSecond[j])
	{
		return arrFirst[i];
	}
	else
	{
		return arrSecond[j];
	}
}
function main30()
{
	let first = [1, 5, 6, 6, 6, 6, 6, 6, 7, 8, 10, 13, 20, 30];
	let second = [1, 5, 6, 6, 6, 6, 6, 6, 7, 8, 10, 13, 20, 30];
	console.log(findMedian(first, first.length, second, second.length));
}
/*
	6
	*/
function search01(arr, size)
{
	for (let i = 0; i < size; i++)
	{
		if (arr[i] == 1)
		{
			return i;
		}
	}
	return -1;
}
function binarySearch01(arr, size)
{
	if (size == 1 && arr[0] == 1)
	{
		return 0;
	}
	return binarySearch01Util(arr, 0, size - 1);
}
function binarySearch01Util(arr, start, end)
{
	if (end < start)
	{
		return -1;
	}
	let mid = parseInt((start + end) / 2);
	if (1 == arr[mid] && 0 == arr[mid - 1])
	{
		return mid;
	}
	if (0 == arr[mid])
	{
		return binarySearch01Util(arr, mid + 1, end);
	}
	else
	{
		return binarySearch01Util(arr, start, mid - 1);
	}
}
function main31()
{
	let first = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
	console.log(search01(first, first.length));
	console.log(binarySearch01(first, first.length));
}
/*
	8
	*/
function rotationMax(arr, size)
{
	for (let i = 0; i < size - 1; i++)
	{
		if (arr[i] > arr[i + 1])
		{
			return arr[i];
		}
	}
	return -1;
}
function rotationMaxUtil(arr, start, end)
{
	if (end <= start)
	{
		return arr[start];
	}
	let mid = parseInt((start + end) / 2);
	if (arr[mid] > arr[mid + 1])
	{
		return arr[mid];
	}
	if (arr[start] <= arr[mid])
	{
		/* increasing part. */
		return rotationMaxUtil(arr, mid + 1, end);
	}
	else
	{
		return rotationMaxUtil(arr, start, mid - 1);
	}
}
function rotationMax2(arr, size)
{
	return rotationMaxUtil(arr, 0, size - 1);
}
function main32()
{
	let first = [34, 56, 77, 1, 5, 6, 6, 8, 10, 20, 30, 34];
	console.log(rotationMax(first, first.length));
	console.log(rotationMax2(first, first.length));
}
/*
	77
	*/
function findRotationMax(arr, size)
{
	for (let i = 0; i < size - 1; i++)
	{
		if (arr[i] > arr[i + 1])
		{
			return i;
		}
	}
	return -1;
}
function findRotationMaxUtil(arr, start, end)
{
	/* single element case. */
	if (end <= start)
	{
		return start;
	}
	let mid = parseInt((start + end) / 2);
	if (arr[mid] > arr[mid + 1])
	{
		return mid;
	}
	if (arr[start] <= arr[mid])
	{
		/* increasing part. */
		return findRotationMaxUtil(arr, mid + 1, end);
	}
	else
	{
		return findRotationMaxUtil(arr, start, mid - 1);
	}
}
function findRotationMax2(arr, size)
{
	return findRotationMaxUtil(arr, 0, size - 1);
}
function main33()
{
	let first = [34, 56, 77, 1, 5, 6, 6, 8, 10, 20, 30, 34];
	console.log(findRotationMax(first, first.length));
	console.log(findRotationMax2(first, first.length));
}
/*
	2
	*/
function countRotation(arr, size)
{
	let maxIndex = findRotationMaxUtil(arr, 0, size - 1);
	return (maxIndex + 1) % size;
}
function main34()
{
	let first = [34, 56, 77, 1, 5, 6, 6, 8, 10, 20, 30, 34];
	console.log(countRotation(first, first.length));
}
/*
	3
	*/
function searchRotateArray(arr, size, key)
{
	for (let i = 0; i < size - 1; i++)
	{
		if (arr[i] == key)
		{
			return i;
		}
	}
	return -1;
}
function binarySearchRotateArrayUtil(arr, start, end, key)
{
	if (end < start)
	{
		return -1;
	}
	let mid = parseInt((start + end) / 2);
	if (key == arr[mid])
	{
		return mid;
	}
	if (arr[mid] > arr[start])
	{
		if (arr[start] <= key && key < arr[mid])
		{
			return binarySearchRotateArrayUtil(arr, start, mid - 1, key);
		}
		else
		{
			return binarySearchRotateArrayUtil(arr, mid + 1, end, key);
		}
	}
	else
	{
		if (arr[mid] < key && key <= arr[end])
		{
			return binarySearchRotateArrayUtil(arr, mid + 1, end, key);
		}
		else
		{
			return binarySearchRotateArrayUtil(arr, start, mid - 1, key);
		}
	}
}
function binarySearchRotateArray(arr, size, key)
{
	return binarySearchRotateArrayUtil(arr, 0, size - 1, key);
}
function main35()
{
	let first = [34, 56, 77, 1, 5, 6, 6, 6, 6, 6, 6, 7, 8, 10, 13, 20, 30];
	console.log(searchRotateArray(first, first.length, 20));
	console.log(binarySearchRotateArray(first, first.length, 20));
	console.log(countRotation(first, first.length));
	console.log(first[findRotationMax(first, first.length)]);
}
/*
	15
	3
	77
	*/
function minAbsDiffAdjCircular(arr, size)
{
	let diff = 9999999;
	if (size < 2)
	{
		return -1;
	}
	for (let i = 0; i < size; i++)
	{
		diff = Math.min(diff, Math.abs(arr[i] - arr[(i + 1) % size]));
	}
	return diff;
}
// Testing Code
function main36()
{
	let arr = [5, 29, 18, 51, 11];
	console.log(minAbsDiffAdjCircular(arr, arr.length));
}
/*
	6
	*/
function swapch(arr, first, second)
{
	let temp = arr[first];
	arr[first] = arr[second];
	arr[second] = temp;
}
function transformArrayAB1(arr, size)
{
	let N = parseInt(size / 2);
	let i = 0;
	let j = 0;
	for (i = 1; i < N; i++)
	{
		for (j = 0; j < i; j++)
		{
			swapch(arr, N - i + 2 * j, N - i + 2 * j + 1);
		}
	}
}
function main37()
{
	let str = "aaaabbbb".split('');
	transformArrayAB1(str, str.length);
	console.log(str);
}
/*
	abababab
	*/
function checkPermutation(array1, size1, array2, size2)
{
	if (size1 != size2)
	{
		return false;
	}
	array1.sort(function(a, b)
	{
		return a - b;
	});
	array2.sort(function(a, b)
	{
		return a - b;
	});
	for (let i = 0; i < size1; i++)
	{
		if (array1[i] != array2[i])
		{
			return false;
		}
	}
	return true;
}
function checkPermutation2(arr1, size1, arr2, size2)
{
	if (size1 != size2)
	{
		return false;
	}
	let hm = new Map();
	for (let i = 0; i < size1; i++)
	{
		if (hm.has(arr1[i]))
		{
			hm.set(arr1[i], hm.get(arr1[i]) + 1);
		}
		else
		{
			hm.set(arr1[i], 1);
		}
	}
	for (let i = 0; i < size2; i++)
	{
		if (hm.has(arr2[i]) && hm.get(arr2[i]) != 0)
		{
			hm.set(arr2[i], hm.get(arr2[i]) - 1);
		}
		else
		{
			return false;
		}
	}
	return true;
}
function checkPermutation3(array1, size1, array2, size2)
{
	if (size1 != size2)
	{
		return false;
	}
	let count = Array(256).fill(0);
	for (let i = 0; i < size1; i++)
	{
		count[array1[i].charCodeAt(0)]++;
		count[array2[i].charCodeAt(0)]--;
	}
	for (let i = 0; i < size1; i++)
	{
		if (count[i] != 0)
		{
			console.log("Not Permutation");
			return false;
		}
	}
	console.log("Permutation.");
	return true;
}
function main38()
{
	let str1 = "aaaabbbb".split('');
	let str2 = "bbaaaabb".split('');
	console.log(checkPermutation(str1, str1.length, str2, str2.length));
}
/*
	true
	*/
function findElementIn2DArray(arr, r, c, value)
{
	let row = 0;
	let column = c - 1;
	while (row < r && column >= 0)
	{
		if (arr[row][column] == value)
		{
			return true;
		}
		else if (arr[row][column] > value)
		{
			column--;
		}
		else
		{
			row++;
		}
	}
	return false;
}
function isAP(arr, size)
{
	if (size <= 1)
	{
		return true;
	}
	arr.sort(function(a, b)
	{
		return a - b;
	});
	let diff = arr[1] - arr[0];
	for (let i = 2; i < size; i++)
	{
		if (arr[i] - arr[i - 1] != diff)
		{
			return false;
		}
	}
	return true;
}
function isAP2(arr, size)
{
	let first = 9999999;
	let second = 9999999;
	let value = 0;
	let hs = new Set();
	for (let i = 0; i < size; i++)
	{
		if (arr[i] < first)
		{
			second = first;
			first = arr[i];
		}
		else if (arr[i] < second)
		{
			second = arr[i];
		}
	}
	let diff = second - first;
	for (let i = 0; i < size; i++)
	{
		if (hs.has(arr[i]))
		{
			return false;
		}
		hs.add(arr[i]);
	}
	for (let i = 0; i < size; i++)
	{
		value = first + i * diff;
		if (!hs.has(value))
		{
			return false;
		}
	}
	return true;
}
function isAP3(arr, size)
{
	let first = 9999999;
	let second = 9999999;
	let count = Array(size).fill(0);
	let index = -1;
	for (let i = 0; i < size; i++)
	{
		if (arr[i] < first)
		{
			second = first;
			first = arr[i];
		}
		else if (arr[i] < second)
		{
			second = arr[i];
		}
	}
	let diff = second - first;
	for (let i = 0; i < size; i++)
	{
		index = parseInt((arr[i] - first) / diff);
		if (index > size - 1 || count[index] != 0)
		{
			return false;
		}
		count[index] = 1;
	}
	for (let i = 0; i < size; i++)
	{
		if (count[i] != 1)
		{
			return false;
		}
	}
	return true;
}
function main39()
{
	let arr = [20, 25, 15, 5, 0, 10, 35, 30];
	console.log(isAP(arr, arr.length));
	console.log(isAP2(arr, arr.length));
	console.log(isAP3(arr, arr.length));
}
/*
	true
	true
	true
	*/
function findBalancedPoint(arr, size)
{
	let first = 0;
	let second = 0;
	for (let i = 1; i < size; i++)
	{
		second += arr[i];
	}
	for (let i = 0; i < size; i++)
	{
		if (first == second)
		{
			console.log(i);
			return i;
		}
		if (i < size - 1)
		{
			first += arr[i];
		}
		second -= arr[i + 1];
	}
	return -1;
}
// Testing Code
function main40()
{
	let arr = [-7, 1, 5, 2, -4, 3, 0];
	console.log(findBalancedPoint(arr, arr.length));
}
/*
	3
	*/
function findFloor(arr, size, value)
{
	let start = 0;
	let stop = size - 1;
	let mid = 0;
	while (start <= stop)
	{
		mid = parseInt((start + stop) / 2);
		/*
			* search value is equal to arr[mid] value.. search value is greater than mid
			* index value and less than mid+1 index value. value is greater than
			* arr[size-1] then floor is arr[size-1]
			*/
		if (arr[mid] == value || (arr[mid] < value && (mid == size - 1 || arr[mid + 1] > value)))
		{
			return arr[mid];
		}
		else if (arr[mid] < value)
		{
			start = mid + 1;
		}
		else
		{
			stop = mid - 1;
		}
	}
	return -1;
}
function findCeil(arr, size, value)
{
	let start = 0;
	let stop = size - 1;
	let mid = 0;
	while (start <= stop)
	{
		mid = parseInt((start + stop) / 2);
		/*
			* search value is equal to arr[mid] value.. search value is less than mid index
			* value and greater than mid-1 index value. value is less than arr[0] then ceil
			* is arr[0]
			*/
		if (arr[mid] == value || (arr[mid] > value && (mid == 0 || arr[mid - 1] < value)))
		{
			return arr[mid];
		}
		else if (arr[mid] < value)
		{
			start = mid + 1;
		}
		else
		{
			stop = mid - 1;
		}
	}
	return -1;
}
function main41()
{
	let arr = [2, 4, 8, 16];
	console.log(findFloor(arr, arr.length, 5));
	console.log(findCeil(arr, arr.length, 5));
}
/*
	1
	2
	*/
function closestNumber(arr, size, num)
{
	let start = 0;
	let stop = size - 1;
	let output = -1;
	let minDist = Number.MAX_VALUE;
	let mid = 0;
	while (start <= stop)
	{
		mid = parseInt((start + stop) / 2);
		if (minDist > Math.abs(arr[mid] - num))
		{
			minDist = Math.abs(arr[mid] - num);
			output = arr[mid];
		}
		if (arr[mid] == num)
		{
			break;
		}
		else if (arr[mid] > num)
		{
			stop = mid - 1;
		}
		else
		{
			start = mid + 1;
		}
	}
	return output;
}
function main42()
{
	let arr = [2, 4, 8, 16];
	console.log(closestNumber(arr, arr.length, 9));
}
/*
	8
	*/
function duplicateKDistance(arr, size, k)
{
	let hm = new Map();
	for (let i = 0; i < size; i++)
	{
		if (hm.has(arr[i]) && i - hm.get(arr[i]) <= k)
		{
			console.log("Value:" + arr[i] + " Index: " + hm.get(arr[i]) + " & " + i);
			return true;
		}
		else
		{
			hm.set(arr[i], i);
		}
	}
	return false;
}
// Testing Code
function main43()
{
	let arr = [1, 2, 3, 1, 4, 5];
	duplicateKDistance(arr, arr.length, 3);
}
/*
Value:1 Index: 0 & 3
*/

function frequencyCounts(arr, size)
{
	let hm = new Map();
	for (let i = 0; i < size; i++)
	{
		if (hm.has(arr[i]))
		{
			hm.set(arr[i], hm.get(arr[i]) + 1);
		}
		else
		{
			hm.set(arr[i], 1);
		}
	}
	for (const key of hm.keys())
	{
		console.log("(" + key + " : " + hm.get(key) + ") ");
	}
	console.log();
}

function frequencyCounts2(arr, size)
{
	arr.sort(function(a, b)
	{
		return a - b;
	});
	let count = 1;
	for (let i = 1; i < size; i++)
	{
		if (arr[i] == arr[i - 1])
		{
			count++;
		}
		else
		{
			console.log("(" + arr[i - 1] + " : " + count + ") ");
			count = 1;
		}
	}
	console.log("(" + arr[size - 1] + " : " + count + ") ");
	console.log();
}

function frequencyCounts3(arr, size)
{
	let aux = Array(size + 1).fill(0);
	for (let i = 0; i < size; i++)
	{
		aux[arr[i]] += 1;
	}
	for (let i = 0; i < size + 1; i++)
	{
		if (aux[i] > 0)
		{
			console.log("(" + i + " : " + aux[i] + ") ");
		}
	}
	console.log();
}

function frequencyCounts4(arr, size)
{
	let index = 0;
	for (let i = 0; i < size; i++)
	{
		while (arr[i] > 0)
		{
			index = arr[i] - 1;
			if (arr[index] > 0)
			{
				arr[i] = arr[index];
				arr[index] = -1;
			}
			else
			{
				arr[index] -= 1;
				arr[i] = 0;
			}
		}
	}
	for (let i = 0; i < size; i++)
	{
		if (arr[i] != 0)
		{
			console.log("(" + (i + 1) + " : " + Math.abs(arr[i]) + ") ");
		}
	}
	console.log();
}

function main44()
{
	let arr = [1, 2, 2, 2, 1];
	frequencyCounts(arr, arr.length);
	frequencyCounts2(arr, arr.length);
	frequencyCounts3(arr, arr.length);
	frequencyCounts4(arr, arr.length);
}
/*
(1 : 2) (2 : 3) 
(1 : 2) (2 : 3) 
(1 : 2) (2 : 3) 
(1 : 2) (2 : 3)    
*/

function kLargestElements(arrIn, size, k)
{
	let arr = Array(size).fill(0);
	for (let i = 0; i < size; i++)
	{
		arr[i] = arrIn[i];
	}
	arr.sort(function(a, b)
	{
		return a - b;
	});
	for (let i = 0; i < size; i++)
	{
		if (arrIn[i] >= arr[size - k])
		{
			console.log(arrIn[i] + " ");
		}
	}
	console.log();
}

function kLargestElements2(arrIn, size, k)
{
	let arr = Array(size).fill(0);
	for (let i = 0; i < size; i++)
	{
		arr[i] = arrIn[i];
	}
	quickSelectUtil(arr, 0, size - 1, size - k);
	for (let i = 0; i < size; i++)
	{
		if (arrIn[i] >= arr[size - k])
		{
			console.log(arrIn[i] + " ");
		}
	}
	console.log();
}

function main45()
{
	let arr = [10, 50, 30, 60, 15];
	kLargestElements(arr, arr.length, 2);
	kLargestElements2(arr, arr.length, 2);
}
/*
50 60 
50 60 
*/

/* linear search method */
function fixPoint(arr, size)
{
	for (let i = 0; i < size; i++)
	{
		if (arr[i] == i)
		{
			return i;
		}
	}
	/* fix point not found so return invalid index */
	return -1;
}

/* Binary search method */
function fixPoint2(arr, size)
{
	let low = 0;
	let high = size - 1;
	let mid = 0;
	while (low <= high)
	{
		mid = parseInt((low + high) / 2);
		if (arr[mid] == mid)
		{
			return mid;
		}
		else if (arr[mid] < mid)
		{
			low = mid + 1;
		}
		else
		{
			high = mid - 1;
		}
	}
	/* fix point not found so return invalid index */
	return -1;
}

function main46()
{
	let arr = [-10, -2, 0, 3, 11, 12, 35, 51, 200];
	console.log(fixPoint(arr, arr.length));
	console.log(fixPoint2(arr, arr.length));
}
/*
3
3
*/

function subArraySums(arr, size, value)
{
	let start = 0;
	let end = 0;
	let sum = 0;
	while (start < size && end < size)
	{
		if (sum < value)
		{
			sum += arr[end];
			end += 1;
		}
		else
		{
			sum -= arr[start];
			start += 1;
		}
		if (sum == value)
		{
			console.log(start + " " + (end - 1));
		}
	}
}

function main47()
{
	let arr = [15, 5, 5, 20, 10, 5, 5, 20, 10, 10];
	subArraySums(arr, arr.length, 20);
}
/*
0 1
3 3
4 6
7 7
8 9
*/

function maxConSub(arr, size)
{
	let currMax = 0;
	let maximum = 0;
	for (let i = 0; i < size; i++)
	{
		currMax += arr[i];
		if (currMax < 0)
		{
			currMax = 0;
		}
		if (maximum < currMax)
		{
			maximum = currMax;
		}
	}
	console.log(maximum);
	return maximum;
}

function maxConSubArr(A, sizeA, B, sizeB)
{
	let currMax = 0;
	let maximum = 0;
	let hs = new Set();
	for (let i = 0; i < sizeB; i++)
	{
		hs.add(B[i]);
	}
	for (let i = 0; i < sizeA; i++)
	{
		if (hs.has(A[i]))
		{
			currMax = 0;
		}
		else
		{
			currMax = currMax + A[i];
			if (currMax < 0)
			{
				currMax = 0;
			}
			if (maximum < currMax)
			{
				maximum = currMax;
			}
		}
	}
	console.log(maximum);
	return maximum;
}

function maxConSubArr2(A, sizeA, B, sizeB)
{
	B.sort(function(a, b)
	{
		return a - b;
	});
	let currMax = 0;
	let maximum = 0;
	for (let i = 0; i < sizeA; i++)
	{
		if (binarySearch(B, sizeB, A[i]))
		{
			currMax = 0;
		}
		else
		{
			currMax = currMax + A[i];
			if (currMax < 0)
			{
				currMax = 0;
			}
			if (maximum < currMax)
			{
				maximum = currMax;
			}
		}
	}
	console.log(maximum);
	return maximum;
}

function main48()
{
	let arr = [1, 2, -3, 4, 5, -10, 6, 7];
	maxConSub(arr, arr.length);
	let arr2 = [1, 2, 3, 4, 5, -10, 6, 7, 3];
	let arr3 = [1, 3];
	maxConSubArr(arr2, arr2.length, arr3, arr3.length);
	maxConSubArr2(arr2, arr2.length, arr3, arr3.length);
}
/*
13
13
13
*/

function rainWater(arr, size)
{
	let leftHigh = Array(size).fill(0);
	let rightHigh = Array(size).fill(0);
	let max = arr[0];
	leftHigh[0] = arr[0];
	for (let i = 1; i < size; i++)
	{
		if (max < arr[i])
		{
			max = arr[i];
		}
		leftHigh[i] = max;
	}
	max = arr[size - 1];
	rightHigh[size - 1] = arr[size - 1];
	for (let i = (size - 2); i >= 0; i--)
	{
		if (max < arr[i])
		{
			max = arr[i];
		}
		rightHigh[i] = max;
	}
	let water = 0;
	for (let i = 0; i < size; i++)
	{
		water += Math.min(leftHigh[i], rightHigh[i]) - arr[i];
	}
	console.log("Water : " + water);
	return water;
}

function rainWater2(arr, size)
{
	let water = 0;
	let leftMax = 0;
	let rightMax = 0;
	let left = 0;
	let right = size - 1;
	while (left <= right)
	{
		if (arr[left] < arr[right])
		{
			if (arr[left] > leftMax)
			{
				leftMax = arr[left];
			}
			else
			{
				water += leftMax - arr[left];
			}
			left += 1;
		}
		else
		{
			if (arr[right] > rightMax)
			{
				rightMax = arr[right];
			}
			else
			{
				water += rightMax - arr[right];
			}
			right -= 1;
		}
	}
	console.log("Water : " + water);
	return water;
}

function main49()
{
	let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
	rainWater(arr, arr.length);
	rainWater2(arr, arr.length);
}
/*
Water : 6
Water : 6
*/

function separateEvenAndOdd(arr, size)
{
	let left = 0;
	let right = size - 1;
	while (left < right)
	{
		if (arr[left] % 2 == 0)
		{
			left++;
		}
		else if (arr[right] % 2 == 1)
		{
			right--;
		}
		else
		{
			swap(arr, left, right);
			
			left++;
			right--;
		}
	}
}

function main50()
{
	let first = [1, 5, 6, 6, 6, 6, 6, 6, 7, 8, 10, 13, 20, 30];
	separateEvenAndOdd(first, first.length);
	for (const val of first)
	{
		console.log(val + " ");
	}
}
/*
30 20 6 6 6 6 6 6 10 8 7 13 5 1
*/        

function main(args)
{
	main1();
}
}
main([]);