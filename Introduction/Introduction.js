function SumArray(arr) {
    const size = arr.length;
    let total = 0;
    for (let index = 0; index < size; index++) {
        total = total + arr[index];
    }
    return total;
};

function test1() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sum = SumArray(numbers);
    console.log(`Sum is :: ${sum}`);
}

//test1()

function SequentialSearch(arr, value) {
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        if (value === arr[i]) {
            return i;
        }
    }
    return -1;
};

function BinarySearch(arr, value) {
    const size = arr.length;
    let mid;
    let low = 0;
    let high = size - 1;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === value) {
            return mid;
        } else {
            if (arr[mid] < value) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    };
    return -1;
};


function BinarySearchRecursive(arr, value) {
    return BinarySearchRecursiveUtil(arr, 0, arr.length - 1, value);
}

function BinarySearchRecursiveUtil(arr, low, high, value) {
    if (low > high)
        return -1;

    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === value) {
        return mid;
    }

    if (arr[mid] < value) {
        return BinarySearchRecursiveUtil(arr, mid + 1, high, value);
    } else {
        return BinarySearchRecursiveUtil(arr, low, mid - 1, value);
    }
};

function test2a() {
    const numbers = [1, 8, 5, 4, 3, 6, 9, 2, 7, 10];
    console.log(SequentialSearch(numbers, 7));
    console.log(SequentialSearch(numbers, 11));
}

function test2b() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(BinarySearch(numbers, 7));
    console.log(BinarySearch(numbers, 11));
 }

function test2b() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(BinarySearchRecursive(numbers, 7));
    console.log(BinarySearchRecursive(numbers, 11));
}

//test2b()

function rotateArray(a, n, k) {
    reverseArray(a, 0, k - 1);
    reverseArray(a, k, n - 1);
    reverseArray(a, 0, n - 1);
};

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
};

function reverseArray2(a) {
    const start = 0;
    const end = a.length - 1;
    for (let i = start, j = end; i < j; i++ , j--) {
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
};

function test3() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    rotateArray(numbers, numbers.length, 7)
    console.log(numbers);
    const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    rotateArray(numbers2, numbers2.length, 4)
    console.log(numbers2);

}

//test3()

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

function test4() {
    const arr = [1, -2, 3, 4, -4, 6, -4, 8, 2];
    console.log(maxSubArraySum(arr));
}

//test4()

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
};

function WaveArray(arr) {
    const size = arr.length;
    arr.sort()
    for (let i = 0; i < size - 1; i += 2) {
        swap(arr, i, i + 1);
    }
};

function test5() {
    const arr = [8, 1, 2, 3, 4, 5, 6, 4, 2];
    WaveArray(arr);
    console.log(arr);
    
    const arr2 = [8, 1, 2, 3, 4, 5, 6, 4, 2];
    WaveArray2(arr2);
    console.log(arr2);
};

//test5()

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
};

function indexArray2(arr, size) {
    let temp;
    for (let i = 0; i < size; i++) {
        while (arr[i] !== -1 && arr[i] !== i) {
            temp = arr[i];
            arr[i] = arr[temp];
            arr[temp] = temp;
        }
    }
};

function test6() {
    const arr = [8, -1, 6, 1, 9, 3, 2, 7, 4, -1];
    let size = arr.length;
    indexArray2(arr, size);
    console.log(arr);

    const arr2 = [8, -1, 6, 1, 9, 3, 2, 7, 4, -1];
    size = arr2.length;
    indexArray(arr2, size);
    console.log(arr);
};

//test6()

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
};

function Sort1toN2(arr, size) {
    let temp;
    for (let i = 0; i < size; i++) {
        while (arr[i] !== i + 1 && arr[i] > 1) {
            temp = arr[i];
            arr[i] = arr[temp - 1];
            arr[temp - 1] = temp;
        }
    }
};

function test7() {
    const arr = [8, 5, 6, 1, 9, 3, 2, 7, 4, 10];
    let size = arr.length;
    Sort1toN2(arr, size);
    console.log(arr);

    const arr2 = [8, 5, 6, 1, 9, 3, 2, 7, 4, 10];
    size = arr2.length;
    Sort1toN(arr2, size);
    console.log(arr);
};

//test7()

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
};

function SmallestPositiveMissingNumber2(arr, size) {
    const hs = new Set();
    for (var i = 0; i < size; i++) {
        hs.add(arr[i]);
    }

    for (var i = 1; i < size + 1; i++) {
        if (hs.has(i) === false)
            return i;
    }
    return -1;
};

function SmallestPositiveMissingNumber3(arr, size) {
    const aux = new Array(size).fill(-1);

    for (var i = 0; i < size; i++) {
        if (arr[i] > 0 && arr[i] <= size) {
            aux[arr[i] - 1] = arr[i];
        }
    }
    
    for (var i = 0; i < size; i++) {
        if (aux[i] !== i + 1) {
            return i + 1;
        }
    }
    return -1;
};

function SmallestPositiveMissingNumber4(arr, size) {
    let temp;
    for (var i = 0; i < size; i++) {
        while (arr[i] !== i + 1 && arr[i] > 0 && arr[i] <= size) {
            temp = arr[i];
            arr[i] = arr[temp - 1];
            arr[temp - 1] = temp;
        }
    }
    
    for (var i = 0; i < size; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return -1;
};

function test8() {
    const arr = [8, 5, 6, 1, 9, 11, 2, 7, 4, 10];
    const size = arr.length;
    console.info(`Smallest Positive Missing Number :${SmallestPositiveMissingNumber(arr, size)}`);
    console.info(`Smallest Positive Missing Number :${SmallestPositiveMissingNumber2(arr, size)}`);
    console.info(`Smallest Positive Missing Number :${SmallestPositiveMissingNumber3(arr, size)}`);
    console.info(`Smallest Positive Missing Number :${SmallestPositiveMissingNumber4(arr, size)}`);
};

//test8()

function MaxMinArr(arr, size) {
    const aux = arr.slice(0, size);
    let start = 0;
    let stop = size - 1;
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            arr[i] = aux[stop];
            stop -= 1;
        }
        else {
            arr[i] = aux[start];
            start += 1;
        }
    }
};

function ReverseArr(arr, start, stop) {
    while (start < stop) {
        swap(arr, start, stop);
        start += 1;
        stop -= 1;
    }
};

function MaxMinArr2(arr, size) {
    for (let i = 0; i < (size - 1); i++) {
        ReverseArr(arr, i, size - 1);
    }
};

function test9() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const size = arr.length;
    MaxMinArr(arr, size);
    console.log(arr);

    const arr2 = [1, 2, 3, 4, 5, 6, 7];
    const size2 = arr.length;
    MaxMinArr2(arr2, size2);
    console.log(arr);
};

//test9()

function maxCircularSum(arr, size) {
    let sumAll = 0;
    let currVal = 0;
    let maxVal;
    for (var i = 0; i < size; i++) {
        sumAll += arr[i];
        currVal += (i * arr[i]);
    }
    
    maxVal = currVal;
    for (var i = 1; i < size; i++) {
        currVal = (currVal + sumAll) - (size * arr[size - i]);
        if (currVal > maxVal) {
            maxVal = currVal;
        }
    }
    return maxVal;
};

function test10() {
    const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    console.info(`Max Circulr Sum: ${maxCircularSum(arr, arr.length)}`);
};

//test10()

function ArrayIndexMaxDiff(arr, size) {
    let maxDiff = -1;
    let j;
    for (let i = 0; i < size; i++) {
        j = size - 1;
        while (j > i) {
            if (arr[j] > arr[i]) {
                maxDiff = Math.max(maxDiff, j - i);
                break;
            }
            j -= 1;
        }
    }
    return maxDiff;
};

function ArrayIndexMaxDiff2(arr, size) {
    const leftMin = new Array(size);
    const rightMax = new Array(size);
    leftMin[0] = arr[0];
    let i;
    let j;
    let maxDiff;

    for (i = 1; i < size; i++) {
        if (leftMin[i - 1] < arr[i]) {
            leftMin[i] = leftMin[i - 1];
        }
        else {
            leftMin[i] = arr[i];
        }
    }

    rightMax[size - 1] = arr[size - 1];
    for (i = size - 2; i >= 0; i--) {
        if (rightMax[i + 1] > arr[i]) {
            rightMax[i] = rightMax[i + 1];
        }
        else {
            rightMax[i] = arr[i];
        }
    }
    i = 0;
    j = 0;
    maxDiff = -1;
    while (j < size && i < size) {
        if (leftMin[i] < rightMax[j]) {
            maxDiff = Math.max(maxDiff, j - i);
            j = j + 1;
        }
        else {
            i = i + 1;
        }
    }
    return maxDiff;
};

function test11() {
    const arr = [33, 9, 10, 3, 2, 60, 30, 33, 1];
    console.info(`ArrayIndexMaxDiff : ${ArrayIndexMaxDiff(arr, arr.length)}`);
    console.info(`ArrayIndexMaxDiff : ${ArrayIndexMaxDiff2(arr, arr.length)}`);
};

//test11()

function maxPathSum(arr1, size1, arr2, size2) {
    let i = 0;
    let j = 0;
    let result = 0;
    let sum1 = 0;
    let sum2 = 0;
    while (i < size1 && j < size2) {
        if (arr1[i] < arr2[j]) {
            sum1 += arr1[i];
            i += 1;
        }
        else if (arr1[i] > arr2[j]) {
            sum2 += arr2[j];
            j += 1;
        }
        else {
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
};

function test12() {
    const arr1 = [12, 13, 18, 20, 22, 26, 70];
    const arr2 = [11, 15, 18, 19, 20, 26, 30, 31];
    console.info(`Max Path Sum :: ${maxPathSum(arr1, arr1.length, arr2, arr2.length)}`);
};

//test12()

function factorial(i) {
    if (i <= 1) {
        return 1;
    }
    return i * factorial(i - 1);
};

//console.info("factorial 5 is ::", factorial(5))

function printHaxIntUtil(number, base, arr) {
    const conversion = "0123456789ABCDEF";
    const digit = (number % base);
    number = Math.floor(number / base);
    if (number !== 0) {
        printHaxIntUtil(number, base, arr);
    }
    arr.push(conversion[digit]);
};

function printHaxInt(number, base) {
    const arr = new Array();
    printHaxIntUtil(number, base, arr);
    return arr.join("");
};

function test13() {
    console.log(printHaxInt(100, 16));
}

//test13()

function towerOfHanoi(num, src, dst, temp) {
    if (num < 1) {
        return;
    }
    towerOfHanoi(num - 1, src, temp, dst);
    console.log(`Move ${num} disk  from peg ${src} to peg ${dst}`);
    towerOfHanoi(num - 1, temp, dst, src);
};

function test14() {
    const num = 3;
    console.info("The sequence of moves are :");
    towerOfHanoi(num, 'A', 'C', 'B');
    return 0;
};

//test14()

function GCD(m, n) {
    if (m < n) {
        return (GCD(n, m));
    }
    if (m % n === 0) {
        return (n);
    }
    return (GCD(n, m % n));
};

function test15() {
    console.log(GCD(15, 7));
};

//test15()

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

function fibonacci2(n) {
    let first = 0;
    let second = 1;
    let temp;
    let i;

    if (n === 0)
        return first;
    else if (n === 1)
        return second;

    for (i = 2; i <= n; i++) {
        temp = first + second;
        first = second;
        second = temp;
    }
    return temp;
}

function test16() {
    console.log(fibonacci(8));
    console.log(fibonacci2(8));
}

//test16()

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

function test17() {
    const arr = [1, 2, 3]
    permutation(arr, 0, 3);
};

//test17()