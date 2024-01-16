function linearSearchUnsorted(arr, value) {
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        if (value === arr[i]) {
            return true;
        }
    }
    return false;
}

function linearSearchSorted(arr, value) {
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        if (value === arr[i]) {
            return true;
        } else if (value < arr[i]) {
            return false;
        }
    }
    return false;
}

function binarySearch(arr, value) {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === value) {
            return true;
        } else if (arr[mid] < value) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}

function binarySearchRecursive(arr, value) {
    return binarySearchRecursiveUtil(arr, 0, arr.length - 1, value);
}

function binarySearchRecursiveUtil(arr, low, high, value) {
    if (low > high) {
        return false;
    }
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === value) {
        return true;
    } else if (arr[mid] < value) {
        return binarySearchRecursiveUtil(arr, mid + 1, high, value);
    } else {
        return binarySearchRecursiveUtil(arr, low, mid - 1, value);
    }
}

function fibonacciSearch(arr, value) {
    const size = arr.length;
	/* Initialize fibonacci numbers */
	let fibNMn2 = 0;
	let fibNMn1 = 1;
	let fibN = fibNMn2 + fibNMn1;
	while (fibN < size) {
		fibNMn2 = fibNMn1;
		fibNMn1 = fibN;
		fibN = fibNMn2 + fibNMn1;
	}
	let low = 0;
	while (fibN > 1) {
		// fibonacci series start with 0, 1, 1, 2
		let i = Math.min(low + fibNMn2, size - 1);
		if (arr[i] == value) {
			return true;
		} else if (arr[i] < value) {
			fibN = fibNMn1;
			fibNMn1 = fibNMn2;
			fibNMn2 = fibN - fibNMn1;
			low = i;
		} else {
			// for feb2 <= 1, these will be invalid.
			fibN = fibNMn2;
			fibNMn1 = fibNMn1 - fibNMn2;
			fibNMn2 = fibN - fibNMn1;
		}
	}
	if (arr[low + fibNMn2] == value) {
		// above loop does not check when fibNMn2 = 0
		return true;
	}
	return false;
}


// Testing code.
function test1() {
    const first = [1, 3, 5, 7, 6, 4, 2];
    console.log(linearSearchUnsorted(first, 7));
    console.log(linearSearchUnsorted(first, 9));


    const second = [1, 3, 5, 7, 9, 25, 30 ];
    console.log(linearSearchSorted(second, 8));
    console.log(linearSearchSorted(second, 9));

    console.log(binarySearch(second, 8));
    console.log(binarySearch(second, 25));

    console.log(binarySearchRecursive(second, 10));
    console.log(fibonacciSearch(second, 10));
}

test1();

/*
true
false
true
false
true
true
true
*/

function swap(arr, first, second) {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

function firstRepeated(arr) {
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return 0;
}

function firstRepeated2(arr) {
    const size = arr.length;
	let hm = new Map();
	for (let i = 0; i < size; i++) {
		if (hm.has(arr[i])) {
			hm.set(arr[i], 2);
		} else {
			hm.set(arr[i], 1);
		}
	}
	for (let i = 0; i < size; i++) {
		if (hm.get(arr[i]) == 2) {
			return arr[i];
		}
	}
	return 0;
}

// Testing code.
function test2() {
    first = [1, 3, 5, 3, 9, 1, 30]
    console.log(`firstRepeated :: ${firstRepeated(first)}`);
    console.log(`firstRepeated :: ${firstRepeated2(first)}`);
}

test2();

/*
firstRepeated :: 1
firstRepeated :: 1
*/

function printRepeating(arr) {
    const size = arr.length;
    let output = "Repeating elements are :";
    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                output += " " + arr[i];
                break
            }
        }
    }
    console.log(output)
}

function printRepeating2(arr) {
    const size = arr.length;
    arr.sort(function cmp(a, b) { return (a - b); })
    let output = "Repeating elements are :";
    for (let i = 1; i < size; i++) {
        if (arr[i] === arr[i - 1]) {
            output += " " + arr[i];
        }
    }
    console.log(output)
}

function printRepeating3(arr) {
    const hs = {};
    const size = arr.length;
    let output = "Repeating elements are :";
    for (let i = 0; i < size; i++) {
        if (arr[i] in hs) {
            output += " " + arr[i];
        } else {
            hs[arr[i]] = 1;
        }
    }
    console.log(output)
}

function printRepeating4(arr, range) {
    const size = arr.length;
    const count = new Array(range).fill(0);
    let output = "Repeating elements are :";
    for (let i = 0; i < size; i++) {
        if (count[arr[i]] > 0) {
            output += " " + arr[i];
        } else {
            count[arr[i]]++;
        }
    }
    console.log(output)
}

// Testing code.
function test3() {
    const first = [1, 3, 5, 3, 9, 1, 30];
    printRepeating(first);
    printRepeating2(first);
    printRepeating3(first);
    printRepeating4(first, 50);
}

test3();

/*
Repeating elements are : 1 3
Repeating elements are : 1 3
Repeating elements are : 1 3
Repeating elements are : 1 3
*/

function removeDuplicates(array) {
    let j = 0;
    const size = array.length;
    if (size === 0) {
        return [];
    }
    array.sort(function cmp(a, b) { return (a - b); });
    for (let i = 1; i < size; i++) {
        if (array[i] !== array[j]) {
            j++;
            array[j] = array[i];
        }
    }
    return array.slice(0, j + 1);
}

function removeDuplicates2(arr) {
    const size = arr.length;
	let hm = new Map();
	let j = 0;
	for (let i = 0; i < size; i++) {
		if (!hm.has(arr[i])) {
			arr[j] = arr[i];
			j++;
			hm.set(arr[i], 1);
		}
	}
	return arr.slice(0, j);
}

// Testing code.
function test4() {
    first = [1, 3, 5, 3, 9, 1, 30]
    console.log(removeDuplicates(first));
    first = [1, 3, 5, 3, 9, 1, 30]
    console.log(removeDuplicates2(first));

}

test4();

/*
[ 1, 3, 5, 9, 30 ]
[ 1, 3, 5, 9, 30 ]
*/

function findMissingNumber(arr) {
    const size = arr.length;
    let found;
    for (let i = 1; i <= size; i++) {
        found = false;
        for (let j = 0; j < size; j++) {
            if (arr[j] === i) {
                found = true;
                break;
            }
        }
        if (found === false) {
            return i;
        }
    }
    return Number.MAX_VALUE;
}

function findMissingNumber2(arr) {
	const size = arr.length;
    arr.sort(function(a, b)	{return a - b;});
	for (let i = 0; i < size; i++) {
		if (arr[i] != i + 1) {
			return i + 1;
		}
	}
	return size;
}

function findMissingNumber3(arr) {
    const size = arr.length;
	let hm = new Map();
	for (let i = 0; i < size; i++) {
		hm.set(arr[i], 1);
    }
    
	for (let i = 1; i <= size; i++) {
		if (!hm.has(i)) {
			return i;
		}
	}
	return Number.MAX_VALUE;
}

function findMissingNumber4(arr) {
    const size = arr.length;
	let count = Array(size + 1).fill(-1);
	for (let i = 0; i < size; i++) {
		count[arr[i] - 1] = 1;
    }
    
	for (let i = 0; i <= size; i++) {
		if (count[i] == -1) {
			return i + 1;
		}
	}
	return Number.MAX_VALUE;
}

function findMissingNumber5(arr) {
    const size = arr.length;
	let sum = 0;
	// Element value range is from 1 to size+1.
	for (let i = 1; i < (size + 2); i++) {
		sum += i;
	}
	for (let i = 0; i < size; i++) {
		sum -= arr[i];
	}
	return sum;
}

function findMissingNumber6(arr) {
    const size = arr.length;
	for (let i = 0; i < size; i++) {
		arr[(arr[i]) % (size) - 1] += size + 1;
	}
	for (let i = 0; i < size; i++) {
		if (arr[i] < size + 1) {
			return i + 1;
		}
	}
	return Number.MAX_VALUE;
}

function findMissingNumber7(arr, range) {
    const size = arr.length;
    let xorSum = 0;
    for (let i = 1; i <= range; i++) {
        xorSum ^= i;
    }
    for (let i = 0; i < size; i++) {
        xorSum ^= arr[i];
    }
    return xorSum;
}

function findMissingNumber8(arr, upperRange) {
    const size = arr.length;
    const st = new Set();
    let i = 0;
    while (i <= size) {
        st.add(arr[i])
        i += 1;
    }
    i = 1;
    while (i <= upperRange) {
        if (st.has(i) === false)
            return i;
        i += 1;
    }
    console.info("NoNumberMissing");
    return -1;
}

// Testing code.
function test5() {
    let first = [1, 5, 4, 3, 2, 7, 8, 9];
    console.log(findMissingNumber(first));
	console.log(findMissingNumber2(first));
	console.log(findMissingNumber3(first));
	console.log(findMissingNumber4(first));
	console.log(findMissingNumber5(first));

	console.log(findMissingNumber7(first,9));
	console.log(findMissingNumber8(first, 9));
	console.log(findMissingNumber6(first));
}

test5();

/*
6
6
6
6
6
6
6
6
*/

function missingValues(arr, size) {
	let max = arr[0];
	let min = arr[0];
	for (let i = 1; i < size; i++) {
		if (max < arr[i])
			max = arr[i];

		if (min > arr[i])
			min = arr[i];
	}
	let found = false;
	for (let i = min + 1; i < max; i++) {
		found = false;
		for (let j = 0; j < size; j++) {
			if (arr[j] == i) {
				found = true;
				break;
			}
		}

		if (!found)
			console.log(i + " ");
	}
}

function missingValues2(arr, size) {
	arr.sort(function(a, b){ return a - b; });
	let value = arr[0];
	let i = 0;
	while (i < size) {
		if (value == arr[i]) {
			value += 1;
			i += 1;
		} else {
			console.log(value + " ");
			value += 1;
		}
	}
}

function missingValues3(arr, size) {
	let ht = new Set();
	let minVal = 999999;
	let maxVal = -999999;
	for (let i = 0; i < size; i++) {
		ht.add(arr[i]);
		if (minVal > arr[i]) {
			minVal = arr[i];
		}
		if (maxVal < arr[i]) {
			maxVal = arr[i];
		}
	}
	for (let i = minVal; i < maxVal + 1; i++) {
		if (ht.has(i) == false) {
			console.log(i + " ");
		}
	}
}

// Testing code.
function test6() {
    let arr = [11, 14, 13, 17, 21, 18, 19, 23, 24];
    let size = arr.length;
    missingValues(arr, size);
    console.log();
	missingValues2(arr, size);
    console.log();
	missingValues3(arr, size);
    console.log();
}
test6()
/*
12 15 16 20 22 
12 15 16 20 22 
*/

function oddCount(arr, size) {
	let xorSum = 0;
	for (let i = 0; i < size; i++) {
		xorSum ^= arr[i];
	}
	console.log("Odd values: " + xorSum);
}

function oddCount2(arr, size) {
	let hm = new Map();
	for (let i = 0; i < size; i++) {
		if (hm.has(arr[i]))
			hm.delete(arr[i]);
		else
			hm.set(arr[i], 1);
	}
	console.log("Odd values: ");
	for (const key of hm.keys())
		console.log(key + " ");
	console.log("Odd count is :: " + hm.size);
}

function oddCount3(arr, size) {
    const ctr = ({});
    let count = 0;
    let i;
    for (i = 0; i < size; i++) {
        if (ctr[arr[i]] != undefined) {
            ctr[arr[i]] += 1;
        } else {
            ctr[arr[i]] = 1;
        }
    }
    for (i = 0; i < size; i++) {
        if (ctr[arr[i]] != undefined && (ctr[arr[i]] % 2 == 1)) {
            count++;
        }
    }
    console.info(`Odd count is :: ${count}`);
}

function oddNumbers(arr, size) {
    let xorSum = 0;
    let first = 0;
    let second = 0;
    let setBit;
    for (i = 0; i < size; i++) {
        xorSum = xorSum ^ arr[i];
    }
    setBit = xorSum & ~(xorSum - 1);
    for (let i = 0; i < size; i++) {
        if ((arr[i] & setBit) !== 0)
            first ^= arr[i];
        else
            second ^= arr[i];
    }
    console.info(first, second);
}

// Testing code.
function test7() {
    let arr = [10, 25, 30, 10, 15, 25, 15];
    let size = arr.length;
    oddCount(arr, size);
    oddCount2(arr, size);
    let arr2 = [10, 25, 30, 10, 15, 25, 15, 40];
    let size2 = arr2.length;
    oddCount3(arr2, size2);
    oddNumbers(arr2, size2);
}

test7()

/*
Odd values: 30

Odd values: 30 
Odd count is :: 1

Odd count is :: 2

30 40
*/

function sumDistinct(arr, size) {
    let sum = 0;
    arr.sort(function cmp(a, b) { return (a - b); });
    for (let i = 0; i < (size - 1); i++) {
        if (arr[i] !== arr[i + 1])
            sum += arr[i];
    }
    sum += arr[size - 1];
    console.info(sum);
}

// Testing code.
function test8() {
    let arr = [1, 2, 3, 1, 1, 4, 5, 6];
    let size = arr.length;
    sumDistinct(arr, size);
}

test8();
//21

function minAbsSumPair(arr) {
    const size = arr.length;
    if (size < 2) {
        console.log("Invalid Input");
        return;
    }
    let minFirst = 0;
    let minSecond = 1;
    let sum;
    let minSum = Math.abs(arr[0] + arr[1]);
    for (let l = 0; l < size - 1; l++) {
        for (let r = l + 1; r < size; r++) {
            sum = Math.abs(arr[l] + arr[r]);
            if (sum < minSum) {
                minSum = sum;
                minFirst = l;
                minSecond = r;
            }
        }
    }
    console.log(`Elements with minimum sum are : ${arr[minFirst]} , ${arr[minSecond]}`);
}

function minAbsSumPair2(arr) {
    const size = arr.length;
    if (size < 2) {
        console.log("Invalid Input");
        return;
    }
    arr.sort(function cmp(a, b) { return (a - b); });
    let minFirst = 0;
    let minSecond = size - 1;
    let minSum = Math.abs(arr[minFirst] + arr[minSecond]);
    let sum;
    for (let l = 0, r = size - 1; l < r;) {
        sum = (arr[l] + arr[r]);
        if (Math.abs(sum) < minSum) {
            minSum = Math.abs(sum);
            minFirst = l;
            minSecond = r;
        }

        if (sum < 0)
            l++;
        else if (sum > 0) 
            r--;
        else 
            break;
    }
    console.log(`Elements with minimum sum are : ${arr[minFirst]} , ${arr[minSecond]}`);
}

// Testing code.
function test9() {
    const first = [1, 5, -10, 3, 2, -6, 8, 9, 6];
    minAbsSumPair(first);
    minAbsSumPair2(first);
}

test9();

/*
Elements with minimum sum are : -6 , 6
Elements with minimum sum are : -6 , 6
*/

function findPair(arr, value) {
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            if ((arr[i] + arr[j]) === value) {
                console.log(`The pair is : ${arr[i]}, ${arr[j]}`);
                return true;
            }
        }
    }
    return false;
}

function findPair2(arr, value) {
    let first = 0;
    const size = arr.length;
    let second = size - 1;
    let curr;
    arr.sort(function cmp(a, b) { return (a - b); });
    while (first < second) {
        curr = arr[first] + arr[second];
        if (curr === value) {
            console.log(`The pair is : ${arr[first]}, ${arr[second]}`);
            return true;
        } else if (curr < value) {
            first++;
        } else {
            second--;
        }
    }
    return false;
}

function findPair3(arr, value) {
    const hs = {};
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        if ((value - arr[i]) in hs) {
            console.log(`The pair is : ${arr[i]}, ${value - arr[i]}`);
            return true;
        }
        hs[arr[i]] = 1;
    }
    return false;
}

function findPair4(arr, range, value) {
    const size = arr.length;
	let count = Array(range + 1).fill(0);
	for (let i = 0; i < size; i++) {
		if (count[value - arr[i]] > 0) {
			console.log("The pair is : " + arr[i] + ", " + (value - arr[i]));
			return true;
		}
		count[arr[i]] += 1;
	}
	return false;
}

// Testing code.
function test10() {
    const first = [ 1, 5, 4, 3, 2, 7, 8, 9, 6];
    console.log(findPair(first, 8));
    console.log(findPair2(first, 8));
    console.log(findPair3(first, 8));
    console.log(findPair4(first, 9, 8));
}

test10();

/*
The pair is : 1, 7
true
The pair is : 1, 7
true
The pair is : 5, 3
true
The pair is : 5, 3
true
*/

function findPairTwoLists(arr1, size1, arr2, size2, value) {
	for (let i = 0; i < size1; i++) {
		for (let j = 0; j < size2; j++) {
			if ((arr1[i] + arr2[j]) == value) {
				console.log("The pair is : " + arr1[i] + ", " + arr2[j]);
				return true;
			}
		}
	}
	return false;
}

function findPairTwoLists2(arr1, size1, arr2, size2, value) {
	arr2.sort(function(a, b){ return a - b; });
	for (let i = 0; i < size1; i++) {
		if (binarySearch(arr2, size2, value - arr1[i])) {
			console.log("The pair is : " + arr1[i] + ", " + (value - arr1[i]));
		}
		return true;
	}
	return false;
}

function findPairTwoLists3(arr1, size1, arr2, size2, value) {
	let first = 0;
	let second = size2 - 1;
	let curr = 0;
	arr1.sort(function(a, b){ return a - b; });
	arr2.sort(function(a, b){ return a - b; });
	while (first < size1 && second >= 0) {
		curr = arr1[first] + arr2[second];
		if (curr == value) {
			console.log("The pair is : " + arr1[first] + ", " + arr2[second]);
			return true;
		} else if (curr < value) {
			first++;
		} else {
			second--;
		}
	}
	return false;
}

function findPairTwoLists4(arr1, size1, arr2, size2, value) {
	let hs = new Set();
	for (let i = 0; i < size2; i++) {
		hs.add(arr2[i]);
    }
    
	for (let i = 0; i < size1; i++)	{
		if (hs.has(value - arr1[i])) {
			console.log("The pair is : " + arr1[i] + ", " + (value - arr1[i]));
			return true;
		}
	}
	return false;
}

function findPairTwoLists5(arr1, size1, arr2, size2, range, value) {
	let count = Array(range + 1).fill(0);
	for (let i = 0; i < size2; i++)
		count[arr2[i]] = 1;

	for (let i = 0; i < size1; i++) {
		if (count[value - arr1[i]] != 0) {
			console.log("The pair is : " + arr1[i] + ", " + (value - arr1[i]));
			return true;
		}
	}
	return false;
}

// Testing code.
function test11() {
    let first = [1, 5, 4, 3, 2, 7, 8, 9, 6];
    let second = [1, 5, 4, 3, 2, 7, 8, 9, 6];
    console.log(findPairTwoLists(first, first.length, second, second.length, 8));
	console.log(findPairTwoLists2(first, first.length, second, second.length, 8));
	console.log(findPairTwoLists3(first, first.length, second, second.length, 8));
	console.log(findPairTwoLists4(first, first.length, second, second.length, 8));
	console.log(findPairTwoLists5(first, first.length, second, second.length, 9, 8));
}

test11()

/*
The pair is : 1, 7
true
The pair is : 1, 7
true
The pair is : 1, 7
true
The pair is : 1, 7
true 
*/

function findDifference(arr, value) {
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            if (Math.abs(arr[i] - arr[j]) === value) {
                console.info(`The pair is : ${arr[i]} & ${arr[j]}`);
                return true;
            }
        }
    }
    return false;
}

function findDifference2(arr, value) {
    const size = arr.length;
    let first = 0;
    let second = 0;
    let diff;
    arr.sort(function cmp(a, b) { return (a - b); });
    while (first < size && second < size) {
        diff = Math.abs(arr[first] - arr[second]);
        if (diff === value) {
            console.info(`The pair is : ${arr[first]} & ${arr[second]}`);
            return true;
        } else if (diff > value)
            first += 1;
        else
            second += 1;
    }
    return false;
}

// Testing code.
function test12() {
    const first = [1, 5, 4, 3, 2, 7, 8, 9, 6];
    console.info(findDifference(first, 6));
    console.info(findDifference2(first, 6));
}

test12();

/*
The pair is : 1 & 7
true
The pair is : 1 & 7
true
*/

function findMinDiff(arr) {
    const size = arr.length;
	let diff = Number.MAX_VALUE;
	for (let i = 0; i < size; i++) {
		for (let j = i + 1; j < size; j++) {
			let value = Math.abs(arr[i] - arr[j]);
			if (diff > value)
				diff = value;
		}
	}
	return diff;
}

function findMinDiff2(arr) {
    const size = arr.length;
    arr.sort(function cmp(a, b) { return (a - b); });
    let diff = Number.MAX_VALUE;
    for (let i = 0; i < (size - 1); i++) {
        if ((arr[i + 1] - arr[i]) < diff)
            diff = arr[i + 1] - arr[i];
    }
    return diff;
}

// Testing code.
function test13() {
    let second = [1, 6, 4, 19, 17, 20];
    console.log("findMinDiff : " + findMinDiff(second));
	console.log("findMinDiff : " + findMinDiff2(second));
}

test13()

/*
findMinDiff : 1
findMinDiff : 1
*/

function minDiffPair(arr1, size1, arr2, size2) {
	let diff = Number.MAX_VALUE;
	let first = 0, second = 0;
	for (let i = 0; i < size1; i++) {
		for (let j = 0; j < size2; j++) {
			let value = Math.abs(arr1[i] - arr2[j]);
			if (diff > value) {
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

function minDiffPair2(arr1, size1, arr2, size2) {
	let minDiff = Number.MAX_VALUE;
	let i = 0, j = 0;
	let first = 0, second = 0, diff = 0;
	arr1.sort(function(a, b){return a - b;});
	arr2.sort(function(a, b){return a - b;});
	while (i < size1 && j < size2) {
		diff = Math.abs(arr1[i] - arr2[j]);
		if (minDiff > diff) {
			minDiff = diff;
			first = arr1[i];
			second = arr2[j];
		}

		if (arr1[i] < arr2[j])
			i += 1;
		else
			j += 1;
	}
	console.log("The pair is :: " + first + " & " + second);
	console.log("Minimum difference is :: " + minDiff);
	return minDiff;
}

// Testing code.
function test14() {
    let first = [1, 5, 4, 3, 2, 7, 8, 9, 6];
    let second = [6, 4, 19, 17, 20];
    minDiffPair(first, first.length, second, second.length);
	minDiffPair(first, first.length, second, second.length);
}

test14()

/*
The pair is :: 4 & 4
Minimum difference is :: 0
The pair is :: 4 & 4
Minimum difference is :: 0
*/

function closestPair(arr, size, value) {
    let diff = Number.MAX_VALUE;
    let first = -1, second = -1, curr;
    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            curr = Math.abs(value - (arr[i] + arr[j]));
            if (curr < diff) {
                diff = curr;
                first = arr[i];
                second = arr[j];
            }
        }
    }
    console.info(`closest pair is :: ${first}, ${second}`);
}

function closestPair2(arr, size, value) {
    let first = 0, second = 0;
    let start = 0, stop = size - 1;
    let diff, curr;
    arr.sort(function cmp(a, b) { return (a - b); })
    diff = Number.MAX_VALUE;
    while (start < stop) {
        curr = (value - (arr[start] + arr[stop]));
        if (Math.abs(curr) < diff) {
            diff = Math.abs(curr);
            first = arr[start];
            second = arr[stop];
        }

        if (curr === 0)
            break;
        else if (curr > 0)
            start += 1;
        else
            stop -= 1;
    }
    console.info(`closest pair is :: ${first}, ${second}`);
}

// Testing code.
function test15() {
    let first = [10, 20, 3, 4, 50, 80];
    closestPair(first, first.length, 47);
	closestPair2(first, first.length, 47);
}

test15();

/*
closest pair is :: 3 50
closest pair is :: 3 50
*/

function sumPairRestArray(arr, size) {
    let curr;
    arr.sort(function cmp(a, b) { return (a - b); });
    let total = 0;
    for (let i = 0; i < size; i++) {
        total += arr[i];
    }

    value = Math.floor(total / 2);
    let low = 0;
    let high = size - 1;
    while (low < high) {
        curr = arr[low] + arr[high];
        if (curr === value) {
            console.info(`Pair is :: ${arr[low]}, ${arr[high]}`);
            return true;
        } else if (curr < value)
            low += 1;
        else
            high -= 1;
    }
    return false;
}

// Testing code.
function test16() {
    const first = [1, 2, 4, 3, 7, 3];
    sumPairRestArray(first, first.length);
}

test16();

/*
Pair is :: 3, 7
*/

function zeroSumTriplets(arr, size) {
    for (let i = 0; i < (size - 2); i++) {
        for (let j = i + 1; j < (size - 1); j++) {
            for (let k = j + 1; k < size; k++) {
                if (arr[i] + arr[j] + arr[k] === 0)
                    console.info(`Triplet :: ${arr[i]}, ${arr[j]}, ${arr[k]}`);
            }
        }
    }
}

function zeroSumTriplets2(arr, size) {
    let start;
    let stop;
    arr.sort(function cmp(a, b) { return (a - b); });
    for (let i = 0; i < (size - 2); i++) {
        start = i + 1;
        stop = size - 1;
        while (start < stop) {
            if (arr[i] + arr[start] + arr[stop] === 0) {
                console.info(`Triplet :: ${arr[i]}, ${arr[start]}, ${arr[stop]}`);
                start += 1;
                stop -= 1;
            } else if (arr[i] + arr[start] + arr[stop] > 0)
                stop -= 1;
            else
                start += 1;
        }
    }
}

// Testing code.
function test17() {
    const first = [1, 2, -4, 3, 7, -3];
    zeroSumTriplets(first, first.length);
    console.info()
    zeroSumTriplets2(first, first.length);
}

test17();

/*
Triplet :: 1, 2, -3
Triplet :: 1, -4, 3
Triplet :: -4, 7, -3

Triplet :: -4, -3, 7
Triplet :: -4, 1, 3
Triplet :: -3, 1, 2
*/

function findTriplet(arr, size, value) {
    for (let i = 0; i < (size - 2); i++) {
        for (let j = i + 1; j < (size - 1); j++) {
            for (let k = j + 1; k < size; k++) {
                if ((arr[i] + arr[j] + arr[k]) === value)
                    console.info(`Triplet :: ${arr[i]}, ${arr[j]}, ${arr[k]}`);
            }
        }
    }
}

function findTriplet2(arr, size, value) {
    let start, stop;
    arr.sort(function cmp(a, b) { return (a - b); });
    for (let i = 0; i < size - 2; i++) {
        start = i + 1;
        stop = size - 1;
        while (start < stop) {
            if (arr[i] + arr[start] + arr[stop] === value) {
                console.info(`Triplet ::${arr[i]}, ${arr[start]}, ${arr[stop]}`);
                start += 1;
                stop -= 1;
            } else if (arr[i] + arr[start] + arr[stop] > value)
                stop -= 1;
            else
                start += 1;
        }
    }
}

// Testing code.
function test18() {
    const first = [1, 2, -4, 3, 7, -3];
    findTriplet(first, first.length, 6);
    findTriplet2(first, first.length, 6);
}

test18();

/*
Triplet :: 1, 2, 3
Triplet :: 2, 7, -3
Triplet :: -4, 3, 7

Triplet ::-4, 3, 7
Triplet ::-3, 2, 7
Triplet ::1, 2, 3
*/

function abcTriplet(arr, size) {
	for (let i = 0; i < size - 1; i++) {
		for (let j = i + 1; j < size; j++) {
			for (let k = 0; k < size; k++) {
				if (k != i && k != j && arr[i] + arr[j] == arr[k])
					console.log("abcTriplet:: " + arr[i] + " " + arr[j] + " " + arr[k]);
			}
		}
	}
}

function abcTriplet2(arr, size) {
    let start, stop;
    arr.sort(function cmp(a, b) { return (a > b); });
    for (let i = 0; i < size; i++) {
        start = 0;
        stop = size - 1;
        while (start < stop) {
            if (arr[i] === arr[start] + arr[stop]) {
                console.info(`abcTriplet :: ${arr[i]}, ${arr[start]}, ${arr[stop]}`);
                start += 1;
                stop -= 1;
            } else if (arr[i] < arr[start] + arr[stop])
                stop -= 1;
            else
                start += 1;
        }
    }
}

// Testing code.
function test19() {
    let first = [1, 5, 15, 6, 9, 8];
    abcTriplet(first, first.length);
	abcTriplet2(first, first.length);
}

test19();

/*
abcTriplet:: 1 5 6
abcTriplet:: 1 8 9
abcTriplet:: 6 9 15

abcTriplet :: 6, 1, 5
abcTriplet :: 9, 1, 8
abcTriplet :: 15, 6, 9
*/

function smallerThenTripletCount(arr, size, value) {
	let count = 0;
	for (let i = 0; i < size - 1; i++) {
		for (let j = i + 1; j < size; j++) {
			for (let k = j + 1; k < size; k++) {
				if (arr[i] + arr[j] + arr[k] < value)
					count += 1;
			}
		}
	}
	console.log("smallerThenTripletCount:: " + count);
}

function smallerThenTripletCount2(arr, size, value) {
    let start, stop;
    let count = 0;
    arr.sort(function cmp(a, b) { return (a - b); });
    for (let i = 0; i < (size - 2); i++) {
        start = i + 1;
        stop = size - 1;
        while (start < stop) {
            if (arr[i] + arr[start] + arr[stop] >= value)
                stop -= 1;
            else {
                count += stop - start;
                start += 1;
            }
        }
    }
    console.info(count);
}

// Testing code.
function test20() {
    let first = [-2, -1, 0, 1];
    smallerThenTripletCount(first, first.length, 2);
	smallerThenTripletCount(first, first.length, 2);
}

test20();

/*
smallerThenTripletCount:: 4
smallerThenTripletCount:: 4
*/

function APTriplets(arr, size) {
    for (let i = 1; i < size - 1; i++) {
        let j = i - 1;
        let k = i + 1;
        while (j >= 0 && k < size) {
            if (arr[j] + arr[k] === 2 * arr[i]) {
                console.info(`AP Triplet :: ${arr[j]}, ${arr[i]}, ${arr[k]}`);
                k += 1;
                j -= 1;
            } else if (arr[j] + arr[k] < 2 * arr[i])
                k += 1;
            else
                j -= 1;
        }
    }
}

function GPTriplets(arr, size) {
    for (let i = 1; i < size - 2; i++) {
        let j = i - 1;
        let k = i + 1;
        while (j >= 0 && k < size) {
            if (arr[j] * arr[k] === arr[i] * arr[i]) {
                console.info(`GP Triplet :: ${arr[j]}, ${arr[i]}, ${arr[k]}`);
                k += 1;
                j -= 1;
            } else if (arr[j] * arr[k] < arr[i] * arr[i])
                k += 1;
            else
                j -= 1;
        }
    }
}

// Testing code.
function test21() {
    const first = [1, 2, 3, 4, 9, 17];
    APTriplets(first, first.length);
    GPTriplets(first, first.length);
}

test21();

/*
AP Triplet :: 1, 2, 3
AP Triplet :: 2, 3, 4
AP Triplet :: 1, 9, 17
GP Triplet :: 1, 2, 4
GP Triplet :: 1, 3, 9
*/

function numberOfTriangles(arr, size) {
    let count = 0;
    for (let i = 0; i <= (size - 3); i++) {
        for (let j = i + 1; j <= (size - 2); j++) {
            for (let k = j + 1; k <= size-1; k++) {
                if ((arr[i] + arr[j] > arr[k]) && (arr[k] + arr[j] > arr[i]) && (arr[i] + arr[k] > arr[j])){
                    count += 1;
                }
            }
        }
    }
    return count;
}

function numberOfTriangles2(arr, size) {
    let k;
    let count = 0;
    arr.sort(function cmp(a, b) { return (a - b); });
    for (let i = 0; i < (size - 2); i++) {
        k = i + 2;
        for (let j = i + 1; j < (size - 1); j++) {
            while (k < size && arr[i] + arr[j] > arr[k]) {
                k += 1;
            }
            count += k - j - 1;
        }
    }
    return count;
}

// Testing code.
function test22() {
    const first = [1, 2, 5, 4, 3, 6];
    console.log(numberOfTriangles(first, first.length));
    console.log(numberOfTriangles2(first, first.length));

}

test22();

/*
7
7
*/

function getMax(arr) {
    let max = arr[0];
    const size = arr.length;
    let count = 1;
    let maxCount = 1;
    for (let i = 0; i < size; i++) {
        count = 1;
        for (let j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            max = arr[i];
            maxCount = count;
        }
    }
    return max;
}

function getMax2(arr) {
    let max = arr[0];
    const size = arr.length;
    let maxCount = 1;
    let curr = arr[0];
    let currCount = 1;
    arr.sort(function cmp(a, b) { return (a - b); });
    for (let i = 1; i < size; i++) {
        if (arr[i] === arr[i - 1]) {
            currCount++;
        } else {
            currCount = 1;
            curr = arr[i];
        }

        if (currCount > maxCount) {
            maxCount = currCount;
            max = curr;
        }
    }
    return max;
}

function getMax3(arr, range) {
    let max = arr[0];
    const size = arr.length;
    let maxCount = 1;
    const count = new Array(range).fill(0);
    for (let i = 0; i < size; i++) {
        count[arr[i]]++;
        if (count[arr[i]] > maxCount) {
            maxCount = count[arr[i]];
            max = arr[i];
        }
    }
    return max;
}

// Testing code.
function test23() {
    const first = [1, 3, 5, 3, 1, 2, 4, 2, 2];
    console.log(getMax(first));
    console.log(getMax2(first));
    console.log(getMax3(first, 10));
}

test23();

/*
2
2
2
*/

function getMajority(arr) {
    const size = arr.length;
    let max = 0;
    let count = 0;
    let maxCount = 0;
    for (let i = 0; i < size; i++) {
        count = 1;
        for (let j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        if (count > maxCount) {
            max = arr[i];
            maxCount = count;
        }
    }
    if (maxCount > Math.floor(size / 2))
        return max;
    else
        return 0;
}

function getMajority2(arr) {
    const size = arr.length;
    const majIndex = Math.floor(size / 2);
    let count = 0;
    let candidate;
    arr.sort(function cmp(a, b) { return (a - b); });
    candidate = arr[majIndex];
    for (let i = 0; i < size; i++) {
        if (arr[i] === candidate) {
            count++;
        }
    }

    if (count > Math.floor(size / 2))
        return arr[majIndex];
    else
        return Number.MIN_VALUE;
}

function getMajority3(arr) {
    const size = arr.length;
    let majIndex = 0, count = 1;
    let i, candidate;
    for (i = 1; i < size; i++) {
        if (arr[majIndex] === arr[i]) {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            majIndex = i;
            count = 1;
        }
    }

    candidate = arr[majIndex];
    count = 0;
    for (i = 0; i < size; i++) {
        if (arr[i] === candidate) {
            count++;
        }
    }

    if (count > Math.floor(size / 2)) {
        return arr[majIndex];
    }
    else {
        return Number.MIN_VALUE;
    }
}

function isMajority(arr, size) {
	let count = 0;
	let mid = arr[parseInt(size / 2)];
	for (let i = 0; i < size; i++) {
		if (arr[i] == mid)
			count += 1;
	}

	if (count > parseInt(size / 2))
        return true;
    
	return false;
}

function isMajority2(arr, size) {
    const majority = arr[Math.floor(size / 2)];
    const i = firstIndex(arr, size, 0, size - 1, majority);
    if (((i + size / 2) <= (size - 1)) && arr[i + Math.floor(size / 2)] === majority)
        return true;
    else
        return false;
}

// Testing code.
function test24() {
    const first = [1, 3, 5, 3, 1, 2, 4, 2, 2, 2, 2, 2, 2];
    console.log(getMajority(first));
    console.log(getMajority2(first));
    console.log(getMajority3(first, 10));
    console.log(isMajority(first, first.length))
    console.log(isMajority2(first, first.length))
}

test24();

/*
2
2
2
true
true
*/

function getMedian(arr) {
    const size = arr.length;
    arr.sort(function cmp(a, b) { return (a - b); });
    const mid = Math.floor(size / 2);
    return arr[mid];
}

function getMedian2(arr) {
    const size = arr.length;
    const k = Math.ceil(size/2)
	quickSelectUtil(arr, 0, size - 1, k);
    return arr[k-1];
}

// Testing code.
function test25() {
    const first = [10, 10, 5, 7, 9, 11, 12, 8, 5, 3, 10];
    console.log(`median value is :: ${getMedian(first)}`);
    console.log(`median value is :: ${getMedian2(first)}`);
}

test25();

/*
median value is :: 9
median value is :: 9
*/

function searchBitonicArrayMax(arr) {
    const size = arr.length;
	for (let i = 0; i < size - 2; i++) {
		if (arr[i] > arr[i + 1])
			return i;
	}
	console.log("error not a bitonic array");
	return 0;
}

function searchBitonicArrayMax2(arr) {
    const size = arr.length;
    let start = 0;
    let end = size - 1;
    let mid;
    if (size < 3) {
        console.log("error");
        return -1;
    }

    while ((start <= end)) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid])
            return mid;
        else if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1])
            start = mid + 1;
        else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1])
            end = mid - 1;
        else 
            break;
    }
    console.log("NoMaximaFound");
    return -1;
}


// Testing code.
function test26() {
    const first = [1, 3, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    console.log(first[searchBitonicArrayMax(first)]);
    console.log(first[searchBitonicArrayMax2(first)]);
}

test26();

/*
12
12
*/

function searchBitonicArray(arr, key) {
    const size = arr.length;
    const max = searchBitonicArrayMax(arr);
    let k = binarySearch(arr, 0, max, key, true);
    if (k !== -1) 
        return true;

    k = binarySearch(arr, max + 1, size - 1, key, false);
    if (k !== -1)
        return true;

    return false;
}

function binarySearch(arr, start, end, key, isInc) {
    let mid;
    if (end < start) {
        return -1;
    }

    mid = Math.floor((start + end) / 2);
    if (key === arr[mid]) {
        return mid;
    }

    if (isInc !== false && key < arr[mid] || isInc === false && key > arr[mid]) {
        return binarySearch(arr, start, mid - 1, key, isInc);
    } else {
        return binarySearch(arr, mid + 1, end, key, isInc);
    }
}

function findMaxBitonicArray(arr) {
    const size = arr.length;
    let start = 0, end = size - 1, mid;
    if (size < 3) {
        console.log("Error");
        return -1;
    }

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid])
            return mid;
        else if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1])
            start = mid + 1;
        else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1])
            end = mid - 1;
        else
            break;
    }
    console.log("No Maxima Found");
    return -1;
}

// Testing code.
function test27() {
    const first = [1, 3, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    console.log(searchBitonicArray(first, 8));
    console.log(searchBitonicArray(first, 7));
    console.log(searchBitonicArray(first, 12));
    console.log(findMaxBitonicArray(first));
}

test27();

/*
true
true
true
6
*/

function findKeyCount(arr, key) {
    const size = arr.length;
    let count = 0;
    for (let i = 0; i < size; i++) {
        if (arr[i] === key)
            count++;
    }
    return count;
}

function findKeyCount2(arr, key) {
    const size = arr.length;
    const firstIndex = findFirstIndex(arr, 0, size - 1, key);
    const lastIndex = findLastIndex(arr, 0, size - 1, key);
    return (lastIndex - firstIndex + 1);
}

function findFirstIndex(arr, start, end, key) {
    if (end < start) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);
    if (key === arr[mid] && (mid === start || arr[mid - 1] !== key)) {
        return mid;
    }

    if (key <= arr[mid]) {
        return findFirstIndex(arr, start, mid - 1, key);
    } else {
        return findFirstIndex(arr, mid + 1, end, key);
    }
}

function findLastIndex(arr, start, end, key) {
    if (end < start) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);
    if (key === arr[mid] && (mid === end || arr[mid + 1] !== key)) {
        return mid;
    }

    if (key < arr[mid]) {
        return findLastIndex(arr, start, mid - 1, key);
    } else {
        return findLastIndex(arr, mid + 1, end, key);
    }
}

// Testing code.
function test28() {
    const first = [1, 3, 5, 6, 6, 6, 6, 7, 9];
    console.info(findKeyCount(first, 6));
    console.info(findKeyCount2(first, 6));
}

test28();

/*
4
4
*/

/* Using binary search method. */
function firstIndex(arr, size, low, high, value) {
    let mid = 0;
    if (high >= low)
        mid = Math.floor((low + high) / 2 );
    /*
    * Find first occurrence of value, either it should be the first 
    * element of the array or the value before it is smaller than it.
    */
    if ((mid === 0 || arr[mid - 1] < value) && (arr[mid] === value))
        return mid;
    else if (arr[mid] < value)
        return firstIndex(arr, size, mid + 1, high, value);
    else
        return firstIndex(arr, size, low, mid - 1, value);
}

function maxProfit(stocks) {
    const size = stocks.length;
	let maxProfit = 0, buy = 0, sell = 0;
	for (let i = 0; i < size - 1; i++) {
		for (let j = i + 1; j < size; j++) {
			if (maxProfit < stocks[j] - stocks[i]) {
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

function maxProfit2(stocks) {
    const size = stocks.length;
    let buy = 0, sell = 0;
    let curMin = 0, currProfit = 0, maxProfit = 0;

    for (let i = 0; i < size; i++) {
        if (stocks[i] < stocks[curMin]) {
            curMin = i;
        }

        currProfit = stocks[i] - stocks[curMin];
        if (currProfit > maxProfit) {
            buy = curMin;
            sell = i;
            maxProfit = currProfit;
        }
    }
    console.log(`Purchase day is ${buy} at price ${stocks[buy]}`);
    console.log(`Sell day is ${sell} at price ${stocks[sell]}`);
    return maxProfit;
}

// Testing code.
function test29() {
    const first = [10, 150, 6, 67, 61, 16, 86, 6, 67, 78, 150, 3, 28, 143];
    console.log("Profit is :", maxProfit(first));
    console.log("Profit is :", maxProfit2(first));
}

test29();

/*
Purchase day is 2 at price 6
Sell day is 10 at price 150
Profit is : 144

Purchase day is 2 at price 6
Sell day is 10 at price 150
Profit is : 144
*/

function findMedian(arrFirst, arrSecond) {
    const sizeFirst = arrFirst.length;
    const sizeSecond = arrSecond.length;
    const medianIndex = Math.ceil((sizeFirst + sizeSecond) / 2);
    let i = 0, j = 0, count = 0;
    while (count < medianIndex - 1) {
        if (i < sizeFirst - 1 && arrFirst[i] < arrSecond[j]) {
            i++;
        } else {
            j++;
        }
        count++;
    }

    if (arrFirst[i] < arrSecond[j]) {
        return arrFirst[i];
    } else {
        return arrSecond[j];
    }
}

// Testing code.
function test30() {
    const first = [1, 5, 6, 6, 6, 6, 6, 6, 7, 8, 10, 13, 20, 30];
    const second = [1, 5, 6, 6, 6, 6, 6, 6, 7, 8, 10, 13, 20, 30 ];
    console.log(`median value is :: ${findMedian(first, second)}`);
}

test30();

// median value is :: 6

function swap(arr, first, second) {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

function search01(arr, size) {
	for (let i = 0; i < size; i++) {
		if (arr[i] == 1) {
			return i;
		}
	}
	return -1;
}

function binarySearch01(arr) {
    const size = arr.length;
    if (size === 0) {
        return 0;
    }
    return binarySearch01Util(arr, 0, size - 1);
}

function binarySearch01Util(arr, start, end) {
    if (end < start) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);
    if ("1" === arr[mid] && "0" === arr[mid - 1]) {
        return mid;
    }

    if ("0" === arr[mid]) {
        return binarySearch01Util(arr, mid + 1, end);
    } else {
        return binarySearch01Util(arr, start, mid - 1);
    }
}

// Testing code.
function test31() {
    const first = "00000000111";
    console.log("search01 index is :: " + search01(first, first.length));
    console.log(`binarySearch01 index is :: ${binarySearch01(first)}`);
}

test31();

/*
search01 index is :: 8
binarySearch01 index is :: 8
*/

function searchRotateArray(arr, key) {
    const size = arr.length;
	for (let i = 0; i < size; i++) {
		if (arr[i] == key) {
			return i;
		}
	}
	return -1;
}

function binarySearchRotateArray(arr, key) {
    const size = arr.length;
    return binarySearchRotateArrayUtil(arr, 0, size - 1, key);
}

function binarySearchRotateArrayUtil(arr, start, end, key) {
    if (end < start) {
        return -1;
    }
    const mid = Math.floor((start + end) / 2);
    if (key === arr[mid]) {
        return mid;
    }
    if (arr[mid] > arr[start]) {
        if (arr[start] <= key && key < arr[mid]) {
            return binarySearchRotateArrayUtil(arr, start, mid - 1, key);
        } else {
            return binarySearchRotateArrayUtil(arr, mid + 1, end, key);
        }
    }
    else {
        if (arr[mid] < key && key <= arr[end]) {
            return binarySearchRotateArrayUtil(arr, mid + 1, end, key);
        } else {
            return binarySearchRotateArrayUtil(arr, start, mid - 1, key);
        }
    }
}

function rotationMax(arr, size) {
	for (let i = 0; i < size - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			return arr[i];
		}
	}
	return -1;
}

function rotationMaxUtil(arr, start, end) {
    if (end <= start) {
        return arr[start];
    }
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1])
        return arr[mid];
    
    if (arr[start] <= arr[mid])
        return rotationMaxUtil(arr, mid + 1, end);
    else
        return rotationMaxUtil(arr, start, mid - 1);
}

function rotationMax2(arr, size) {
    return rotationMaxUtil(arr, 0, size - 1);
}

function findRotationMax(arr, size) {
	for (let i = 0; i < size - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			return i;
		}
	}
	return -1;
}

function rotationMaxIndexUtil(arr, start, end) {
    if (end <= start)
        return start;
    
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1])
        return mid;
    
    if (arr[start] <= arr[mid])
        return rotationMaxIndexUtil(arr, mid + 1, end);
    else
        return rotationMaxIndexUtil(arr, start, mid - 1);
}

function findRotationMaxIndex(arr, size) {
    return rotationMaxIndexUtil(arr, 0, size - 1);
}

function CountRotation(arr, size) {
    const maxIndex = rotationMaxIndexUtil(arr, 0, size - 1);
    return (maxIndex + 1) % size;
}

// Testing code.
function test32() {
    first = [8, 9, 10, 11, 3, 5, 7]
    console.log(`searchRotateArray index is :: ${searchRotateArray(first, 7)}`);
    console.log(`searchRotateArray index is :: ${searchRotateArray(first, 6)}`);
    console.log(`binarySearchRotateArray index is :: ${binarySearchRotateArray(first, 7)}`);
    console.log(`binarySearchRotateArray index is :: ${binarySearchRotateArray(first, 6)}`);
    console.log(`rotationMax is :: ${rotationMax(first, first.length)}`);
    console.log(`CountRotation is :: ${CountRotation(first, first.length)}`);
}

test32();

/*
binarySearchRotateArray index is :: 6
binarySearchRotateArray index is :: -1
rotationMax is :: 11
CountRotation is :: 4
*/

function minAbsDiffAdjCircular(arr, size) {
    if (size < 2)
        return -1;
    
    let diff = Number.MAX_VALUE;
    for (let i = 0; i < size; i++) {
        diff = Math.min(diff, Math.abs(arr[i] - arr[(i + 1) % size]));
    }
    return diff;
}

// Testing code.
function test33() {
    const arr = [5, 29, 18, 51, 11];
    console.info(minAbsDiffAdjCircular(arr, arr.length));
}

test33();

//6

function swapch(arr, first, second){
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

function transformArrayAB(str) {
    arr = str.split("");
    const size = str.length;
    const N = Math.floor(size / 2);
    for (let i = 1; i < N; i++) {
        for (let j = 0; j < i; j++) {
            swap(arr, N - i + 2 * j, N - i + 2 * j + 1);
        }
    }
    return arr.join("");
}

// Testing code.
function test34() {
    first = "aaaabbbb"
    console.log(transformArrayAB(first));
}

test34();

//abababab

function checkPermutation(array1, array2) {
    const size1 = array1.length;
    const size2 = array2.length;
    if (size1 !== size2) {
        return false;
    }

    array1.sort(function cmp(a, b) { return (a - b); });
    array2.sort(function cmp(a, b) { return (a - b); });
    for (let i = 0; i < size1; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

function checkPermutation2(array1, array2) {
    const size1 = array1.length;
    const size2 = array2.length;
    if (size1 !== size2) {
        return false;
    }

    const ht = {};
    let i;
    for (i = 0; i < size1; i++) {
        if (array1[i] in ht) {
            ht[array1[i]] += 1
        } else {
            ht[array1[i]] = 1
        }
    }

    for (i = 0; i < size2; i++) {
        if (array2[i] in ht === false) {
            return false;
        } else {
            ht[array1[i]] -= 1
            if (ht[array1[i]] == 0) {
                delete ht[array2[i]]
            }
        }
    }
    return true;
}

function checkPermutation3(array1, array2) {
    const size1 = array1.length;
    const size2 = array2.length;
    if (size1 != size2) {
		return false;
    }
    
	let count = Array(256).fill(0);
	for (let i = 0; i < size1; i++) {
		count[array1[i]]++;
		count[array2[i]]--;
    }
    
	for (let i = 0; i < size1; i++)	{
		if (count[i] != 0) {
			return false;
		}
	}
	return true;
}

// Testing code.
function test35() {
    const first = [1, 2, 3, 1, 2, 3, 5, 6, 7, 7, 8, 9, 3, 4, 5];
    const second = [1, 2, 4, 5, 3, 1, 2, 3, 5, 6, 7, 7, 8, 9, 3];
    console.log(`checkPermutation : ${checkPermutation(first, second)}`)
    console.log(`checkPermutation2 : ${checkPermutation2(first, second)}`)
    console.log(`checkPermutation3 : ${checkPermutation3(first, second)}`)
}

test35();

/*
checkPermutation : true
checkPermutation2 : true
checkPermutation3 : true
*/

function findElementIn2DArray(arr, r, c, value) {
    let row = 0;
    let column = c - 1;
    while (row < r && column >= 0) {
        if (arr[row][column] === value) {
            return true;
        } else if (arr[row][column] > value) {
            column--;
        } else {
            row++;
        }
    }
    return false;
}

// Testing code.
function test36() {
    const f = new Array(10);
    let count = 0;
    for (let i = 0; i < 10; i++) {
        f[i] = new Array(10);
        for (let j = 0; j < 10; j++) {
            f[i][j] = count++;
        }
    }
    console.log(findElementIn2DArray(f, 10, 10, 21));
    console.log(findElementIn2DArray(f, 10, 10, 121));
}

test36();

/*
true
false
*/

function isAP(arr, size) {
    if (size <= 1)
        return true;
    
    arr.sort(function cmp(a, b) { return (a - b); });
    const diff = arr[1] - arr[0];
    for (let i = 2; i < size; i++) {
        if (arr[i] - arr[i - 1] !== diff)
            return false;
    }
    return true;
}

function isAP2(arr, size) {
    let first = Number.MAX_VALUE;
    let second = Number.MAX_VALUE;
    let value;
    let diff;
    const hs = new Set();
    for (let i = 0; i < size; i++) {
        if (arr[i] < first) {
            second = first;
            first = arr[i];
        } else if (arr[i] < second)
            second = arr[i];
    }
    diff = second - first;

    for (let i = 0; i < size; i++) {
        if (hs.has(arr[i]))
            return false;
        hs.add(arr[i]);
    }

    for (let i = 0; i < size; i++) {
        value = first + i * diff;
        if (!hs.has(value))
            return false;
    }
    return true;
}

function isAP3(arr, size) {
    let first = Number.MAX_VALUE;
    let second = Number.MAX_VALUE;
    const count = new Array(size).fill(0);
    let index = -1;
    for (let i = 0; i < size; i++) {
        if (arr[i] < first) {
            second = first;
            first = arr[i];
        } else if (arr[i] < second)
            second = arr[i];
    }

    const diff = second - first;
    for (let i = 0; i < size; i++) {
        index = (arr[i] - first) / diff ;
        if (index > size - 1 || count[index] !== 0)
            return false;
        count[index] = 1;
    }

    for (let i = 0; i < size; i++) {
        if (count[i] !== 1)
            return false;
    }
    return true;
}

// Testing code.
function test37() {
    const first = [3, 6, 9, 12, 15];
    const size = first.length;

    console.log(`isAP ${isAP(first, size)}`)
    console.log(`isAP ${isAP2(first, size)}`)
    console.log(`isAP ${isAP3(first, size)}`)
}

test37();

/*
isAP true
isAP true
isAP true
*/

function findBalancedPoint(arr, size) {
    let first = 0;
    let second = 0;
    for (let i = 1; i < size; i++) {
        second += arr[i];
    }

    for (let i = 0; i < size; i++) {
        if (first === second) {
            return i;
        }

        if (i < size - 1)
            first += arr[i];
        second -= arr[i + 1];
    }
    return -1;
}

// Testing code.
function test38() {
    const arr = [-7, 1, 5, 2, -4, 3, 0];
    console.info("BalancedPoint : " , findBalancedPoint(arr, arr.length));
}

test38();

//BalancedPoint :  3

function findFloor(arr, size, value) {
    let start = 0;
    let stop = size - 1;
    let mid;
    while (start <= stop) {
        mid = Math.floor((start + stop) / 2);
        if (arr[mid] === value || (arr[mid] < value && (mid === size - 1 || arr[mid + 1] > value)))
            return arr[mid];
        else if (arr[mid] < value)
            start = mid + 1;
        else
            stop = mid - 1;
    }
    console.log("Floor value not found.")
    return Number.MIN_VALUE;
}

function findCeil(arr, size, value) {
    let start = 0;
    let stop = size - 1;
    let mid;
    while (start <= stop) {
        mid = Math.floor((start + stop) / 2);
        if (arr[mid] === value || (arr[mid] > value && (mid === 0 || arr[mid - 1] < value)))
            return arr[mid];
        else if (arr[mid] < value)
            start = mid + 1;
        else
            stop = mid - 1;
    }
    console.log("Ceil value not found.")
    return Number.MAX_VALUE;
}

// Testing code.
function test39() {
    let arr = [2, 4, 8, 16];
    console.log("Floor :", findFloor(arr, arr.length, 5));
    console.log("Ceil :", findCeil(arr, arr.length, 5));
}

test39()

/*
Floor :  4
Ceil :  8
*/

function closestNumber(arr, size, num) {
    let start = 0;
    let stop = size - 1;
    let output = -1;
    let minDist = Number.MAX_VALUE;
    let mid;

    while (start <= stop) {
        mid = Math.floor((start + stop) / 2);
        if (minDist > Math.abs(arr[mid] - num)) {
            minDist = Math.abs(arr[mid] - num);
            output = arr[mid];
        }

        if (arr[mid] === num)
            break;
        else if (arr[mid] > num)
            stop = mid - 1;
        else
            start = mid + 1;
    }
    return output;
}

// Testing code.
function test40() {
    const arr = [ 2, 4, 8, 16];
    console.info("closestNumber :" , closestNumber(arr, arr.length, 9));
}

test40();

/*
closestNumber : 8
*/

function duplicateKDistance(arr, size, k) {
    const hm = new Map();

    for (let i = 0; i < size; i++) {
        if (hm.has(arr[i]) && i - hm.get(arr[i]) <= k) {
            console.log(`Value:${arr[i]} Index: ${hm.get(arr[i])} & ${i}`);
            return true;
        } else
            hm.set(arr[i], i);
    }
    return false;
}

// Testing code.
function test41() {
    const arr = [2, 3, 1, 4, 2, 1];
    duplicateKDistance(arr, arr.length, 3);
}

test41();

// Value:1 Index: 2 & 5

function frequencyCounts(arr, size) {
	let hm = new Map();
	for (let i = 0; i < size; i++) {
		if (hm.has(arr[i]))
			hm.set(arr[i], hm.get(arr[i]) + 1);
		else
			hm.set(arr[i], 1);
	}

	for (const key of hm.keys())
		console.log("(" + key + " : " + hm.get(key) + ") ");
}

function frequencyCounts2(arr, size) {
	arr.sort(function(a, b){ return a - b; });
	let count = 1;
	for (let i = 1; i < size; i++) {
		if (arr[i] == arr[i - 1]) {
			count++;
		} else {
			console.log("(" + arr[i - 1] + " : " + count + ") ");
			count = 1;
		}
	}
	console.log("(" + arr[size - 1] + " : " + count + ") ");
}

function frequencyCounts3(arr, size) {
	let aux = Array(size + 1).fill(0);
	for (let i = 0; i < size; i++) {
		aux[arr[i]] += 1;
    }
    
	for (let i = 0; i < size + 1; i++) {
		if (aux[i] > 0) {
			console.log("(" + i + " : " + aux[i] + ") ");
		}
	}
	console.log();
}

function frequencyCounts4(arr, size) {
	let index = 0;
	for (let i = 0; i < size; i++) {
		while (arr[i] > 0) {
			index = arr[i] - 1;
			if (arr[index] > 0) {
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
    
	for (let i = 0; i < size; i++) {
		if (arr[i] != 0) {
			console.log("(" + (i + 1) + " : " + Math.abs(arr[i]) + ") ");
		}
	}
	console.log();
}

// Testing code.
function test42() {
    let arr = [1, 2, 2, 2, 1];
    frequencyCounts(arr, arr.length);
	frequencyCounts2(arr, arr.length);
	frequencyCounts3(arr, arr.length);
	frequencyCounts4(arr, arr.length);
}

test42()

/*
(1 : 2) 
(2 : 3) 

(1 : 2) 
(2 : 3) 

(1 : 2) 
(2 : 3) 

(1 : 2) 
(2 : 3) 
*/

function KLargestElements(arr, size, k) {
    arr.sort(function cmp(a, b) { return (a - b); });
    let output = "";
    for (let i = 0; i < k; i++) {
        output += (arr[size - 1 - i] + " ");
    }
    console.log(output);
}

function quickSelectUtil(arr, lower, upper, k) {
    if (upper <= lower)
        return;
    const pivot = arr[lower];
    const start = lower;
    const stop = upper;
    while (lower < upper) {
        while (arr[lower] <= pivot) {
            lower++;
        }

        while (arr[upper] > pivot) {    
            upper--;
        }

        if (lower < upper) {
            swap(arr, upper, lower);
        }
    }

    swap(arr, upper, start);
    if (k < upper)
        quickSelectUtil(arr, start, upper - 1, k);
    if (k > upper)
        quickSelectUtil(arr, upper + 1, stop, k);
}

function KLargestElements2(arr, size, k) {
    quickSelectUtil(arr, 0, size - 1, size - k);
    let output = "";
    for (let i = 0; i < k; i++) {
        output += (arr[size -1 - i] + " ");
    }
    console.log(output);
}

// Testing code.
function test43() {
    let arr = [1, 3, 4, 2, 2, 1, 5, 9, 3];
    KLargestElements(arr, arr.length, 4);
    arr = [1, 3, 4, 2, 2, 1, 5, 9, 3];
    KLargestElements2(arr, arr.length, 4);
}

test43();

/*
9 5 4 3 
5 9 4 3 
*/

function fixPoint(arr, size) {
    for (let i = 0; i < size; i++) {
        if (arr[i] === i)
            return i;
    }
    return -1;
}

function fixPoint2(arr, size) {
    let low = 0;
    let high = size - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === mid)
            return mid;
        else if (arr[mid] < mid)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}

// Testing code.
function test44() {
    const arr = [-1, 0, 2, 3, 6, 7, 9, 10, 18];
    console.log(fixPoint(arr, arr.length));
    console.log(fixPoint2(arr, arr.length));
}

test44();

/*
2
2
*/

function subArraySums(arr, size, value) {
    let start = 0, end = 0, sum = 0;
    var output = `Values between index : `;

    while (start < size && end < size) {
        if (sum < value) {
            sum += arr[end];
            end += 1;
        } else {
            sum -= arr[start];
            start += 1;
        }
        
        if (sum === value) {
            output += `(${start} & ${end}) `
        }
    }
    console.info(output);
}

// Testing code.
function test45() {
    const arr = [15, 5, 5, 20, 10, 5, 5, 20, 10, 10];
    subArraySums(arr, arr.length, 20);
}

test45();

/*
Values between index : (0 & 2) (3 & 4) (4 & 7) (7 & 8) (8 & 10) 
*/

function maxConSub(arr, size) {
    let currMax = 0;
    let maximum = 0;
    for (let i = 0; i < size; i++) {
        currMax = Math.max(arr[i], currMax + arr[i]);
        if (currMax < 0)
            currMax = 0;
        
        if (maximum < currMax)
            maximum = currMax;
    }
    return maximum;
}

// Testing code.
function test46() {
    const arr = [1, -2, 3, 4, -4, 6, -4, 8, 2];
    console.log(maxConSub(arr, arr.length));
}

test46();

/*
15
*/

function maxConSubArr(A, sizeA, B, sizeB) {
    let currMax = 0;
    let maximum = 0;
    const hs = new Set();
    for (let i = 0; i < sizeB; i++)
        hs.add(B[i]);
    
    for (let i = 0; i < sizeA; i++){
        if (hs.has(A[i]))
            currMax = 0;
        else
            currMax = Math.max(A[i], currMax + A[i]);

        if (currMax < 0)
            currMax = 0;

        if (maximum < currMax)
            maximum = currMax;
    }
    return maximum;
}

function binarySearch(arr, value) {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === value) {
            return true;
        } else if (arr[mid] < value) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}

function maxConSubArr2(A, sizeA, B, sizeB) {
    B.sort(function cmp(a, b) { return (a - b); });
    let currMax = 0;
    let maximum = 0;
    for (let i = 0; i < sizeA; i++) {
        if (binarySearch(B, A[i]))
            currMax = 0;
        else {
            currMax = Math.max(A[i], currMax + A[i]);
            if (currMax < 0)
                currMax = 0;
            
            if (maximum < currMax)
                maximum = currMax;
        }
    }
    return maximum;
}

// Testing code.
function test47() {
    const arr = [1, 2, 3, 4, 4, 6, 4, 8, 2];
    const arr2 = [2,4, 8, 18, 10];
    console.log("maximum : " + maxConSubArr(arr, arr.length, arr2, arr2.length));
    console.log("maximum : " + maxConSubArr2(arr, arr.length, arr2, arr2.length));
}

test47();

/*
maximum : 6
maximum : 6
*/

function rainWater(arr, size) {
    const leftHigh = new Array(size);
    const rightHigh = new Array(size);
    let max = arr[0];
    leftHigh[0] = arr[0];
    
    for (let i = 1; i < size; i++) {
        if (max < arr[i])
            max = arr[i];
        leftHigh[i] = max;
    }

    max = arr[size - 1];
    rightHigh[size - 1] = arr[size - 1];
    for (let i = (size - 2); i >= 0; i--) {
        if (max < arr[i])
            max = arr[i];
        rightHigh[i] = max;
    }

    let water = 0;
    for (let i = 0; i < size; i++) {
        water += Math.min(leftHigh[i], rightHigh[i]) - arr[i];
    }
    console.info(`Water : ${water}`);
    return water;
}

function rainWater2(arr, size) {
    let water = 0;
    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = size - 1;
    
    while (left <= right) {
        if (arr[left] < arr[right]) {
            if (arr[left] > leftMax)
                leftMax = arr[left];
            else
                water += leftMax - arr[left];
            left += 1;
        } else {
            if (arr[right] > rightMax)
                rightMax = arr[right];
            else
                water += rightMax - arr[right];
            right -= 1;
        }
    }
    console.info(`Water : ${water}`);
    return water;
}

// Testing code.
function test48() {
    const arr = [4, 0, 1, 5];
    rainWater(arr, arr.length);
    rainWater2(arr, arr.length);
}

test48();

/*
Water : 7
Water : 7
*/

function separateEvenAndOdd(arr) {
    const size = arr.length;
    let left = 0;
    let right = size - 1;
    while (left < right) {
        if (arr[left] % 2 === 0) {
            left++;
        } else if (arr[right] % 2 === 1) {
            right--;
        } else {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
}

// Testing code.
function test49() {
    const first = [1, 0, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    separateEvenAndOdd(first);
    console.log(first);
}

test49();

/*
[ 8, 0, 12, 7, 9, 11, 5, 1, 5, 3, 1 ]
*/

function SmallestPositiveMissingNumber(arr, size) {
    let found;
    for (let i = 1; i < size + 1; i++) {
        found = 0;
        for (let j = 0; j < size; j++) {
            if (arr[j] === i) {
                found = 1;
                break;
            }
        }

        if (found === 0) {
            return i;
        }
    }
    return -1;
}

function SmallestPositiveMissingNumber2(arr, size) {
    const hs = new Set();
    for (let i = 0; i < size; i++) {
        hs.add(arr[i]);
    }

    for (let i = 1; i < size + 1; i++) {
        if (hs.has(i) === false)
            return i;
    }
    return -1;
}

function SmallestPositiveMissingNumber3(arr, size) {
    const aux = new Array(size).fill(-1);

    for (let i = 0; i < size; i++) {
        if (arr[i] > 0 && arr[i] <= size) {
            aux[arr[i] - 1] = arr[i];
        }
    }
    
    for (let i = 0; i < size; i++) {
        if (aux[i] !== i + 1) {
            return i + 1;
        }
    }
    return -1;
}

function SmallestPositiveMissingNumber4(arr, size) {
    let temp;
    for (let i = 0; i < size; i++) {
        while (arr[i] !== i + 1 && arr[i] > 0 && arr[i] <= size) {
            temp = arr[i];
            arr[i] = arr[temp - 1];
            arr[temp - 1] = temp;
        }
    }
    
    for (let i = 0; i < size; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return -1;
}

// Testing code.
function test17() {
    const arr = [8, 5, 6, 1, 9, 11, 2, 7, 4, 10];
    const size = arr.length;
    console.log(`Smallest Positive Missing Number :${SmallestPositiveMissingNumber(arr, size)}`);
    console.log(`Smallest Positive Missing Number :${SmallestPositiveMissingNumber2(arr, size)}`);
    console.log(`Smallest Positive Missing Number :${SmallestPositiveMissingNumber3(arr, size)}`);
    console.log(`Smallest Positive Missing Number :${SmallestPositiveMissingNumber4(arr, size)}`);
}

test17();

/*
Smallest Positive Missing Number :3
Smallest Positive Missing Number :3
Smallest Positive Missing Number :3
Smallest Positive Missing Number :3
*/



function ArrayIndexMaxDiff(arr, size) {
    let maxDiff = -1;
    let j;
    for (let i = 0; i < size; i++) {
        j = size - 1;
        while (i < j) {
            if (arr[i] <= arr[j]) {
                maxDiff = Math.max(maxDiff, j - i);
                break;
            }
            j -= 1;
        }
    }
    return maxDiff;
}

function ArrayIndexMaxDiff2(arr, size) {
    const rightMax = new Array(size);
    rightMax[size - 1] = arr[size - 1];
    for (let i = size - 2; i >= 0; i--) {
        if (rightMax[i + 1] > arr[i]) {
            rightMax[i] = rightMax[i + 1];
        } else {
            rightMax[i] = arr[i];
        }
    }

    let maxDiff = -1;
    let i = 0;
    let j = 1;
    while (j < size && i < size) {
        if (arr[i] <= rightMax[j]) {
            if (i < j)
                maxDiff = Math.max(maxDiff, j - i);
            j = j + 1;
        } else {
            i = i + 1;
        }
    }
    return maxDiff;
}

// Testing code.
function test20() {
    const arr = [33, 9, 10, 3, 2, 60, 30, 33, 1];
    console.log(`ArrayIndexMaxDiff : ${ArrayIndexMaxDiff(arr, arr.length)}`);
    console.log(`ArrayIndexMaxDiff : ${ArrayIndexMaxDiff2(arr, arr.length)}`);
}

test20();
/*
ArrayIndexMaxDiff : 7
ArrayIndexMaxDiff : 7
*/

function maxPathSum(arr1, size1, arr2, size2) {
    let i = 0, j = 0;
    let result = 0;
    let sum1 = 0, sum2 = 0;
    
    while (i < size1 && j < size2) {
        if (arr1[i] < arr2[j]) {
            sum1 += arr1[i];
            i += 1;
        } else if (arr1[i] > arr2[j]) {
            sum2 += arr2[j];
            j += 1;
        } else {
            result += Math.max(sum1, sum2);
            result = result + arr1[i];
            sum1 = 0;
            sum2 = 0;
            i += 1;
            j += 1;
        }
    }

    while (i < size1) {
        sum1 += arr1[i];
        i += 1;
    }

    while (j < size2) {
        sum2 += arr2[j];
        j += 1;
    }
    result += Math.max(sum1, sum2);
    return result;
}

// Testing code.
function test21() {
    const arr1 = [12, 13, 18, 20, 22, 26, 70];
    const arr2 = [11, 15, 18, 19, 20, 26, 30, 31];
    console.log(`Max Path Sum :: ${maxPathSum(arr1, arr1.length, arr2, arr2.length)}`);
}

test21();
// Max Path Sum :: 201

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

    for (let j = i; j < length; j++) {
        swap(arr, i, j);
        permutation(arr, i + 1, length);
        swap(arr, i, j);
    }
}

// Testing code.
function test22() {
    const arr = [1, 2, 3];
    permutation(arr, 0, 3);
}

test22();
/*
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 2, 1 ]
[ 3, 1, 2 ]
*/


