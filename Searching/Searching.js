MIN_VALUE = -999999

function linearSearchUnsorted(arr, value) {
    let i = 0;
    const size = arr.length;
    for (i = 0; i < size; i++) {
        if (value === arr[i]) {
            return true;
        }
    }
    return false;
};

function linearSearchSorted(arr, value) {
    let i = 0;
    const size = arr.length;
    for (i = 0; i < size; i++) {
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
    while ((low <= high)) {
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

function main1(args) {
    const first = [1, 3, 5, 7, 6, 4, 2];
    const second = [2, 4, 6, 8, 10, 12, 14, 16, 21, 23, 24];
    console.log(linearSearchUnsorted(first, 7));
    console.log(linearSearchUnsorted(first, 9));
    console.log(linearSearchSorted(second, 8));
    console.log(linearSearchSorted(second, 9));
    console.log(Binarysearch(second, 10));
    console.log(BinarySearchRecursive(second, 10));
};

function printRepeating(arr) {
    let i;
    let j;
    const size = arr.length;
    console.log(" Repeating elements are ");
    for (i = 0; i < size; i++) {
        for (j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                console.log(arr[i]);
            }
        }
    }
};

function printRepeating2(arr) {
    let i;
    const size = arr.length;
    arr.sort(function cmp(a, b) { return (a - b); });
    console.log(" Repeating elements are ");
    for (i = 1; i < size; i++) {
        if (arr[i] === arr[i - 1]) {
            console.log(` ${arr[i]}`);
        }
    }
};


function printRepeating3(arr) {
    const hs = {};
    let i;
    const size = arr.length;
    console.log(" Repeating elements are ");
    for (i = 0; i < size; i++) {
        if (arr[i] in hs) {
            console.log(` ${arr[i]}`);
        }
        else {
            hs[arr[i]] = 1;
        }
    }
};


function printRepeating4(arr) {
    const count = new Array(size);
    let i;
    var size = arr.length;
    for (i = 0; i < size; i++) {
        count[i] = 0;
    }
    console.log(" Repeating elements are ");
    for (i = 0; i < size; i++) {
        if (count[arr[i]] === 1) {
            console.log(` ${arr[i]}`);
        }
        else {
            count[arr[i]]++;
        }
    }
};

function main2(args) {
    const first = [1, 3, 5, 3, 1, 4, 2, 2];
    (printRepeating(first));
    (printRepeating2(first));
    (printRepeating3(first));
    (printRepeating4(first));
};

function getMax(arr) {
    let i;
    let j;
    let max = arr[0];
    const size = arr.length;
    let count = 1;
    let maxCount = 1;
    for (i = 0; i < size; i++) {
        count = 1;
        for (j = i + 1; j < size; j++) {
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
    let i;
    arr.sort(function cmp(a, b) { return (a - b); });
    for (i = 1; i < size; i++) {
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
    const count = new Array(range);
    let i;
    for (i = 0; i < size; i++) {
        count[i] = 0;
    }
    for (i = 0; i < size; i++) {
        count[arr[i]]++;
        if (count[arr[i]] > maxCount) {
            maxCount = count[arr[i]];
            max = arr[i];
        }
    }
    return max;
};

function main3(args) {
    const first = [1, 3, 5, 3, 1, 2, 4, 2, 2];
    console.log(getMax(first));
    console.log(getMax2(first));
    console.log(getMax3(first, 10));
};

function getMajority(arr) {
    let i;
    let j;
    const size = arr.length;
    let max = 0;
    let count = 1;
    let maxCount = 0;
    for (i = 0; i < size; i++) {
        count = 1;
        for (j = i + 1; j < size; j++) {
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
        return MIN_VALUE;
    }
};

function getMajority2(arr) {
    const size = arr.length;
    const majIndex = Math.floor(size / 2);
    let count = 1;
    let i;
    let candidate;
    arr.sort(function cmp(a, b) { return (a - b); });
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
        return MIN_VALUE;
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
        return MIN_VALUE;
    }
};

function main4(args) {
    const first = [1, 3, 5, 3, 1, 2, 4, 2, 2, 2, 2, 2, 2];
    console.log(getMajority(first));
    console.log(getMajority2(first));
    console.log(getMajority3(first, 10));
}

function findMissingNumber(arr) {
    let i;
    let j;
    const size = arr.length;
    let found = 0;
    for (i = 1; i <= size; i++) {
        found = 0;
        for (j = 0; j < size; j++) {
            if (arr[j] === i) {
                found = 1;
                break;
            }
        }
        if (found === 0) {
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

function main5(args) {
    const first = [1, 3, 5, 7, 2, 4, 8, 9, 10];
    console.log(findMissingNumber(first));
    console.log(findMissingNumber2(first, 10));
}


function FindPair(arr, value) {
    let i;
    let j;
    const size = arr.length;
    for (i = 0; i < size; i++) {
        for (j = i + 1; j < size; j++) {
            if ((arr[i] + arr[j]) === value) {
                console.log(`The pair is : ${arr[i]},${arr[j]}`);
                return 1;
            }
        }
    }
    return 0;
};

function FindPair2(arr, value) {
    let first = 0;
    const size = arr.length;
    let second = size - 1;
    let curr;
    arr.sort(function cmp(a, b) { return (a - b); });
    while ((first < second)) {
        curr = arr[first] + arr[second];
        if (curr === value) {
            console.log(`The pair is ${arr[first]},${arr[second]}`);
            return 1;
        }
        else if (curr < value) {
            first++;
        }
        else {
            second--;
        }
    };
    return 0;
};


function FindPair3(arr, value) {
    const hs = {};
    const size = arr.length;
    let i;
    for (i = 0; i < size; i++) {
        if ((value - arr[i]) in hs) {
            console.log(`The pair is : ${arr[i]} , ${value - arr[i]}`);
            return 1;
        }
        hs[arr[i]] = 1;
    }
    return 0;
};


function main6(args) {
    const first = [1, 3, 5, 7, 2, 4, 8, 9, 10];
    console.log(FindPair(first, 9));
    console.log(FindPair2(first, 9));
    console.log(FindPair3(first, 9));
}

function minabsSumPair(arr) {
    let l;
    let r;
    const size = arr.length;
    let minSum;
    let sum;
    let minFirst;
    let minSecond;
    if (size < 2) {
        console.log("Invalid Input");
        return;
    }
    minFirst = 0;
    minSecond = 1;
    minSum = Math.abs(arr[0] + arr[1]);
    for (l = 0; l < size - 1; l++) {
        for (r = l + 1; r < size; r++) {
            sum = Math.abs(arr[l] + arr[r]);
            if (sum < minSum) {
                minSum = sum;
                minFirst = l;
                minSecond = r;
            }
        }
    }
    console.log(` The two elements with minimum sum are : ${arr[minFirst]} , ${arr[minSecond]}`);
};

function minabsSumPair2(arr) {
    let l;
    let r;
    const size = arr.length;
    let minSum;
    let sum;
    let minFirst;
    let minSecond;
    if (size < 2) {
        console.log("Invalid Input");
        return;
    }
    arr.sort(function cmp(a, b) { return (a - b); });
    minFirst = 0;
    minSecond = size - 1;
    minSum = Math.abs(arr[minFirst] + arr[minSecond]);
    for (l = 0, r = size - 1; l < r;) {
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
    console.log(` The two elements with minimum sum are : ${arr[minFirst]} , ${arr[minSecond]}`);
};

function main7(args) {
    const first = [1, 3, 5, 7, 2, 4, -12, 8, -9, 9, 10];
    minabsSumPair(first);
    minabsSumPair2(first);
}

function SearchBotinicArrayMax(arr) {
    const size = arr.length;
    let start = 0;
    let end = size - 1;
    let mid = Math.floor((start + end) / 2);
    let maximaFound = 0;
    if (size < 3) {
        console.log("error");
        return 0;
    }
    while ((start <= end)) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid]) {
            maximaFound = 1;
            break;
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
    if (maximaFound === 0) {
        console.log("error");
        return 0;
    }
    return arr[mid];
};

function main8(args) {
    const first = [1, 3, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    console.log(SearchBotinicArrayMax(first));
}

function SearchBitonicArray(arr, key) {
    const size = arr.length;
    const max = FindMaxBitonicArray(arr);
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


function FindMaxBitonicArray(arr) {
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
    console.log("error");
    return -1;
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

function main9(args) {
    const first = [1, 3, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    console.log(SearchBitonicArray(first, 8));
    console.log(SearchBitonicArray(first, 7));
    console.log(SearchBitonicArray(first, 12));
}

function findKeyCount(arr, key) {
    const size = arr.length;
    let i;
    let count = 0;
    for (i = 0; i < size; i++) {
        if (arr[i] === key) {
            count++;
        }
    }
    return count;
};

function findKeyCount2(arr, key) {
    const size = arr.length;
    let firstIndex;
    let lastIndex;
    firstIndex = findFirstIndex(arr, 0, size - 1, key);
    lastIndex = findLastIndex(arr, 0, size - 1, key);
    return (lastIndex - firstIndex + 1);
};

function findFirstIndex(arr, start, end, key) {
    let mid;
    if (end < start) {
        return -1;
    }
    mid = Math.floor((start + end) / 2);
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
    let mid;
    if (end < start) {
        return -1;
    }
    mid = Math.floor((start + end) / 2);
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

function swap(arr, first, second) {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

function seperateEvenAndOdd(arr) {
    const size = arr.length;
    let left = 0;
    let right = size - 1;
    while ((left < right)) {
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

function main10(args) {
    const first = [1, 0, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    seperateEvenAndOdd(first);
    console.log(first.toString());
}

function maxProfit(stocks) {
    const size = stocks.length;
    let buy = 0;
    let sell = 0;
    let curMin = 0;
    let currProfit = 0;
    let maxProfit = 0;
    let i;
    for (i = 0; i < size; i++) {
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

function main11(args) {
    const first = [10, 10, 5, 7, 9, 11, 12, 8, 5, 3, 10];
    maxProfit(first);
}

function getMedian(arr) {
    const size = arr.length;
    arr.sort(function cmp(a, b) { return (a - b); });
    return arr[Math.floor(size / 2)];
};

function main12(args) {
    const first = [10, 10, 5, 7, 9, 11, 12, 8, 5, 3, 10];
    console.log(`median value is :: ${getMedian(first)}`);
}

function findMedian(arrFirst, arrSecond) {
    const sizeFirst = arrFirst.length;
    const sizeSecond = arrSecond.length;
    const medianIndex = Math.floor(((sizeFirst + sizeSecond) + (sizeFirst + sizeSecond) % 2) / 2);
    let i = 0;
    let j = 0;
    let count = 0;
    while ((count < medianIndex - 1)) {
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

function main13(args) {
    const first = [10, 10, 5, 7, 9, 11];
    const second = [12, 8, 5, 3, 10];
    first.sort(function cmp(a, b) { return (a - b); });
    second.sort(function cmp(a, b) { return (a - b); });
    console.log(`median value is :: ${findMedian(first, second)}`);
}

function min(a, b) {
    return a > b ? b : a;
};

function max(a, b) {
    return a < b ? b : a;
};

function BinarySearch01(arr) {
    const size = arr.length;
    if (size === 0) {
        return 0;
    }
    return BinarySearch01Util(arr, 0, size - 1);
};

function BinarySearch01Util(arr, start, end) {
    let mid;
    if (end < start) {
        return -1;
    }
    mid = Math.floor((start + end) / 2);
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

function main14(args) {
    const first = "00000000111";
    console.log(`BinarySearch01 index is :: ${BinarySearch01(first)}`);
}


function BinarySearchRotateArray(arr, key) {
    const size = arr.length;
    return BinarySearchRotateArrayUtil(arr, 0, size - 1, key);
};

function BinarySearchRotateArrayUtil(arr, start, end, key) {
    let mid;
    if (end < start) {
        return -1;
    }
    mid = Math.floor((start + end) / 2);
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

function main15(args) {
    first = [7, 9, 10, 11, 3, 5, 7]
    console.log(`BinarySearchRotateArray index is :: ${BinarySearchRotateArray(first, 8)}`);
    console.log(`BinarySearchRotateArray index is :: ${BinarySearchRotateArray(first, 7)}`);
    console.log(`BinarySearchRotateArray index is :: ${BinarySearchRotateArray(first, 6)}`);
}

function FirstRepeated(arr) {
    let i;
    let j;
    const size = arr.length;
    for (i = 0; i < size; i++) {
        for (j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return 0;
};

function main16(args) {
    first = [7, 9, 3, 11, 3, 5, 7]
    console.log(`FirstRepeated :: ${FirstRepeated(first)}`);
}

function transformArrayAB(str) {
    const size = str.length;
    arr = str.split("");
    const N = Math.floor(size / 2);
    let i;
    let j;
    for (i = 1; i < N; i++) {
        for (j = 0; j < i; j++) {
            swap(arr, N - i + 2 * j, N - i + 2 * j + 1);
        }
    }
    return arr.join("");
};

function main17(args) {
    first = "aaaabbbb"
    console.log(transformArrayAB(first));
}


function checkPermutation(array1, array2) {
    const size1 = array1.length;
    const size2 = array2.length;
    if (size1 !== size2) {
        return false;
    }
    array1.sort();
    array2.sort();
    for (let i = 0; i < size1; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};

function checkPermutation2(array1, array2) {
    let i;
    const size1 = array1.length;
    const size2 = array2.length;
    if (size1 !== size2) {
        return false;
    }
    const ht = {};
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
                delete  ht[array2[i]]
            }
        }
    }
    return true;
};

var first = [1, 2, 3, 1, 2, 3, 5, 6, 7, 7, 8, 9, 3, 4, 5]
const second = [1, 2, 4, 5, 3, 1, 2, 3, 5, 6, 7, 7, 8, 9, 3];

console.log( `checkPermutation ${checkPermutation(first, second)}`)
console.log( `checkPermutation2 ${checkPermutation2(first, second)}`)

function removeDuplicates(array) {
    let j = 0;
    let i;
    const size = array.length;
    if (size === 0) {
        return [];
    }
    array.sort(function cmp(a, b) { return (a - b); });
    for (i = 1; i < size; i++) {
        if (array[i] !== array[j]) {
            j++;
            array[j] = array[i];
        }
    }
    return array.slice(0, j + 1);
};

function main18(args) {
    first = [1, 2, 3, 1, 2, 3, 5, 6, 7, 7, 8, 9, 3, 4, 5]
    console.log(removeDuplicates(first));
}

function FindElementIn2DArray(arr, r, c, value) {
    let row = 0;
    let column = c - 1;
    while ((row < r && column >= 0)) {
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

function main19(args) {
    const f = new Array(10);
    let count = 0;
    for (i = 0; i < 10; i++) {
        f[i] = new Array(10);
        for (j = 0; j < 10; j++) {
            f[i][j] = count++;
        }
    }

    console.log(FindElementIn2DArray(f, 10, 10, 21));
    console.log(FindElementIn2DArray(f, 10, 10, 121));
}


main1();
main2();
main3();
main4();
main5();
main6();
main7();
main8();
main9();
main10();
main11();
main12();
main13();
main14();
main15();
main16();
main17();
main18();
main19();