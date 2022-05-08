function swap(arr, x, y) {
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
    return;
}

function partition01(arr, size) {
    let left = 0;
    let right = size - 1;
    let count = 0;
    while (left < right) {
        while (arr[left] === 0) {
            left += 1;
        }

        while (arr[right] === 1) {
            right -= 1;
        }

        if (left < right) {
            swap(arr, left, right);
            count += 1;
        }
    }
    return count;
}

function partition012_(arr, size){
	let zero = 0;
	let one = 0;
	let two = 0;
	for (let i = 0; i < size; i++) {
		if (arr[i] == 0) {
			zero += 1;
		} else if (arr[i] == 1) {
			one += 1;
		} else {
			two += 1;
		}
    }
    
	let index = 0;
	while (zero > 0) {
		arr[index++] = 0;
		zero -= 1;
    }
    
	while (one > 0) {
		arr[index++] = 1;
		one -= 1;
    }
    
	while (two > 0) {
		arr[index++] = 2;
		two -= 1;
	}
}

function partition012(arr, size) {
    let left = 0;
    let right = size - 1;
    let i = 0;
    while (i <= right) {
        if (arr[i] === 0) {
            swap(arr, i, left);
            i += 1;
            left += 1;
        } else if (arr[i] === 2) {
            swap(arr, i, right);
            right -= 1;
        } else {
            i += 1;
        }
    }
}

// Testing code.
function test1() {
const arr = [0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1];
partition01(arr, arr.length);
console.log(JSON.stringify(arr));

    let arr2 = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
    partition012(arr2, arr2.length);
    console.log(JSON.stringify(arr2));

arr2 = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
partition012_(arr2, arr2.length);
console.log(JSON.stringify(arr2));
}

test1();

/*
[0,0,0,0,0,0,1,1,1,1,1,1]
[0,0,0,0,0,1,1,1,1,1,2,2]
[0,0,0,0,0,1,1,1,1,1,2,2]
*/

function RangePartition(arr, size, lower, higher) {
    let start = 0;
    let end = size - 1;
    let i = 0;
    while (i <= end) {
        if (arr[i] < lower) {
            swap(arr, i, start);
            i += 1;
            start += 1;
        } else if (arr[i] > higher) {
            swap(arr, i, end);
            end -= 1;
        } else {
            i += 1;
        }
    }
}

// Testing code.
function test2() {
const arr = [1, 21, 2, 20, 3, 19, 4, 18, 5, 17, 6, 16, 7, 15, 8, 14, 9, 13, 10, 12, 11];
RangePartition(arr, arr.length, 9, 15);
console.log(JSON.stringify(arr));
}

test2();

/*
[1,2,3,4,5,6,7,8,11,9,10,14,12,15,13,16,17,18,19,20,21]
*/

function minSwaps(arr, size, val) {
    let swapCount = 0;
    let first = 0;
    let second = size - 1;
    let temp;
    while (first < second) {
        if (arr[first] < val)
            first += 1;
        else if (arr[second] >= val)
            second -= 1;
        else {
            temp = arr[first];
            arr[first] = arr[second];
            arr[second] = temp;
            swapCount += 1;
        }
    }
    return swapCount;
}

// Testing code.
function test3(){
let arr = [2, 7, 5, 6, 1, 3, 4, 9, 10, 8];
let val = 5;
console.log(minSwaps(arr, 10, val));
}

test3();
// 3

function AbsGreater(value1, value2, ref) {
    return (Math.abs(value1 - ref) > Math.abs(value2 - ref));
}

function AbsBubbleSort(arr, size, ref) {
    for (let i = 0; i < (size - 1); i++) {
        for (let j = 0; j < (size - i - 1); j++) {
            if (AbsGreater(arr[j], arr[j + 1], ref)) {
                swap(arr, j, j + 1);
            }
        }
    }
}

// Testing code.
function test5() {
const array = [9, 1, 8, 2, 7, 3, 6, 4, 5];
const ref = 5;
AbsBubbleSort(array, array.length, ref);
console.log(JSON.stringify(array));
}

test5();
/*
[5,6,4,7,3,8,2,9,1]
*/

function EqGreater(value1, value2, A) {
    value1 = A * value1 * value1;
    value2 = A * value2 * value2;
    return value1 > value2;
}

function separateEvenAndOdd(data, size) {
	let left = 0;
	let right = size - 1;
	let aux = Array(size).fill(0);
	for (let i = 0; i < size; i++) {
		if (data[i] % 2 == 0) {
			aux[left] = data[i];
			left++;
		} else if (data[i] % 2 == 1) {
			aux[right] = data[i];
			right--;
		}
	}
	for (let i = 0; i < size; i++) {
		data[i] = aux[i];
	}
}

function separateEvenAndOdd2(data, size) {
    let left = 0;
    let right = size - 1;
    while (left < right) {
        if (data[left] % 2 === 0)
            left++;
        else if (data[right] % 2 === 1)
            right--;
        else {
            swap(data, left, right);
            left++;
            right--;
        }
    }
}

// Testing code.
function test4(){
let array = [9, 1, 8, 2, 7, 3, 6, 4, 5];
separateEvenAndOdd(array, array.length);
console.log(JSON.stringify(array));
	let array2 = [9, 1, 8, 2, 7, 3, 6, 4, 5];
	separateEvenAndOdd2(array2, array2.length);
	console.log(JSON.stringify(array2));
}

test4();
/*
[8,2,6,4,5,3,7,1,9]
[4,6,8,2,7,3,1,9,5]
*/

function ArrayReduction(arr, size) {
    arr.sort(function cmp(a, b) { return (a - b); });
    let count = 1;
    let reduction = arr[0];
    for (let i = 0; i < size; i++) {
        if (arr[i] - reduction > 0) {
            reduction = arr[i];
            count += 1;
        }
    }
    console.log(`Total number of reductions : ${count}`);
    return count
}

// Testing code.
function test6() {
const arr = [5, 1, 1, 1, 2, 3, 5];
ArrayReduction(arr, arr.length);
}

test6();
/*
Total number of reductions : 4
*/





function SortByOrder(arr, size, arr2, size2) {
    const ht = new Map();
    const ret = new Array(size);
    let retIndex = 0;

    let value;
    for (let i = 0; i < size; i++) {
        if (ht.has(arr[i])) {
            value = ht.get(arr[i]);
            ht.set(arr[i], value + 1);
        } else {
            ht.set(arr[i], 1);
        }
    }
    for (let j = 0; j < size2; j++) {
        if (ht.has(arr2[j])) {
            value = ht.get(arr2[j]);
            for (let k = 0; k < value; k++) {
                ret[retIndex++] = arr2[j];
            }
            ht.delete(arr2[j]);
        }
    }

    for (let i = 0; i < size; i++) {
        if (ht.has(arr[i])) {
            value = ht.get(arr[i]);
            for (let k = 0; k < value; k++) {
                ret[retIndex++] = arr[i];
            }
            ht.delete(arr[i]);
        }
    }
    for (let i = 0; i < size; i++) {
        arr[i] = ret[i];
    }
}

// Testing code.
function test7() {
    const arr = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8];
    const order = [2, 1, 8, 3];
    SortByOrder(arr, arr.length, order, order.length);
    console.log("SortByOrder", JSON.stringify(arr));
}

test7();

/*
SortByOrder [2,2,1,1,8,8,3,5,7,9,6]
*/

function merge(arr1, size1, arr2, size2) {
    let index = 0;
    let temp;
    while (index < size1) {
        if (arr1[index] <= arr2[0]) {
            index += 1;
        } else {
            temp = arr1[index]
            arr1[index] = arr2[0];
            arr2[0] = temp;

            index += 1;
            for (let i = 0; i < (size2 - 1); i++) {
                if (arr2[i] < arr2[i + 1])
                    break;

                temp = arr2[i]
                arr2[i] = arr2[i + 1];
                arr2[i + 1] = temp;

            }
        }
    }
}

// Testing code.
function test8() {
const arr1 = [1, 5, 9, 10, 15, 20];
const arr2 = [2, 3, 8, 13];
merge(arr1, arr1.length, arr2, arr2.length);
console.log(arr1);
console.log(arr2);
}

test8();

/*
[ 1, 2, 3, 5, 8, 9 ]
[ 10, 13, 15, 20 ]
*/

function checkReverse(arr, size) {
    let start = -1;
    let stop = -1;
    for (let i = 0; i < (size - 1); i++) {
        if (arr[i] > arr[i + 1]) {
            start = i;
            break;
        }
    }
    if (start === -1)
        return true;

    for (let i = start; i < (size - 1); i++) {
        if (arr[i] < arr[i + 1]) {
            stop = i;
            break;
        }
    }
    if (stop === -1)
        return true;
    
    if (arr[start - 1] > arr[stop] || arr[stop + 1] < arr[start])
        return false;

    for (let i = stop + 1; i < size - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Testing code.
function test9() {
const arr = [1, 3, 8, 5, 4, 3, 10, 11, 12, 18, 28];
console.log("checkReverse :", checkReverse(arr, arr.length));
}

test9();
    
/*
checkReverse : true
*/

function UnionIntersectionSorted(arr1, size1, arr2, size2) {
    let first = 0;
    let second = 0;
    const unionArr = new Array();
    const interArr = new Array();
    let uIndex = 0;
    let iIndex = 0;

    while (first < size1 && second < size2) {
        if (arr1[first] === arr2[second]) {
            unionArr[uIndex++] = arr1[first];
            interArr[iIndex++] = arr1[first];
            first += 1;
            second += 1;
        } else if (arr1[first] < arr2[second]) {
            unionArr[uIndex++] = arr1[first];
            first += 1;
        } else {
            unionArr[uIndex++] = arr2[second];
            second += 1;
        }
    }
    while (first < size1) {
        unionArr[uIndex++] = arr1[first];
        first += 1;
    }

    while (second < size2) {
        unionArr[uIndex++] = arr2[second];
        second += 1;
    }

    console.log("Union :", JSON.stringify(unionArr));
    console.log("Intersection :", JSON.stringify(interArr));
}

function UnionIntersectionUnsorted(arr1, size1, arr2, size2) {
    arr1.sort(function cmp(a, b) { return (a - b); });
    arr2.sort(function cmp(a, b) { return (a - b); });
    UnionIntersectionSorted(arr1, size1, arr2, size2);
}

// Testing code.
function test10() {
const arr1 = [1, 11, 2, 3, 14, 5, 6, 8, 9];
const arr2 = [2, 4, 5, 12, 7, 8, 13, 10];
UnionIntersectionUnsorted(arr1, arr1.length, arr2, arr2.length);
}

test10();
/*
Union : [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
Intersection : [2,5,8]
*/

function rotateArray(a, n, k) {
    reverseArray(a, 0, k - 1);
    reverseArray(a, k, n - 1);
    reverseArray(a, 0, n - 1);
}

function reverseArray(a, start, end) {
    if ((a != null && a instanceof Array) && (typeof start === 'number')
        && (typeof end === 'number')) {
        for (let i = start, j = end; i < j; i++ , j--) {
            const temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    } else
        throw new Error('invalid overload');
}

function reverseArray2(a) {
    const start = 0;
    const end = a.length - 1;
    for (let i = start, j = end; i < j; i++ , j--) {
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
}

// Testing code.
function test11() {
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
rotateArray(numbers, numbers.length, 7);
console.log(JSON.stringify(numbers));
    const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    rotateArray(numbers2, numbers2.length, 4);
    console.log(JSON.stringify(numbers2));

}

test11();
/*
[8,9,10,1,2,3,4,5,6,7]
[5,6,7,8,9,10,1,2,3,4]
*/





function SumArray(arr) {
    const size = arr.length;
    let total = 0;
    for (let index = 0; index < size; index++) {
        total = total + arr[index];
    }
    return total;
}

// Testing code.
function test12() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sum = SumArray(numbers);
    console.log(`Sum is :: ${sum}`);
}

test12();

/*
Sum is :: 55

*/
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

// Testing code.
function test13() {
    const arr = [1, -2, 3, 4, -4, 6, -4, 8, 2];
    console.log(maxSubArraySum(arr));
}

test13();

/*
15
*/

function WaveArray2(arr) {
    const size = arr.length;
    for (let i = 1; i < size; i += 2) {
        if ((i - 1) >= 0 && arr[i] > arr[i - 1]) {
            swap(arr, i, i - 1);
        }
        
        if ((i + 1) < size && arr[i] > arr[i + 1]) {
            swap(arr, i, i + 1);
        }
    }
}

function WaveArray(arr) {
    const size = arr.length;
    arr.sort()
    for (let i = 0; i < size - 1; i += 2) {
        swap(arr, i, i + 1);
    }
}

// Testing code.
function test14() {
const arr = [8, 1, 2, 3, 4, 5, 6, 4, 2];
WaveArray(arr);
console.log(JSON.stringify(arr));
    
    const arr2 = [8, 1, 2, 3, 4, 5, 6, 4, 2];
    WaveArray2(arr2);
    console.log(JSON.stringify(arr2));
}

test14();
/*
[2,1,3,2,4,4,6,5,8]
[8,1,3,2,5,4,6,2,4]
*/

function indexArray(arr, size) {
    for (let i = 0; i < size; i++) {
        let curr = i;
        let value = -1;
    
        while (arr[curr] !== -1 && arr[curr] !== curr) {
            const temp = arr[curr];
            arr[curr] = value;
            value = curr = temp;
        }
    
        if (value !== -1) {
            arr[curr] = value;
        }
    }
}

function indexArray2(arr, size) {
    let temp;
    for (let i = 0; i < size; i++) {
        while (arr[i] !== -1 && arr[i] !== i) {
            temp = arr[i];
            arr[i] = arr[temp];
            arr[temp] = temp;
        }
    }
}

// Testing code.
function test15() {
    const arr = [8, -1, 6, 1, 9, 3, 2, 7, 4, -1];
    let size = arr.length;
    indexArray2(arr, size);
    console.log(JSON.stringify(arr));

const arr2 = [8, -1, 6, 1, 9, 3, 2, 7, 4, -1];
size = arr2.length;
indexArray(arr2, size);
console.log(JSON.stringify(arr2));
}

test15();
/*
[-1,1,2,3,4,-1,6,7,8,9]
[-1,1,2,3,4,-1,6,7,8,9]
*/


function Sort1toN(arr, size) {
    let curr;
    let value;
    let next;
    for (let i = 0; i < size; i++) {
        curr = i;
        value = -1;
    
        while (curr >= 0 && curr < size && arr[curr] !== curr + 1) {
            next = arr[curr];
            arr[curr] = value;
            value = next;
            curr = next - 1;
        }
    }
}

function Sort1toN2(arr, size) {
    let temp;
    for (let i = 0; i < size; i++) {
        while (arr[i] !== i + 1 && arr[i] > 1) {
            temp = arr[i];
            arr[i] = arr[temp - 1];
            arr[temp - 1] = temp;
        }
    }
}

// Testing code.
function test16() {
    const arr = [8, 5, 6, 1, 9, 3, 2, 7, 4, 10];
    let size = arr.length;
    Sort1toN2(arr, size);
    console.log(JSON.stringify(arr));

const arr2 = [8, 5, 6, 1, 9, 3, 2, 7, 4, 10];
size = arr2.length;
Sort1toN(arr2, size);
console.log(JSON.stringify(arr2));
}

test16();
/*
[1,2,3,4,5,6,7,8,9,10]
[1,2,3,4,5,6,7,8,9,10]
*/

function MaxMinArr(arr, size) {
    const aux = arr.slice(0, size);
    let start = 0;
    let stop = size - 1;
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            arr[i] = aux[stop];
            stop -= 1;
        } else {
            arr[i] = aux[start];
            start += 1;
        }
    }
}

function ReverseArr(arr, start, stop) {
    while (start < stop) {
        swap(arr, start, stop);
        start += 1;
        stop -= 1;
    }
}

function MaxMinArr2(arr, size) {
    for (let i = 0; i < (size - 1); i++) {
        ReverseArr(arr, i, size - 1);
    }
}

// Testing code.
function test18() {
const arr = [1, 2, 3, 4, 5, 6, 7];
const size = arr.length;
MaxMinArr(arr, size);
console.log(JSON.stringify(arr));

    const arr2 = [1, 2, 3, 4, 5, 6, 7];
    const size2 = arr.length;
    MaxMinArr2(arr2, size2);
    console.log(JSON.stringify(arr2));
}

test18();
/*
[7,1,6,2,5,3,4]
[7,1,6,2,5,3,4]
*/

function maxCircularSum(arr, size) {
    let sumAll = 0;
    let currVal = 0;
    let maxVal;
    for (let i = 0; i < size; i++) {
        sumAll += arr[i];
        currVal += (i * arr[i]);
    }
    
    maxVal = currVal;
    for (let i = 1; i < size; i++) {
        currVal = (currVal + sumAll) - (size * arr[size - i]);
        if (currVal > maxVal) {
            maxVal = currVal;
        }
    }
    return maxVal;
}

// Testing code.
function test19() {
const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(`Max Circulr Sum: ${maxCircularSum(arr, arr.length)}`);
}

test19();
// Max Circulr Sum: 290

