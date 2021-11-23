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

function partition012_(arr, size)
{
	let zero = 0;
	let one = 0;
	let two = 0;
	for (let i = 0; i < size; i++)
	{
		if (arr[i] == 0)
		{
			zero += 1;
		}
		else if (arr[i] == 1)
		{
			one += 1;
		}
		else
		{
			two += 1;
		}
	}
	let index = 0;
	while (zero > 0)
	{
		arr[index++] = 0;
		zero -= 1;
	}
	while (one > 0)
	{
		arr[index++] = 1;
		one -= 1;
	}
	while (two > 0)
	{
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
        }
        else if (arr[i] === 2) {
            swap(arr, i, right);
            right -= 1;
        }
        else {
            i += 1;
        }
    }
}

function test1() {
    const arr = [0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1];
    partition01(arr, arr.length);
    console.log(arr);

    let arr2 = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
    partition012(arr2, arr2.length);
    console.log(arr2);

    arr2 = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
    partition012_(arr2, arr2.length);
    console.log(arr2);
}

test1();

/*
[ 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ]
[ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2 ]
[ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2 ]
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
        }
        else if (arr[i] > higher) {
            swap(arr, i, end);
            end -= 1;
        }
        else {
            i += 1;
        }
    }
}

function test2() {
    const arr = [1, 21, 2, 20, 3, 19, 4, 18, 5, 17, 6, 16, 7, 15, 8, 14, 9, 13, 10, 12, 11];
    RangePartition(arr, arr.length, 9, 15);
    console.log(arr);
}

test2();
/*
[ 1, 2, 3, 4, 5, 6, 7, 8, 11, 9, 10, 14, 12, 15, 13, 16, 17, 18, 19, 20, 21 ]
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

function test3(){
    let arr = [2,7,5,6,1,3,4,9,10,8]
    let val = 5
    console.log(minSwaps(arr, 10, val))
}

test3()
// 3

function separateEvenAndOdd(data, size)
{
	let left = 0;
	let right = size - 1;
	let aux = Array(size).fill(0);
	for (let i = 0; i < size; i++)
	{
		if (data[i] % 2 == 0)
		{
			aux[left] = data[i];
			left++;
		}
		else if (data[i] % 2 == 1)
		{
			aux[right] = data[i];
			right--;
		}
	}
	for (let i = 0; i < size; i++)
	{
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

function test4(){
	let array = [9, 1, 8, 2, 7, 3, 6, 4, 5];
	separateEvenAndOdd(array, array.length);
	console.log(array);
	let array2 = [9, 1, 8, 2, 7, 3, 6, 4, 5];
	separateEvenAndOdd2(array2, array2.length);
	console.log(array2);
}

test4()
/*
[ 8, 2, 6, 4, 5, 3, 7, 1, 9 ]
[ 4, 6, 8, 2, 7, 3, 1, 9, 5 ]
*/

function AbsMore(value1, value2, ref) {
    return (Math.abs(value1 - ref) > Math.abs(value2 - ref));
}

function AbsBubbleSort(arr, size, ref) {
    for (let i = 0; i < (size - 1); i++) {
        for (let j = 0; j < (size - i - 1); j++) {
            if (AbsMore(arr[j], arr[j + 1], ref)) {
                swap(arr, j, j + 1);
            }
        }
    }
}

function test5() {
    const array = [9, 1, 8, 2, 7, 3, 6, 4, 5];
    const ref = 5;
    AbsBubbleSort(array, array.length, ref);
    console.log(array);
}

test5();
/*
[ 5, 6, 4, 7, 3, 8, 2, 9, 1 ]
*/

function EqMore(value1, value2, A) {
    value1 = A * value1 * value1;
    value2 = A * value2 * value2;
    return value1 > value2;
}

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
    console.info(`Total number of reductions ${count}`);
    return count
}

function test6() {
    const arr = [5, 1, 1, 1, 2, 3, 5];
    ArrayReduction(arr, arr.length);
}

test6();
/*
Total number of reductions 4
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

function test7() {
    const arr = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8];
    const order = [2, 1, 8, 3];
    SortByOrder(arr, arr.length, order, order.length);
    console.log("SortByOrder", arr)
}

test7();
/*
SortByOrder [ 2, 2, 1, 1, 8, 8, 3, 5, 7, 9, 6 ]
*/

function merge(arr1, size1, arr2, size2) {
    let index = 0;
    let temp;
    while (index < size1) {
        if (arr1[index] <= arr2[0]) {
            index += 1;
        }
        else {
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

function test9() {
    const arr = [1, 3, 8, 5, 4, 3, 10, 11, 12, 18, 28];
    console.log("checkReverse : ", checkReverse(arr, arr.length))
}

test9();
/*
checkReverse :  true
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
        }
        else if (arr1[first] < arr2[second]) {
            unionArr[uIndex++] = arr1[first];
            first += 1;
        }
        else {
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
    console.log("Union : ", unionArr);
    console.log("Intersection : ", interArr);
}

function UnionIntersectionUnsorted(arr1, size1, arr2, size2) {
    arr1.sort(function cmp(a, b) { return (a - b); });
    arr2.sort(function cmp(a, b) { return (a - b); });
   
    UnionIntersectionSorted(arr1, size1, arr2, size2);
}

function test10() {
    const arr1 = [1, 11, 2, 3, 14, 5, 6, 8, 9];
    const arr2 = [2, 4, 5, 12, 7, 8, 13, 10];
    UnionIntersectionUnsorted(arr1, arr1.length, arr2, arr2.length);
}

test10();
/*
Union :  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]
Intersection :  [ 2, 5, 8 ]
*/