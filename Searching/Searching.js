const MIN_VALUE = -999999
const MAX_VALUE = 999999

function linearSearchUnsorted(arr, value) {
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        if (value === arr[i]) {
            return true;
        }
    }
    return false;
};

function linearSearchSorted(arr, value) {
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        if (value === arr[i]) {
            return true;
        }
        else if (value < arr[i]) {
            return false;
        }
    }
    return false;
};

function Binarysearch(arr, value) {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === value) {
            return true;
        }
        else if (arr[mid] < value) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    };
    return false;
};

function BinarySearchRecursive(arr, value) {
    return BinarySearchRecursiveUtil(arr, 0, arr.length - 1, value);
}

function BinarySearchRecursiveUtil(arr, low, high, value) {
    if (low > high) {
        return false;
    }
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === value) {
        return true;
    }
    else if (arr[mid] < value) {
        return BinarySearchRecursiveUtil(arr, mid + 1, high, value);
    }
    else {
        return BinarySearchRecursiveUtil(arr, low, mid - 1, value);
    }
};

function test1() {
    const first = [1, 3, 5, 7, 6, 4, 2];
    const second = [2, 4, 6, 8, 10, 12, 14, 16, 21, 23, 24];
    console.log(linearSearchUnsorted(first, 7));
    console.log(linearSearchUnsorted(first, 9));
    console.log(linearSearchSorted(second, 8));
    console.log(linearSearchSorted(second, 9));
    console.log(Binarysearch(second, 10));
    console.log(BinarySearchRecursive(second, 10));
};
//test1();

function swap(arr, first, second) {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

function FirstRepeated(arr) {
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return 0;
};

function test2() {
    first = [7, 9, 3, 11, 3, 5, 7]
    console.log(`FirstRepeated :: ${FirstRepeated(first)}`);
}
//test2();

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
};

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
};

function printRepeating3(arr) {
    const hs = {};
    const size = arr.length;
    let output = "Repeating elements are :";
    for (let i = 0; i < size; i++) {
        if (arr[i] in hs) {
            output += " " + arr[i];
        }
        else {
            hs[arr[i]] = 1;
        }
    }
    console.log(output)
};

function printRepeating4(arr) {
    const size = arr.length;
    const count = new Array(size).fill(0);
    let output = "Repeating elements are :";
    for (let i = 0; i < size; i++) {
        if (count[arr[i]] > 0) {
            output += " " + arr[i];
        }
        else {
            count[arr[i]]++;
        }
    }
    console.log(output)
};

function test3() {
    const first = [1, 3, 5, 3, 1, 4, 2, 2, 3];
    printRepeating(first);
    printRepeating2(first);
    printRepeating3(first);
    printRepeating4(first);
};
//test3();

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
};

function test4() {
    first = [1, 2, 3, 1, 2, 3, 5, 6, 7, 7, 8, 9, 3, 4, 5]
    console.log(removeDuplicates(first));
}
//test4();

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
    return MAX_VALUE;
};

function findMissingNumber2(arr, range) {
    if ((arr != null && arr instanceof Array) && (typeof range === 'number')) {
        let i;
        const size = arr.length;
        let xorSum = 0;
        for (i = 1; i <= range; i++) {
            xorSum ^= i;
        }
        for (i = 0; i < size; i++) {
            xorSum ^= arr[i];
        }
        return xorSum;
    }
    else
        throw new Error('invalid overload');
};

function findMissingNumber3(arr, upperRange) {
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
};

function test5() {
    const first = [1, 3, 5, 7, 2, 4, 8, 9, 10];
    const i = 0;
    console.log(findMissingNumber(first));
    console.log(findMissingNumber2(first, 10));
    console.info(findMissingNumber3(first, 10));
};
//test5();

function OddCount(arr, size) {
    const ctr = ({});
    let count = 0;
    let i;
    for (i = 0; i < size; i++) {
        if (ctr[arr[i]] != undefined) {
            ctr[arr[i]] += 1;
        }
        else{
            ctr[arr[i]] = 1;
        }
    }
    for (i = 0; i < size; i++) {
        if (ctr[arr[i]] != undefined && (ctr[arr[i]] % 2 == 1)) {
            count++;
        }
    }
    console.info(`Odd count is :: ${count}`);
};

function OddNumbers(arr, size) {
    let xorSum = 0;
    let first = 0;
    let second = 0;
    let setBit;
    for (i = 0; i < size; i++) {
        xorSum = xorSum ^ arr[i];
    }
    setBit = xorSum & ~(xorSum - 1);
    for (var i = 0; i < size; i++) {
        if ((arr[i] & setBit) !== 0)
            first ^= arr[i];
        else
            second ^= arr[i];
    }
    console.info(first, second);
};

function SumDistinct(arr, size) {
    let sum = 0;
    arr.sort(function cmp(a, b) { return (a - b); });
    for (let i = 0; i < (size - 1); i++) {
        if (arr[i] !== arr[i + 1])
            sum += arr[i];
    }
    sum += arr[size - 1];
    console.info(sum);
};

function test6() {
    const first = [1, 3, 2, 7, 2, 4, 3, 8, 9, 9, 4, 7, 1, 12];
    const size = first.length
    OddCount(first, size);
    OddNumbers(first, size);
    SumDistinct(first, size)
}

//test6();

function minabsSumPair(arr) {
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
};

function minabsSumPair2(arr) {
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
        if (sum < 0) {
            l++;
        }
        else if (sum > 0) {
            r--;
        }
        else {
            break;
        }
    }
    console.log(`Elements with minimum sum are : ${arr[minFirst]} , ${arr[minSecond]}`);
};

function test7() {
    const first = [1, 3, 5, 7, 2, 4, -12, 8, -9, 9, 10];
    minabsSumPair(first);
    minabsSumPair2(first);
}
//test7();

function FindPair(arr, value) {
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            if ((arr[i] + arr[j]) === value) {
                console.log(`The pair is : ${arr[i]},${arr[j]}`);
                return true;
            }
        }
    }
    return false;
};

function FindPair2(arr, value) {
    let first = 0;
    const size = arr.length;
    let second = size - 1;
    let curr;
    arr.sort(function cmp(a, b) { return (a - b); });
    while (first < second) {
        curr = arr[first] + arr[second];
        if (curr === value) {
            console.log(`The pair is ${arr[first]},${arr[second]}`);
            return true;
        }
        else if (curr < value) {
            first++;
        }
        else {
            second--;
        }
    };
    return false;
};


function FindPair3(arr, value) {
    const hs = {};
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        if ((value - arr[i]) in hs) {
            console.log(`The pair is : ${arr[i]} , ${value - arr[i]}`);
            return true;
        }
        hs[arr[i]] = 1;
    }
    return false;
};


function test8() {
    const first = [1, 3, 5, 7, 3, 14, 8, 9, 10];
    console.log(FindPair(first, 9));
    console.log(FindPair2(first, 9));
    console.log(FindPair3(first, 9));
}
//test8();

function FindDifference(arr, size, value) {
    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            if (Math.abs(arr[i] - arr[j]) === value) {
                console.info(`The pair is:: ${arr[i]} & ${arr[j]}`);
                return true;
            }
        }
    }
    return false;
};

function FindDifference2(arr, size, value) {
    let first = 0;
    let second = 0;
    let diff;
    arr.sort(function cmp(a, b) { return (a - b); });
    while (first < size && second < size) {
        diff = Math.abs(arr[first] - arr[second]);
        if (diff === value) {
            console.info(`The pair is::${arr[first]} & ${arr[second]}`);
            return true;
        }
        else if (diff > value)
            first += 1;
        else
            second += 1;
    }
    return false;
};

function test9() {
    const first = [1, 5, 4, 3, 2, 7, 8, 9, 6];
    console.info(FindDifference(first, first.length, 6));
    console.info(FindDifference2(first, first.length, 6));
};
//test9();

function findMinDiff(arr, size) {
    arr.sort(function cmp(a, b) { return (a - b); });
    let diff = 9999999;
    for (let i = 0; i < (size - 1); i++) {
        if ((arr[i + 1] - arr[i]) < diff)
            diff = arr[i + 1] - arr[i];
    }
    return diff;
};

function MinDiffPair(arr1, size1, arr2, size2) {
    let minDiff = 9999999;
    let first = 0;
    let second = 0;
    let out1 = 0;
    let out2 = 0;
    let diff;
    arr1.sort(function cmp(a, b) { return (a - b); });
    arr2.sort(function cmp(a, b) { return (a - b); });
    while (first < size1 && second < size2) {
        diff = Math.abs(arr1[first] - arr2[second]);
        if (minDiff > diff) {
            minDiff = diff;
            out1 = arr1[first];
            out2 = arr2[second];
        }
        if (arr1[first] < arr2[second])
            first += 1;
        else
            second += 1;
    }
    console.info(`The pair is :: ${out1}, ${out2}`);
    console.info(`Minimum difference is :: ${minDiff}`);
    return minDiff;
};

function test10() {
    const first = [1, 5, 4, 3, 2, 7, 8, 9, 6];
    const second = [3, 2, 7, 8, 9, 6];
    
    console.info(findMinDiff(first, first.length));
    console.info(MinDiffPair(first, first.length, second, second.length));
};
//test10();

function ClosestPair(arr, size, value) {
    let diff = 999999;
    let first = -1;
    let second = -1;
    let curr;
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
};

function ClosestPair2(arr, size, value) {
    let first = 0;
    let second = 0;
    let start = 0;
    let stop = size - 1;
    let diff;
    let curr;
    arr.sort(function cmp(a, b) { return (a - b); })
    diff = 9999999;
    while (start < stop) {
        curr = (value - (arr[start] + arr[stop]));
        if (Math.abs(curr) < diff) {
            diff = Math.abs(curr);
            first = arr[start];
            second = arr[stop];
        }
        if (curr === 0) {
            break;
        }
        else if (curr > 0) {
            start += 1;
        }
        else {
            stop -= 1;
        }
    }
    console.info(`closest pair is :: ${first}, ${second}`);
};

function test11() {
    const first = [1, 5, 4, 3, 2, 7, 8, 9, 6];
    ClosestPair(first, first.length, 6);
    ClosestPair2(first, first.length, 6);
};
//test11();

function SumPairRestArray(arr, size) {
    var total;
    let curr;
    arr.sort(function cmp(a, b) { return (a - b); });
    var total = 0;
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
        }
        else if (curr < value)
            low += 1;
        else
            high -= 1;
    }
    return false;
};

function test12() {
    const first = [1, 2, 4, 3, 7, 3];
    SumPairRestArray(first, first.length);
};
//test12();

function ZeroSumTriplets(arr, size) {
    for (let i = 0; i < (size - 2); i++) {
        for (let j = i + 1; j < (size - 1); j++) {
            for (let k = j + 1; k < size; k++) {
                if (arr[i] + arr[j] + arr[k] === 0)
                    console.info(`Triplet :: ${arr[i]}, ${arr[j]}, ${arr[k]}`);
            }
        }
    }
};

function ZeroSumTriplets2(arr, size) {
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
            }
            else if (arr[i] + arr[start] + arr[stop] > 0)
                stop -= 1;
            else
                start += 1;
        }
    }
};

function test13() {
    const first = [1, 2, -4, 3, 7, -3];
    ZeroSumTriplets(first, first.length);
    console.info()
    ZeroSumTriplets2(first, first.length);
};

//test13();

function findTriplet(arr, size, value) {
    for (let i = 0; i < (size - 2); i++) {
        for (let j = i + 1; j < (size - 1); j++) {
            for (let k = j + 1; k < size; k++) {
                {
                    if ((arr[i] + arr[j] + arr[k]) === value)
                        console.info(`Triplet :: ${arr[i]}, ${arr[j]}, ${arr[k]}`);
                };
            };
        };
    }
};

function findTriplet2(arr, size, value) {
    let start;
    let stop;
    arr.sort(function cmp(a, b) { return (a - b); });
    for (let i = 0; i < size - 2; i++) {
        start = i + 1;
        stop = size - 1;
        while (start < stop) {
            if (arr[i] + arr[start] + arr[stop] === value) {
                console.info(`Triplet ::${arr[i]}, ${arr[start]}, ${arr[stop]}`);
                start += 1;
                stop -= 1;
            }
            else if (arr[i] + arr[start] + arr[stop] > value)
                stop -= 1;
            else
                start += 1;
        }
    }
};

function test14() {
    const first = [1, 2, -4, 3, 7, -3];
    findTriplet(first, first.length, 6);
    findTriplet2(first, first.length, 6);
};

//test14();

function ABCTriplet(arr, size) {
    let start;
    let stop;
    arr.sort(function cmp(a, b) { return (a - b); });
    for (let i = 0; i < (size - 1); i++) {
        start = 0;
        stop = size - 1;
        while (start < stop) {
            if (arr[i] === arr[start] + arr[stop]) {
                console.info(`Triplet :: ${arr[i]}, ${arr[start]}, ${arr[stop]}`);
                start += 1;
                stop -= 1;
            }
            else if (arr[i] < arr[start] + arr[stop])
                stop -= 1;
            else
                start += 1;
        }
    }
};

function test15() {
    const first = [1, 2, -4, 3, 8, -3];
    ABCTriplet(first, first.length);
};

//test15();

function SmallerThenTripletCount(arr, size, value) {
    let start;
    let stop;
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
};

function test16() {
    const first = [1, 2, -4, 3, 7, -3];
    SmallerThenTripletCount(first, first.length, 6);
};
//test16();

function APTriplets(arr, size) {
    let j;
    let k;
    for (let i = 1; i < size - 1; i++) {
        j = i - 1;
        k = i + 1;
        while (j >= 0 && k < size) {
            if (arr[j] + arr[k] === 2 * arr[i]) {
                console.info(`AP Triplet ::${arr[j]}, ${arr[i]}, ${arr[k]}`);
                k += 1;
                j -= 1;
            }
            else if (arr[j] + arr[k] < 2 * arr[i])
                k += 1;
            else
                j -= 1;
        }
    }
};

function GPTriplets(arr, size) {
    let j;
    let k;
    for (let i = 1; i < size - 2; i++) {
        j = i - 1;
        k = i + 1;
        while (j >= 0 && k < size) {
            if (arr[j] * arr[k] === arr[i] * arr[i]) {
                console.info(`GP Triplet is :: ${arr[j]}, ${arr[i]}, ${arr[k]}`);
                k += 1;
                j -= 1;
            }
            else if (arr[j] * arr[k] < arr[i] * arr[i])
                k += 1;
            else
                j -= 1;
        }
    }
};

function test17() {
    const first = [1, 2, 3, 4, 9, 17, 23];
    APTriplets(first, first.length);
    GPTriplets(first, first.length);
};
//test17();

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
};

function numberOfTriangles2(arr, size) {
    let k;
    let count = 0;
    arr.sort(function cmp(a, b) { return (a - b); });
    for (let i = 0; i < (size - 2); i++) {
        k = i + 2;
        for (let j = i + 1; j < (size - 1); j++) {
            while (k < size && arr[i] + arr[j] > arr[k]) {
                k += 1;
            };
            count += k - j - 1;
        }
    }
    return count;
};

function test18() {
    const first = [1, 2, 5, 4, 3, 6];
    console.log(numberOfTriangles(first, first.length));
    console.log(numberOfTriangles2(first, first.length));

};
//test18();

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
};

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
        }
        else {
            currCount = 1;
            curr = arr[i];
        }
        if (currCount > maxCount) {
            maxCount = currCount;
            max = curr;
        }
    }
    return max;
};

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
};

function test19() {
    const first = [1, 3, 5, 3, 1, 2, 4, 2, 2];
    console.log(getMax(first));
    console.log(getMax2(first));
    console.log(getMax3(first, 10));
};
//test19();

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
    if (maxCount > Math.floor(size / 2)) {
        return max;
    }
    else {
        return 0;
    }
};

function getMajority2(arr) {
    const size = arr.length;
    const majIndex = Math.floor(size / 2);
    let count = 0;
    let i;
    let candidate;
    arr.sort(function cmp(a, b) { return (a - b); });
    candidate = arr[majIndex];
    for (i = 0; i < size; i++) {
        if (arr[i] === candidate) {
            count++;
        }
    }
    if (count > Math.floor(size / 2)) {
        return arr[majIndex];
    }
    else {
        return 0;
    }
};

function getMajority3(arr) {
    const size = arr.length;
    let majIndex = 0;
    let count = 1;
    let i;
    let candidate;
    for (i = 1; i < size; i++) {
        if (arr[majIndex] === arr[i]) {
            count++;
        }
        else {
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
        return 0;
    }
};

function isMajority(arr, size) {
    const majority = arr[Math.floor(size / 2)];
    const i = FirstIndex(arr, size, 0, size - 1, majority);
    if (((i + size / 2) <= (size - 1)) && arr[i + Math.floor(size / 2)] === majority)
        return true;
    else
        return false;
};

function test20() {
    const first = [1, 3, 5, 3, 1, 2, 4, 2, 2, 2, 2, 2, 2];
    console.log(getMajority(first));
    console.log(getMajority2(first));
    console.log(getMajority3(first, 10));
    console.log(isMajority(first, first.length))
}
//test20();

function getMedian(arr) {
    const size = arr.length;
    arr.sort(function cmp(a, b) { return (a - b); });
    const mid = Math.floor(size / 2);
    return arr[mid];
};

function test25() {
    const first = [10, 10, 5, 7, 9, 11, 12, 8, 5, 3, 10];
    console.log(`median value is :: ${getMedian(first)}`);
}
//test25();


function SearchBotinicArrayMax(arr) {
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
        if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid]) {
            return mid;
        }
        else if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        }
        else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
            end = mid - 1;
        }
        else {
            break;
        }
    };
    console.log("NoMaximaFound");
    return -1;
};


function test21() {
    const first = [1, 3, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    console.log(SearchBotinicArrayMax(first));
}
//test21();

function SearchBitonicArray(arr, key) {
    const size = arr.length;
    const max = SearchBotinicArrayMax(arr);
    let k = BinarySearch(arr, 0, max, key, true);
    if (k !== -1) {
        return true;
    }
    k = BinarySearch(arr, max + 1, size - 1, key, false);
    if (k !== -1) {
        return true;
    }
    return false;
};

function BinarySearch(arr, start, end, key, isInc) {
    let mid;
    if (end < start) {
        return -1;
    }
    mid = Math.floor((start + end) / 2);
    if (key === arr[mid]) {
        return mid;
    }
    if (isInc !== false && key < arr[mid] || isInc === false && key > arr[mid]) {
        return BinarySearch(arr, start, mid - 1, key, isInc);
    }
    else {
        return BinarySearch(arr, mid + 1, end, key, isInc);
    }
};

function FindMaxBitonicArray(arr) {
    const size = arr.length;
    let start = 0;
    let end = size - 1;
    let mid;
    if (size < 3) {
        console.log("error");
        return -1;
    }
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid]) {
            return mid;
        }
        else if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        }
        else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
            end = mid - 1;
        }
        else {
            break;
        }
    };
    console.log("NoMaximaFound");
    return -1;
};

function test22() {
    const first = [1, 3, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    console.log(SearchBitonicArray(first, 8));
    console.log(SearchBitonicArray(first, 7));
    console.log(SearchBitonicArray(first, 12));
    console.log(FindMaxBitonicArray(first));
}
//test22();


function findKeyCount(arr, key) {
    const size = arr.length;
    let count = 0;
    for (let i = 0; i < size; i++) {
        if (arr[i] === key) {
            count++;
        }
    }
    return count;
};

function findKeyCount2(arr, key) {
    const size = arr.length;
    const firstIndex = findFirstIndex(arr, 0, size - 1, key);
    const lastIndex = findLastIndex(arr, 0, size - 1, key);
    return (lastIndex - firstIndex + 1);
};

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
    }
    else {
        return findFirstIndex(arr, mid + 1, end, key);
    }
};

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
    }
    else {
        return findLastIndex(arr, mid + 1, end, key);
    }
};

function FirstIndex(arr, size, low, high, value) {
    let mid = 0;
    if (high >= low)
        mid = Math.floor((low + high) / 2 );
    if ((mid === 0 || arr[mid - 1] < value) && (arr[mid] === value))
        return mid;
    else if (arr[mid] < value)
        return FirstIndex(arr, size, mid + 1, high, value);
    else
        return FirstIndex(arr, size, low, mid - 1, value);
};

function test23() {
    const first = [1, 3, 5, 6, 6, 6, 6, 7, 9];
    console.info(findKeyCount(first, 6));
    console.info(findKeyCount2(first, 6));
};
//test23();

function maxProfit(stocks) {
    const size = stocks.length;
    let buy = 0;
    let sell = 0;
    let curMin = 0;
    let currProfit = 0;
    let maxProfit = 0;

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
    console.log(`Purchase day is- ${buy} at price ${stocks[buy]}`);
    console.log(`Sell day is- ${sell} at price ${stocks[sell]}`);
};

function test24() {
    const first = [10, 10, 5, 7, 9, 11, 12, 8, 5, 3, 10];
    maxProfit(first);
}
//test24();

function findMedian(arrFirst, arrSecond) {
    const sizeFirst = arrFirst.length;
    const sizeSecond = arrSecond.length;
    const medianIndex = Math.ceil((sizeFirst + sizeSecond) / 2);
    let i = 0;
    let j = 0;
    let count = 0;
    while (count < medianIndex - 1) {
        if (i < sizeFirst - 1 && arrFirst[i] < arrSecond[j]) {
            i++;
        }
        else {
            j++;
        }
        count++;
    };
    if (arrFirst[i] < arrSecond[j]) {
        return arrFirst[i];
    }
    else {
        return arrSecond[j];
    }
};

function test26() {
    const first = [10, 10, 5, 7, 9, 11];
    const second = [12, 8, 5, 3, 10];
    first.sort(function cmp(a, b) { return (a - b); });
    second.sort(function cmp(a, b) { return (a - b); });
    console.log(`median value is :: ${findMedian(first, second)}`);
}

//test26();

function min(a, b) {
    return a > b ? b : a;
};

function max(a, b) {
    return a < b ? b : a;
};

function swap(arr, first, second) {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

function BinarySearch01(arr) {
    const size = arr.length;
    if (size === 0) {
        return 0;
    }
    return BinarySearch01Util(arr, 0, size - 1);
};

function BinarySearch01Util(arr, start, end) {
    if (end < start) {
        return -1;
    }
    const mid = Math.floor((start + end) / 2);
    if ("1" === arr[mid] && "0" === arr[mid - 1]) {
        return mid;
    }
    if ("0" === arr[mid]) {
        return BinarySearch01Util(arr, mid + 1, end);
    }
    else {
        return BinarySearch01Util(arr, start, mid - 1);
    }
};

function test27() {
    const first = "00000000111";
    console.log(`BinarySearch01 index is :: ${BinarySearch01(first)}`);
}
//test27();

function BinarySearchRotateArray(arr, key) {
    const size = arr.length;
    return BinarySearchRotateArrayUtil(arr, 0, size - 1, key);
};

function BinarySearchRotateArrayUtil(arr, start, end, key) {
    if (end < start) {
        return -1;
    }
    const mid = Math.floor((start + end) / 2);
    if (key === arr[mid]) {
        return mid;
    }
    if (arr[mid] > arr[start]) {
        if (arr[start] <= key && key < arr[mid]) {
            return BinarySearchRotateArrayUtil(arr, start, mid - 1, key);
        }
        else {
            return BinarySearchRotateArrayUtil(arr, mid + 1, end, key);
        }
    }
    else {
        if (arr[mid] < key && key <= arr[end]) {
            return BinarySearchRotateArrayUtil(arr, mid + 1, end, key);
        }
        else {
            return BinarySearchRotateArrayUtil(arr, start, mid - 1, key);
        }
    }
};

function RotationMaxUtil(arr, start, end) {
    if (end <= start) {
        return arr[start];
    }
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1])
        return arr[mid];
    if (arr[start] <= arr[mid])
        return RotationMaxUtil(arr, mid + 1, end);
    else
        return RotationMaxUtil(arr, start, mid - 1);
};

function RotationMax(arr, size) {
    return RotationMaxUtil(arr, 0, size - 1);
}

function RotationMaxIndexUtil(arr, start, end) {
    if (end <= start)
        return start;
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1])
        return mid;
    if (arr[start] <= arr[mid])
        return RotationMaxIndexUtil(arr, mid + 1, end);
    else
        return RotationMaxIndexUtil(arr, start, mid - 1);
};

function FindRotationMaxIndex(arr, size) {
    return RotationMaxIndexUtil(arr, 0, size - 1);
}

function CountRotation(arr, size) {
    const maxIndex = RotationMaxIndexUtil(arr, 0, size - 1);
    return (maxIndex + 1) % size;
};

function test28() {
    first = [8, 9, 10, 11, 3, 5, 7]
    console.log(`BinarySearchRotateArray index is :: ${BinarySearchRotateArray(first, 7)}`);
    console.log(`BinarySearchRotateArray index is :: ${BinarySearchRotateArray(first, 6)}`);
    console.log(`RotationMax is :: ${RotationMax(first, first.length)}`);
    console.log(`CountRotation is :: ${CountRotation(first, first.length)}`);

}
//test28();

function minAbsDiffAdjCircular(arr, size) {
    if (size < 2)
        return -1;
    let diff = 9999999;

    for (let i = 0; i < size; i++) {
        diff = Math.min(diff, Math.abs(arr[i] - arr[(i + 1) % size]));
    }
    return diff;
};

function test29() {
    const arr = [5, 29, 18, 51, 11];
    console.info(minAbsDiffAdjCircular(arr, arr.length));
};
//test29();

function swapch(arr, first, second){
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

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
};

function test30() {
    first = "aaaabbbb"
    console.log(transformArrayAB(first));
}
//test30();

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
};

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
};


function test31() {
    const first = [1, 2, 3, 1, 2, 3, 5, 6, 7, 7, 8, 9, 3, 4, 5];
    const second = [1, 2, 4, 5, 3, 1, 2, 3, 5, 6, 7, 7, 8, 9, 3];

    console.log(`checkPermutation ${checkPermutation(first, second)}`)
    console.log(`checkPermutation2 ${checkPermutation2(first, second)}`)
};
//test31();

function FindElementIn2DArray(arr, r, c, value) {
    let row = 0;
    let column = c - 1;
    while (row < r && column >= 0) {
        if (arr[row][column] === value) {
            return true;
        }
        else if (arr[row][column] > value) {
            column--;
        }
        else {
            row++;
        }
    };
    return false;
};

function test32() {
    const f = new Array(10);
    let count = 0;
    for (let i = 0; i < 10; i++) {
        f[i] = new Array(10);
        for (let j = 0; j < 10; j++) {
            f[i][j] = count++;
        }
    }

    console.log(FindElementIn2DArray(f, 10, 10, 21));
    console.log(FindElementIn2DArray(f, 10, 10, 121));
}
//test32();

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
};

function isAP2(arr, size) {
    let first = 9999999;
    let second = 9999999;
    let value;
    let diff;
    const hs = new Set();
    for (var i = 0; i < size; i++) {
        if (arr[i] < first) {
            second = first;
            first = arr[i];
        } else if (arr[i] < second)
            second = arr[i];
    }
    diff = second - first;

    for (var i = 0; i < size; i++) {
        if (hs.has(arr[i]))
            return false;
        hs.add(arr[i]);
    }

    for (var i = 0; i < size; i++) {
        value = first + i * diff;
        if (!hs.has(value))
            return false;
    }
    return true;
};

function isAP3(arr, size) {
    let first = 9999999;
    let second = 9999999;
    const count = new Array(size).fill(0);
    let index = -1;
    for (var i = 0; i < size; i++) {
        if (arr[i] < first) {
            second = first;
            first = arr[i];
        }
        else if (arr[i] < second)
            second = arr[i];
    }
    const diff = second - first;
    for (var i = 0; i < size; i++) {
        index = (arr[i] - first) / diff ;
        if (index > size - 1 || count[index] !== 0)
            return false;
        count[index] = 1;
    }
    for (var i = 0; i < size; i++) {
        if (count[i] !== 1)
            return false;
    }
    return true;
};

function test33() {
    const first = [3, 6, 9, 12, 15];
    const size = first.length;

    console.log(`isAP ${isAP(first, size)}`)
    console.log(`isAP ${isAP2(first, size)}`)
    console.log(`isAP ${isAP3(first, size)}`)
};
//test33();

function findBalancedPoint(arr, size) {
    let first = 0;
    let second = 0;
    for (var i = 1; i < size; i++) {
        second += arr[i];
    }
    for (var i = 0; i < size; i++) {
        if (first === second) {
            return i;
        }
        if (i < size - 1)
            first += arr[i];
        second -= arr[i + 1];
    }
    return -1;
};

function test34() {
    const arr = [-7, 1, 5, 2, -4, 3, 0];
    console.info("BalancedPoint : " , findBalancedPoint(arr, arr.length));
};
//test34();

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
    return -9999;
};

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

    return 9999;
};

function ClosestNumber(arr, size, num) {
    let start = 0;
    let stop = size - 1;
    let output = -1;
    let minDist = 9999;
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
};

function test34() {
    const arr = [-7, 1, 2, 3, 6, 8, 10];
    console.info("findFloor : " , findFloor(arr, arr.length, 4));        
    console.info("findCeil : " , findCeil(arr, arr.length, 4));
    console.info("ClosestNumber : " , ClosestNumber(arr, arr.length, 4));
};
//test34();


function DuplicateKDistance(arr, size, k) {
    const hm = new Map();

    for (let i = 0; i < size; i++) {
        if (hm.has(arr[i]) && i - hm.get(arr[i]) <= k) {
            console.log(`Value:${arr[i]} Index: ${hm.get(arr[i])} & ${i}`);
            return true;
        } else
            hm.set(arr[i], i);
    }
    return false;
};

function test35() {
    const arr = [2, 3, 1, 4, 2, 1];
    DuplicateKDistance(arr, arr.length, 3);
};
//test35();

function frequencyCounts(arr, size) {
    let index;
    for (var i = 0; i < size; i++) {
        while (arr[i] > 0) {
            index = arr[i] - 1;
            if (arr[index] > 0) {
                arr[i] = arr[index];
                arr[index] = -1;
            }
            else {
                arr[index] -= 1;
                arr[i] = 0;
            }
        }
    }
    for (var i = 0; i < size; i++) {
        console.info((i + 1) , Math.abs(arr[i]));
    }
};

function test36() {
    const arr = [1, 2, 2, 2, 1];
    frequencyCounts(arr, arr.length);
};
//test36();


function KLargestElements(arrIn, size, k) {
    const arr = new Array(size);
    for (var i = 0; i < size; i++) {
        arr[i] = arrIn[i];
    }
    arr.sort(function cmp(a, b) { return (a - b); });
    for (var i = 0; i < size; i++) {
        if (arrIn[i] > arr[size - k]) {
            console.info(arrIn[i]);
        }
    }
};

function QuickSelectUtil(arr, lower, upper, k) {
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
        QuickSelectUtil(arr, start, upper - 1, k);
    if (k > upper)
        QuickSelectUtil(arr, upper + 1, stop, k);
};

function KLargestElements2(arrIn, size, k) {
    const arr = new Array(size);
    for (var i = 0; i < size; i++) {
        arr[i] = arrIn[i];
    }
    QuickSelectUtil(arr, 0, size - 1, size - k);
    for (var i = 0; i < size; i++) {
        if (arrIn[i] > arr[size - k]) {
            console.info(arrIn[i]);
        }
    }
};

function test37() {
    const arr = [1, 3, 4, 2, 2, 1, 5, 9, 3];
    KLargestElements(arr, arr.length, 4);
    //KLargestElements2(arr, arr.length, 4);
};
//test37();

function FixPoint(arr, size) {
    for (let i = 0; i < size; i++) {
        if (arr[i] === i)
            return i;
    }
    return -1;
};

function FixPoint2(arr, size) {
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
};

function test38() {
    const arr = [-1, 0, 2, 3, 6, 7, 9, 10, 18];
    console.log(FixPoint(arr, arr.length));
    console.log(FixPoint2(arr, arr.length));
};
//test38();

function subArraySums(arr, size, value) {
    let first = 0;
    let second = 0;
    let sum = arr[first];
    while (second < size && first < size) {
        if (sum === value){
            console.info("values between index : ", first ,"&", second);
            return true;
        }
        if (sum < value) {
            second += 1;
            if (second < size)
                sum += arr[second];
        }
        else {
            sum -= arr[first];
            first += 1;
        }
    }
    return false;
};

function test39() {
    const arr = [1, 3, 4, 4, 6, 7, 7, 8, 8];
    console.log(subArraySums(arr, arr.length, 17));
};
//test39();

function MaxConSub(arr, size) {
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
};

function test40() {
    const arr = [1, -2, 3, 4, -4, 6, -4, 8, 2];
    console.log(MaxConSub(arr, arr.length));
};
//test40();

function MaxConSubArr(A, sizeA, B, sizeB) {
    let currMax = 0;
    let maximum = 0;
    const hs = new Set();
    for (var i = 0; i < sizeB; i++)
        hs.add(B[i]);
    for (var i = 0; i < sizeA; i++){
        if (hs.has(A[i]))
            currMax = 0;
        else
            currMax = Math.max(A[i], currMax + A[i]);

        if (currMax < 0)
            currMax = 0;

        if (maximum < currMax)
            maximum = currMax;
    }
        
    console.info(maximum);
    return maximum;
};
function Binarysearch(arr, value) {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === value) {
            return true;
        }
        else if (arr[mid] < value) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    };
    return false;
};
function MaxConSubArr2(A, sizeA, B, sizeB) {
    B.sort(function cmp(a, b) { return (a - b); });
    let currMax = 0;
    let maximum = 0;
    for (let i = 0; i < sizeA; i++) {
        if (Binarysearch(B, A[i]))
            currMax = 0;
        else {
            currMax = Math.max(A[i], currMax + A[i]);
            if (currMax < 0)
                currMax = 0;
            if (maximum < currMax)
                maximum = currMax;
        }
    }
    console.info(maximum);
    return maximum;
};

function test41() {
    const arr = [1, 2, 3, 4, 4, 6, 4, 8, 2];
    const arr2 = [2,4, 8, 18, 10];
    
    console.log(MaxConSubArr(arr, arr.length, arr2, arr2.length));
    console.log(MaxConSubArr2(arr, arr.length, arr2, arr2.length));
};
//test41();


function RainWater(arr, size) {
    const leftHigh = new Array(size);
    const rightHigh = new Array(size);
    let max = arr[0];
    leftHigh[0] = arr[0];
    
    for (var i = 1; i < size; i++) {
        if (max < arr[i])
            max = arr[i];
        leftHigh[i] = max;
    }
    max = arr[size - 1];
    rightHigh[size - 1] = arr[size - 1];
    for (var i = (size - 2); i >= 0; i--) {
        if (max < arr[i])
            max = arr[i];
        rightHigh[i] = max;
    }
    let water = 0;
    for (var i = 0; i < size; i++) {
        water += Math.min(leftHigh[i], rightHigh[i]) - arr[i];
    }
    console.info(`Water : ${water}`);
    return water;
};

function RainWater2(arr, size) {
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
        }
        else {
            if (arr[right] > rightMax)
                rightMax = arr[right];
            else
                water += rightMax - arr[right];
            right -= 1;
        }
    }
    console.info(`Water : ${water}`);
    return water;
};

function test42() {
    const arr = [4, 0, 1, 5];
    RainWater(arr, arr.length);
    RainWater2(arr, arr.length);
};
test42();

function seperateEvenAndOdd(arr) {
    const size = arr.length;
    let left = 0;
    let right = size - 1;
    while (left < right) {
        if (arr[left] % 2 === 0) {
            left++;
        }
        else if (arr[right] % 2 === 1) {
            right--;
        }
        else {
            swap(arr, left, right);
            left++;
            right--;
        }
    };
};

function test43() {
    const first = [1, 0, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    seperateEvenAndOdd(first);
    console.log(first);
}
//test43();