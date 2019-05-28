
function merge(arr, tempArray, lowerIndex, middleIndex, upperIndex, compare) {
    let lowerStart = lowerIndex;
    const lowerStop = middleIndex;
    let upperStart = middleIndex + 1;
    const upperStop = upperIndex;
    let count = lowerIndex;
    while (lowerStart <= lowerStop && upperStart <= upperStop) {
        if (compare(arr[lowerStart], arr[upperStart])) {
            tempArray[count++] = arr[lowerStart++];
        }
        else {
            tempArray[count++] = arr[upperStart++];
        }
    };
    while (lowerStart <= lowerStop) {
        tempArray[count++] = arr[lowerStart++];
    };
    while (upperStart <= upperStop) {
        tempArray[count++] = arr[upperStart++];
    };
    for (let i = lowerIndex; i <= upperIndex; i++) {
        arr[i] = tempArray[i];
    }
};

function mergeSortUtil(arr, tempArray, lowerIndex, upperIndex, compare) {
    if (lowerIndex >= upperIndex) {
        return;
    }
    const middleIndex = Math.floor((lowerIndex + upperIndex) / 2);
    mergeSortUtil(arr, tempArray, lowerIndex, middleIndex, compare);
    mergeSortUtil(arr, tempArray, middleIndex + 1, upperIndex, compare);
    merge(arr, tempArray, lowerIndex, middleIndex, upperIndex, compare);
};

function mergeSort(arr, compare) {
    const size = arr.length;
    const tempArray = new Array(size);
    mergeSortUtil(arr, tempArray, 0, size - 1, compare);
};

less = (value1, value2) => value1 < value2;

more = (value1, value2) => value1 > value2;

const array = [3, 4, 2, 1, 6, 5, 7, 8, 1, 1];
mergeSort(array, less);
console.log(array);